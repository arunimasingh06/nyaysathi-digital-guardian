
import { Book, BookOpen, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LegalResearch() {
  return (
    <Card className="w-full shadow-md">
      <CardHeader className="bg-gradient-to-r from-nyaysathi-primary to-nyaysathi-secondary text-white">
        <div className="flex items-center gap-2">
          <Search className="h-6 w-6" />
          <div>
            <CardTitle>Legal Research Assistant</CardTitle>
            <CardDescription className="text-white/80">
              Find relevant IPC/CrPC sections and case references
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="keyword">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="keyword">Keyword Search</TabsTrigger>
            <TabsTrigger value="section">Section Search</TabsTrigger>
          </TabsList>
          
          <TabsContent value="keyword" className="space-y-4 pt-4">
            <div className="flex items-center gap-2">
              <Input 
                placeholder="Search legal codes and cases..." 
                className="flex-1"
              />
              <Button type="submit">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="state">State</Label>
                <Select>
                  <SelectTrigger id="state">
                    <SelectValue placeholder="All States" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="court-level">Court Level</Label>
                <Select>
                  <SelectTrigger id="court-level">
                    <SelectValue placeholder="All Courts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courts</SelectItem>
                    <SelectItem value="supreme">Supreme Court</SelectItem>
                    <SelectItem value="high">High Courts</SelectItem>
                    <SelectItem value="district">District Courts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="rounded-md border p-4 bg-muted/40">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-nyaysathi-accent" />
                <h3 className="font-medium">Popular Searches</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">Criminal Defamation</Button>
                <Button variant="outline" size="sm">Dowry Prohibition</Button>
                <Button variant="outline" size="sm">Right to Information</Button>
                <Button variant="outline" size="sm">Motor Vehicle Accident</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="section" className="space-y-4 pt-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="code-type">Code Type</Label>
                <Select>
                  <SelectTrigger id="code-type">
                    <SelectValue placeholder="Select Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ipc">Indian Penal Code</SelectItem>
                    <SelectItem value="crpc">Criminal Procedure Code</SelectItem>
                    <SelectItem value="cpc">Civil Procedure Code</SelectItem>
                    <SelectItem value="it">Income Tax Act</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="section-number">Section Number</Label>
                <Input id="section-number" placeholder="e.g. 302" />
              </div>
            </div>
            
            <Button className="w-full" type="submit">
              <Book className="h-4 w-4 mr-2" />
              Retrieve Section
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
