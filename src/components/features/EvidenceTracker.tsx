
import { useState } from "react";
import { Archive, FileText, Link, Shield } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function EvidenceTracker() {
  const [isUploading, setIsUploading] = useState(false);
  
  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
    }, 2000);
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="bg-gradient-to-r from-nyaysathi-primary to-nyaysathi-secondary text-white">
        <div className="flex items-center gap-2">
          <Archive className="h-6 w-6" />
          <div>
            <CardTitle>Evidence Tracker</CardTitle>
            <CardDescription className="text-white/80">
              Secure blockchain-based evidence management
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="evidence-name">Evidence Name</Label>
              <Input id="evidence-name" placeholder="e.g. CCTV Footage" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="case-number">Case Number</Label>
              <Input id="case-number" placeholder="e.g. CR123/2023" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="evidence-description">Description</Label>
            <Input id="evidence-description" placeholder="Brief description of the evidence" />
          </div>
          
          <div className="space-y-2">
            <Label>Evidence File</Label>
            <div className="border-2 border-dashed border-muted rounded-md p-6 text-center">
              <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop your file here, or click to browse
              </p>
              <Button variant="secondary" size="sm">Browse Files</Button>
            </div>
          </div>
          
          <div className="bg-muted p-3 rounded-md">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-nyaysathi-accent" />
              <span className="font-medium">Blockchain Security</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your evidence will be assigned a unique cryptographic hash stored on the blockchain, ensuring it cannot be tampered with.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4 pb-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs flex items-center gap-1">
            <Link className="h-3 w-3" />
            <span>Blockchain Secured</span>
          </Badge>
        </div>
        <Button onClick={handleUpload} disabled={isUploading}>
          {isUploading ? "Processing..." : "Upload & Secure Evidence"}
        </Button>
      </CardFooter>
    </Card>
  );
}
