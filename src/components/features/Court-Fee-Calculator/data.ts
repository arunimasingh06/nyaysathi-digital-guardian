// src/features/court-fee-calculator/data.ts

export const feeRules = [
    {
      state: "Karnataka",
      caseType: "Civil Suit",
      feeType: "slab",
      slabs: [
        { upto: 10000, fee: 200 },
        { above: 10000, rate: 0.02 }
      ]
    },
    {
      state: "Karnataka",
      caseType: "Criminal Case",
      feeType: "fixed",
      fee: 50
    },
    {
      state: "Delhi",
      caseType: "Civil Suit",
      feeType: "slab",
      slabs: [
        { upto: 20000, fee: 250 },
        { above: 20000, rate: 0.015 }
      ]
    }
  ];
  