
interface FeeRule {
  state: string;
  caseType: string;
  feeType: string;
  fee?: number;
  slabs?: Array<{
    upto?: number;
    above?: number;
    fee?: number;
    rate?: number;
  }>;
}

export function calculateFee(state: string, caseType: string, claimAmount: number): { totalFee: number; breakdown: string[] } {
  const rule = feeRules.find(r => r.state === state && r.caseType === caseType);
  
  if (!rule) {
    return {
      totalFee: 0,
      breakdown: ["No applicable fee structure found for this jurisdiction and matter type."]
    };
  }

  if (rule.feeType === "Fixed") {
    return {
      totalFee: rule.fee || 0,
      breakdown: [`Standard adjudication fee as per ${state} Court Fees Act: ₹${rule.fee?.toLocaleString()}`]
    };
  }

  let totalFee = 0;
  const breakdown: string[] = [];

  if (rule.slabs) {
    for (const slab of rule.slabs) {
      if (slab.upto && claimAmount <= slab.upto) {
        totalFee = slab.fee || 0;
        breakdown.push(`Ad Valorem fee for pecuniary jurisdiction up to ₹${slab.upto.toLocaleString()}: ₹${slab.fee?.toLocaleString()}`);
        break;
      } else if (slab.above && claimAmount > slab.above) {
        const slabAmount = claimAmount - slab.above;
        const fee = Math.round(slabAmount * (slab.rate || 0));
        totalFee += fee;
        breakdown.push(`Incremental levy for valuation exceeding ₹${slab.above.toLocaleString()}: ₹${fee.toLocaleString()} (${(slab.rate || 0) * 100}% of differential amount)`);
      }
    }
  }

  // Add additional rules for specific states
  if (state === "Maharashtra" || state === "Delhi") {
    const processingFee = Math.min(500, totalFee * 0.05);
    totalFee += processingFee;
    breakdown.push(`Judicial processing charges: ₹${processingFee.toLocaleString()}`);
  }

  if (state === "Karnataka" && caseType === "Civil Suit") {
    const litigationWelfareFee = 250;
    totalFee += litigationWelfareFee;
    breakdown.push(`Litigant's Welfare Fund contribution: ₹${litigationWelfareFee}`);
  }

  // Handle multiple slabs
  let cumulativeFee = 0;
  if (rule.slabs && rule.slabs.length > 1) {
    for (let i = 0; i < rule.slabs.length; i++) {
      const slab = rule.slabs[i];
      const nextSlab = i < rule.slabs.length - 1 ? rule.slabs[i + 1] : null;
      
      if (slab.upto && nextSlab?.above && slab.upto === nextSlab.above && claimAmount > slab.upto) {
        cumulativeFee += slab.fee || 0;
      }
    }
    
    if (cumulativeFee > 0) {
      totalFee += cumulativeFee;
      breakdown.push(`Cumulative base fee for graduated slabs: ₹${cumulativeFee.toLocaleString()}`);
    }
  }

  return { totalFee, breakdown };
}

export const feeRules: FeeRule[] = [
  {
    state: "Karnataka",
    caseType: "Civil Suit",
    feeType: "Slab",
    slabs: [
      { upto: 100000, fee: 2500 },
      { above: 100000, rate: 0.02 }
    ]
  },
  {
    state: "Karnataka",
    caseType: "Criminal Case",
    feeType: "Fixed",
    fee: 1000
  },
  {
    state: "Delhi",
    caseType: "Property Suit",
    feeType: "Slab",
    slabs: [
      { upto: 200000, fee: 3000 },
      { above: 200000, rate: 0.015 }
    ]
  },
  {
    state: "Maharashtra",
    caseType: "Civil Suit",
    feeType: "Slab",
    slabs: [
      { upto: 100000, fee: 2000 },
      { above: 100000, rate: 0.025 }
    ]
  },
  {
    state: "Delhi",
    caseType: "Divorce Case",
    feeType: "Fixed",
    fee: 3500
  },
  {
    state: "Uttar Pradesh",
    caseType: "Property Suit",
    feeType: "Slab",
    slabs: [
      { upto: 150000, fee: 2200 },
      { above: 150000, rate: 0.018 }
    ]
  },
  {
    state: "Tamil Nadu",
    caseType: "Rent Control",
    feeType: "Slab",
    slabs: [
      { upto: 50000, fee: 1000 },
      { above: 50000, rate: 0.015 }
    ]
  },
  {
    state: "Gujarat",
    caseType: "Civil Suit",
    feeType: "Slab",
    slabs: [
      { upto: 75000, fee: 1800 },
      { above: 75000, rate: 0.022 }
    ]
  }
];

export const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir"
];

export const caseTypes = [
  "Civil Suit",
  "Criminal Case",
  "Property Suit",
  "Divorce Case",
  "Rent Control"
];

export const feeTypes = ["Fixed", "Slab"];
