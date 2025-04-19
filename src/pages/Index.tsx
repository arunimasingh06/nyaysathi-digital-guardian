
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { EvidenceTracker } from "@/components/features/EvidenceTracker";
import { LegalResearch } from "@/components/features/LegalResearch";
import { CaseTracker } from "@/components/features/CaseTracker";
import { CourtFeeCalculator } from "@/components/features/CourtFeeCalculator";
import { LegalRightsChatbot } from "@/components/features/LegalRightsChatbot";
import { Separator } from "@/components/ui/separator";
import { Database, FileText, Lock, Shield } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1">
          <AppHeader />
          <main className="container py-6">
            <section className="mb-8">
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-nyaysathi-primary mb-2">
                  NyaySathi <span className="text-nyaysathi-accent">Digital Guardian</span>
                </h1>
                <p className="text-muted-foreground">
                  Modernizing India's legal ecosystem with AI and blockchain technology
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6 border">
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-nyaysathi-primary" />
                    Secure Evidence Management
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Store and track evidence with tamper-proof blockchain technology, 
                    ensuring complete integrity throughout the legal process.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 border">
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-nyaysathi-primary" />
                    Streamlined Legal Research
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Quickly find relevant legal codes, case precedents, and statutes with our 
                    AI-powered research assistant.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 border">
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-nyaysathi-primary" />
                    Smart Contract Technology
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Automate case tracking and notifications using secure blockchain-based 
                    smart contracts for reliable case management.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 border">
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Database className="h-5 w-5 text-nyaysathi-primary" />
                    Transparent Immutable Records
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    All case data and evidence is stored with cryptographic security, 
                    creating a verifiable chain of custody that cannot be altered.
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section id="evidence-tracker" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Evidence Tracker</h2>
              <EvidenceTracker />
            </section>
            
            <section id="legal-research" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Legal Research Assistant</h2>
              <LegalResearch />
            </section>
            
            <section id="case-tracker" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Smart Case Tracker</h2>
              <CaseTracker />
            </section>
            
            <section id="court-fee" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Court Fee Calculator</h2>
              <CourtFeeCalculator />
            </section>
            
            <section id="rights-chatbot" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Legal Rights Chatbot</h2>
              <LegalRightsChatbot />
            </section>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
