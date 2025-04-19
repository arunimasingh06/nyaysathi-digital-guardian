
import { Calendar, Clock, FileText, Bell } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CaseTracker() {
  return (
    <Card className="w-full shadow-md">
      <CardHeader className="bg-gradient-to-r from-nyaysathi-primary to-nyaysathi-secondary text-white">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6" />
          <div>
            <CardTitle>Smart Case Tracker</CardTitle>
            <CardDescription className="text-white/80">
              Real-time updates and notifications for your cases
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="recent">Recent Activities</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="pt-4">
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg">State vs. Sharma</h3>
                    <p className="text-sm text-muted-foreground">Case No. CR123/2023</p>
                  </div>
                  <Badge className="bg-nyaysathi-accent">Hearing Soon</Badge>
                </div>
                <Separator className="my-3" />
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-nyaysathi-primary" />
                    <p className="text-sm">May 15, 2025</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-nyaysathi-primary" />
                    <p className="text-sm">10:30 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <FileText className="h-4 w-4 text-nyaysathi-primary" />
                  <p className="text-sm">Affidavit submission required</p>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button size="sm" variant="outline">Set Reminder</Button>
                </div>
              </div>
              
              <div className="rounded-md border p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg">Patel vs. Mehta</h3>
                    <p className="text-sm text-muted-foreground">Case No. CS456/2024</p>
                  </div>
                  <Badge variant="outline">Next Week</Badge>
                </div>
                <Separator className="my-3" />
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-nyaysathi-primary" />
                    <p className="text-sm">May 22, 2025</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-nyaysathi-primary" />
                    <p className="text-sm">2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <FileText className="h-4 w-4 text-nyaysathi-primary" />
                  <p className="text-sm">Document verification</p>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button size="sm" variant="outline">Set Reminder</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="recent" className="pt-4 space-y-4">
            <div className="rounded-md border p-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <p className="text-sm">Hearing rescheduled for case CR123/2023</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1 ml-4">2 hours ago</p>
            </div>
            
            <div className="rounded-md border p-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p className="text-sm">Document submitted for case CS456/2024</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1 ml-4">Yesterday</p>
            </div>
            
            <div className="rounded-md border p-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <p className="text-sm">Reminder: Evidence submission due in 3 days</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1 ml-4">2 days ago</p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 rounded-md bg-muted p-4">
          <div className="flex items-center gap-2 mb-2">
            <Bell className="h-5 w-5 text-nyaysathi-accent" />
            <h3 className="font-medium">Case Notifications</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Receive alerts via WhatsApp or in-app notifications
          </p>
          <Button className="w-full" variant="outline">
            Configure Notification Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
