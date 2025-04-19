// src/features/court-fee-calculator/calculator.ts

import { feeRules } from "./data";

export function calculateFee(state: string, caseType: string, claimAmount: number) {
  const rule = feeRules.find(r => r.state === state && r.caseType === caseType);

  if (!rule) return { totalFee: 0, breakdown: ["No rule found."] };

  if (rule.feeType === "fixed") {
    return { totalFee: rule.fee, breakdown: [`Fixed fee: ₹${rule.fee}`] };
  }

  let totalFee = 0;
  let breakdown: string[] = [];

  for (const slab of rule.slabs) {
    if (slab.upto && claimAmount <= slab.upto) {
      totalFee = slab.fee;
      breakdown.push(`Up to ₹${slab.upto}: ₹${slab.fee}`);
      break;
    } else if (slab.above) {
      const extra = claimAmount - slab.above;
      const fee = Math.round(extra * slab.rate);
      totalFee += fee;
      breakdown.push(`Above ₹${slab.above}: ₹${fee} @ ${slab.rate * 100}%`);
    }
  }

  return { totalFee, breakdown };
}
