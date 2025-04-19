
import { Bell, Menu, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export function AppHeader() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-background px-4 border-b">
      <div className="flex items-center">
        {isMobile ? (
          <SidebarTrigger>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SidebarTrigger>
        ) : null}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex h-8 w-8 items-center justify-center rounded-md bg-nyaysathi-primary">
            <span className="text-white font-bold">NS</span>
          </div>
          <h1 className="text-xl font-bold text-nyaysathi-primary">
            NyaySathi
            <span className="ml-1 text-xs font-normal text-nyaysathi-accent">DIGITAL GUARDIAN</span>
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-nyaysathi-accent" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Avatar className="h-8 w-8 border-2 border-nyaysathi-accent">
          <AvatarFallback className="bg-nyaysathi-primary text-white">
            US
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
