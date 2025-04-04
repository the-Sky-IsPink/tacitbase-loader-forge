
import React from "react";
import { LoaderShowcase } from "@/components/loader/LoaderShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 border-b bg-gradient-to-r from-primary-100 to-primary-300">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-bold font-display">Tacitbase Design System</h1>
          <p className="text-muted-foreground">Modern UI component library</p>
        </div>
      </header>
      
      <main className="py-8">
        <LoaderShowcase />
      </main>
      
      <footer className="py-6 border-t text-center text-sm text-muted-foreground">
        <div className="container">
          <p>© 2025 Tacitbase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
