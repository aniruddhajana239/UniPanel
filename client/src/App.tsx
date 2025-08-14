import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";

import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import Content from "@/pages/content";
import Media from "@/pages/media";
import MenuManagement from "@/pages/menu-management";
import Users from "@/pages/users";
import Approvals from "@/pages/approvals";
import Settings from "@/pages/settings";
import MainLayout from "@/components/layout/main-layout";
import NotFound from "@/pages/not-found";

function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/content" component={Content} />
        <Route path="/media" component={Media} />
        <Route path="/menu-management" component={MenuManagement} />
        <Route path="/users" component={Users} />
        <Route path="/approvals" component={Approvals} />
        <Route path="/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
