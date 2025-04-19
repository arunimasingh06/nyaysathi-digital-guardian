
import { useState } from "react";
import { Calculator } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export function CourtFeeCalculator() {
  const [amount, setAmount] = useState("");
  const [calculated, setCalculated] = useState(false);
  
  const handleCalculate = () => {
    setCalculated(true);
  };
  
  return (
    <Card className="w-full shadow-md">
      <CardHeader className="bg-gradient-to-r from-nyaysathi-primary to-nyaysathi-secondary text-white">
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6" />
          <div>
            <CardTitle>Court Fee Calculator</CardTitle>
            <CardDescription className="text-white/80">
              Calculate court fees and stamp duty for your case
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="case-type">Case Type</Label>
            <Select>
              <SelectTrigger id="case-type">
                <SelectValue placeholder="Select case type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="civil">Civil Suit</SelectItem>
                <SelectItem value="property">Property Dispute</SelectItem>
                <SelectItem value="family">Family Matter</SelectItem>
                <SelectItem value="commercial">Commercial Dispute</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="jurisdiction">Jurisdiction</Label>
            <Select>
              <SelectTrigger id="jurisdiction">
                <SelectValue placeholder="Select jurisdiction" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="karnataka">Karnataka</SelectItem>
                <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                <SelectItem value="telangana">Telangana</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="claim-amount">Claim Amount (₹)</Label>
            <Input 
              id="claim-amount" 
              placeholder="Enter amount in rupees" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          
          <Button onClick={handleCalculate} className="w-full">Calculate Fees</Button>
        </div>
        
        {calculated && (
          <div className="mt-6 rounded-md border p-4">
            <h3 className="font-medium text-center mb-3">Fee Breakdown</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Court Filing Fee:</span>
                <span className="text-sm font-medium">₹ 12,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Stamp Duty:</span>
                <span className="text-sm font-medium">₹ 5,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Process Fee:</span>
                <span className="text-sm font-medium">₹ 1,000</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total:</span>
                <span className="text-nyaysathi-primary">₹ 18,500</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
