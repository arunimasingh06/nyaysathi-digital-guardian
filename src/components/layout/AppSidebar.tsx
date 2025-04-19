
import { 
  Archive, 
  Calculator, 
  Calendar, 
  FileText, 
  Home, 
  MessageSquare, 
  Search 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="flex h-16 items-center px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-nyaysathi-accent">
            <span className="text-white font-bold">NS</span>
          </div>
          <h3 className="text-lg font-semibold text-sidebar-foreground">
            NyaySathi
          </h3>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/">
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#evidence-tracker">
                    <Archive className="h-5 w-5" />
                    <span>Evidence Tracker</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#legal-research">
                    <Search className="h-5 w-5" />
                    <span>Legal Research</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#case-tracker">
                    <Calendar className="h-5 w-5" />
                    <span>Case Tracker</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#court-fee">
                    <Calculator className="h-5 w-5" />
                    <span>Court Fee Calculator</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#rights-chatbot">
                    <MessageSquare className="h-5 w-5" />
                    <span>Legal Rights Chatbot</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#resources">
                    <FileText className="h-5 w-5" />
                    <span>Legal Documents</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <Button variant="outline" className="w-full bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80">
          Get Help
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
