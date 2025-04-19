
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

export const feeTypes = ["Slab", "Fixed"];

export const feeRules = [
  {
    state: "Karnataka",
    caseType: "Civil Suit",
    feeType: "Slab",
    slabs: [
      { upto: 10000, fee: 200 },
      { above: 10000, rate: 0.02 }
    ]
  },
  {
    state: "Karnataka",
    caseType: "Criminal Case",
    feeType: "Fixed",
    fee: 50
  },
  {
    state: "Delhi",
    caseType: "Civil Suit",
    feeType: "Slab",
    slabs: [
      { upto: 20000, fee: 250 },
      { above: 20000, rate: 0.015 }
    ]
  }
  // Note: More rules can be added as needed
];
