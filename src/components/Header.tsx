// src/components/Header.tsx
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react"; // Import Menu icon
import { Button } from "@/components/ui/button"; // Import Button
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Import Sheet components
import React from "react";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); // State for mobile menu

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: "INÍCIO", path: "/" },
    { label: "VAGAS", path: "/vagas" },
    { label: "AMIGOS", path: "/amigos" },
    { label: "CHAT", path: "/chat" },
  ];

  const rightItems = [
    { label: "PERFIL", path: "/perfil" },
    { label: "CONTA", path: "/conta" },
  ];

  // Function to close mobile menu on link click
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[#0f1729] backdrop-blur">
      {/* Adjusted padding: px-4 for small screens, sm:px-8 for larger */}
      <div className="container flex h-16 items-center justify-between px-4 sm:px-8">

        {/* Left Navigation - Hidden on small screens (md:flex) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                isActive(item.path) ? "text-primary" : "text-foreground/80"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Placeholder for left content on small screens to balance the layout */}
        <div className="md:hidden flex-1">
             {/* Mobile Menu Button - Visible only on small screens (md:hidden) */}
             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-foreground/80 hover:text-primary">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Abrir menu</span>
                  </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] bg-[#0f1729] border-border pt-10">
                   {/* Mobile Menu Content */}
                   <nav className="flex flex-col gap-4 px-4">
                      {/* Combine all nav items for mobile menu */}
                      {[...navItems, ...rightItems].map((item) => (
                          <Link
                          key={item.path}
                          to={item.path}
                          onClick={handleLinkClick} // Close menu on click
                          className={cn(
                              "text-lg font-medium transition-colors hover:text-primary", // Larger text for mobile
                              isActive(item.path) ? "text-primary" : "text-foreground/80"
                          )}
                          >
                          {item.label}
                          </Link>
                      ))}
                   </nav>
              </SheetContent>
            </Sheet>
        </div>


        {/* Logo - Adjusted absolute positioning slightly */}
        <div className="absolute left-1/2 -translate-x-1/2">
            {/* Logo slightly smaller on small screens? Optional */}
          <Link to="/" className="text-xl sm:text-2xl font-bold tracking-wider text-primary">
            OPORTUNIZA
          </Link>
        </div>

        {/* Right Navigation - Hidden on small screens (md:flex) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-end">
          {rightItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                isActive(item.path) ? "text-primary" : "text-foreground/80"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

         {/* Placeholder for right content on small screens */}
         <div className="md:hidden flex-1"></div>


      </div>
    </header>
  );
};

export default Header;