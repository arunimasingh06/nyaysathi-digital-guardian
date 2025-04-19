
import { useState } from "react";
import { MessageSquare, Send, HelpCircle } from "lucide-react";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Message = {
  id: number;
  sender: 'user' | 'bot';
  text: string;
};

export function LegalRightsChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! I\'m your Legal Rights Assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState("");
  
  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: input
    };
    setMessages([...messages, userMessage]);
    
    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        sender: 'bot',
        text: getResponse(input)
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
    
    setInput("");
  };
  
  // Simple response function (in a real app, this would be AI-powered)
  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('arrest') || lowerQuery.includes('police')) {
      return "If you're arrested, you have the right to know the grounds of arrest, right to bail (for bailable offenses), and right to consult a lawyer. The police must present you before a magistrate within 24 hours of arrest under Section 57 of CrPC.";
    } else if (lowerQuery.includes('fir') || lowerQuery.includes('complaint')) {
      return "To file an FIR, visit the police station with jurisdiction over the area where the incident occurred. If the police refuse to file your FIR, you can approach the Superintendent of Police or file a complaint with the magistrate under Section 156(3) of CrPC.";
    } else if (lowerQuery.includes('tenant') || lowerQuery.includes('landlord')) {
      return "Rental agreements in India are governed by the Rent Control Acts of respective states. As a tenant, you have rights regarding notice periods, security deposits, and protection against arbitrary eviction.";
    } else {
      return "I can help you understand your legal rights regarding police encounters, filing complaints, tenant-landlord disputes, and more. Could you please specify your concern?";
    }
  };
  
  return (
    <Card className="w-full shadow-md">
      <CardHeader className="bg-gradient-to-r from-nyaysathi-primary to-nyaysathi-secondary text-white">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6" />
          <div>
            <CardTitle>Legal Rights Chatbot</CardTitle>
            <CardDescription className="text-white/80">
              Learn about your legal rights in simple language
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex border-b">
          <div className="flex-1 px-4 py-2">
            <Select defaultValue="english">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
                <SelectItem value="marathi">Marathi</SelectItem>
                <SelectItem value="tamil">Tamil</SelectItem>
                <SelectItem value="telugu">Telugu</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <ScrollArea className="h-72 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <Avatar className={`h-8 w-8 ${message.sender === 'user' ? 'bg-nyaysathi-secondary' : 'bg-nyaysathi-accent'}`}>
                    <AvatarFallback>
                      {message.sender === 'user' ? 'U' : 'NS'}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`rounded-lg px-3 py-2 ${message.sender === 'user' ? 'bg-nyaysathi-primary text-white' : 'bg-muted'}`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t p-3">
        <div className="flex w-full items-center gap-2">
          <Input 
            placeholder="Ask about your legal rights..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <Button 
            size="icon" 
            onClick={handleSend}
            disabled={!input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
