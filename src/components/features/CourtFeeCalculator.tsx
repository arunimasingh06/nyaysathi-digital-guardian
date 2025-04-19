
import { useState } from "react";
import { Calculator, IndianRupee, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { indianStates, caseTypes, feeTypes, calculateFee } from "@/utils/courtFeeCalculator";
import { toast } from "@/hooks/use-toast";

export function CourtFeeCalculator() {
  const [state, setState] = useState("");
  const [caseType, setCaseType] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState<{ totalFee: number; breakdown: string[] } | null>(null);
  
  const handleCalculate = () => {
    if (!state || !caseType || !amount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    const calculatedFee = calculateFee(state, caseType, Number(amount));
    setResult(calculatedFee);
  };
  
  return (
    <Card className="w-full shadow-md">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="flex items-center gap-2">
          <Scale className="h-6 w-6" />
          <div>
            <CardTitle>Court Fee Calculator</CardTitle>
            <p className="text-white/80 text-sm mt-1">
              Calculate court fees based on case type and jurisdiction
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent className="max-h-[200px]">
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="case-type">Case Type</Label>
              <Select value={caseType} onValueChange={setCaseType}>
                <SelectTrigger id="case-type">
                  <SelectValue placeholder="Select case type" />
                </SelectTrigger>
                <SelectContent>
                  {caseTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="claim-amount">Claim Amount (₹)</Label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
              <Input
                id="claim-amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Button 
            onClick={handleCalculate} 
            className="w-full bg-indigo-600 hover:bg-indigo-700"
            disabled={!state || !caseType || !amount}
          >
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Fees
          </Button>
        </div>
        
        {result && (
          <div className="mt-6 rounded-lg border p-4 bg-gray-50">
            <h3 className="font-medium text-center mb-3">Fee Breakdown</h3>
            <div className="space-y-2">
              {result.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item}</span>
                </div>
              ))}
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total:</span>
                <span className="text-indigo-600">₹{result.totalFee.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
