// src/features/court-fee-calculator/CourtFeeForm.tsx

import React, { useState } from "react";
import { calculateFee } from "./calculator";
import { feeRules } from "./data";

export default function CourtFeeForm() {
  const [state, setState] = useState("Karnataka");
  const [caseType, setCaseType] = useState("Civil Suit");
  const [claimAmount, setClaimAmount] = useState(0);
  const [result, setResult] = useState<{ totalFee: number; breakdown: string[] } | null>(null);

  const states = [...new Set(feeRules.map(r => r.state))];
  const caseTypes = feeRules.filter(r => r.state === state).map(r => r.caseType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = calculateFee(state, caseType, claimAmount);
    setResult(res);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Court Fee Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">State</label>
          <select value={state} onChange={e => setState(e.target.value)} className="w-full p-2 border rounded">
            {states.map((s, i) => <option key={i} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className="block font-medium">Case Type</label>
          <select value={caseType} onChange={e => setCaseType(e.target.value)} className="w-full p-2 border rounded">
            {caseTypes.map((ct, i) => <option key={i} value={ct}>{ct}</option>)}
          </select>
        </div>

        <div>
          <label className="block font-medium">Claim Amount (₹)</label>
          <input
            type="number"
            value={claimAmount}
            onChange={e => setClaimAmount(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Calculate
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-gray-50 p-4 rounded">
          <h3 className="font-semibold text-lg">Result</h3>
          <p className="text-green-600 font-bold">Total Fee: ₹{result.totalFee}</p>
          <ul className="list-disc pl-5 mt-2 text-sm">
            {result.breakdown.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
