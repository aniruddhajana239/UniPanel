import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontLarge, setFontLarge] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className={`bg-slate-50 font-inter ${highContrast ? 'high-contrast' : ''} ${fontLarge ? 'font-larger' : ''}`}>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
      
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        fontLarge={fontLarge}
        setFontLarge={setFontLarge}
      />
      
      {/* Main Content Area */}
      <div className="lg:pl-64">
        <Header onToggleSidebar={toggleSidebar} />
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
