
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
      breakdown: ["No fee rule found for this combination."]
    };
  }

  if (rule.feeType === "Fixed") {
    return {
      totalFee: rule.fee || 0,
      breakdown: [`Fixed court fee: ₹${rule.fee}`]
    };
  }

  let totalFee = 0;
  const breakdown: string[] = [];

  if (rule.slabs) {
    for (const slab of rule.slabs) {
      if (slab.upto && claimAmount <= slab.upto) {
        totalFee = slab.fee || 0;
        breakdown.push(`Up to ₹${slab.upto.toLocaleString()}: ₹${slab.fee?.toLocaleString()}`);
        break;
      } else if (slab.above && claimAmount > slab.above) {
        const slabAmount = claimAmount - slab.above;
        const fee = Math.round(slabAmount * (slab.rate || 0));
        totalFee += fee;
        breakdown.push(`Above ₹${slab.above.toLocaleString()}: ₹${fee.toLocaleString()} (${(slab.rate || 0) * 100}%)`);
      }
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
