// src/components/Header.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button"; // cite: uploaded:daviteclas/vision-to-views/vision-to-views-8b064a1494f431541710cbd1ddd03ddcf6f12275/src/components/ui/button.tsx
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // cite: uploaded:daviteclas/vision-to-views/vision-to-views-8b064a1494f431541710cbd1ddd03ddcf6f12275/src/components/ui/sheet.tsx

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[#0f1729] backdrop-blur">
      {/* Container com posicionamento relativo para o logo absoluto */}
      <div className="container relative flex h-16 items-center justify-between px-4 sm:px-8">

        {/* Lado Esquerdo: Botão de Menu (sempre visível) + Navegação (visível em md+) */}
        <div className="flex items-center gap-2 sm:gap-4">
            {/* --- Botão de Menu Mobile --- */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                  {/* Removido md:hidden para ser sempre visível */}
                  <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Abrir menu</span>
                  </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] bg-[#0f1729] border-border pt-10">
                   {/* Conteúdo do Menu Mobile */}
                   <nav className="flex flex-col gap-4 px-4">
                      {[...navItems, ...rightItems].map((item) => (
                          <Link
                          key={item.path}
                          to={item.path}
                          onClick={handleLinkClick}
                          className={cn(
                              "text-lg font-medium transition-colors hover:text-primary",
                              isActive(item.path) ? "text-primary" : "text-foreground/80"
                          )}
                          >
                          {item.label}
                          </Link>
                      ))}
                   </nav>
              </SheetContent>
            </Sheet>
            {/* --- Fim do Botão de Menu --- */}

          {/* Navegação Esquerda - Visível a partir de 'md' */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-primary whitespace-nowrap", // Adicionado whitespace-nowrap
                  isActive(item.path) ? "text-primary" : "text-foreground/80"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Logo Centralizado Absolutamente */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/" className="text-xl sm:text-2xl font-bold tracking-wider text-primary whitespace-nowrap"> {/* Adicionado whitespace-nowrap */}
            OPORTUNIZA
          </Link>
        </div>

        {/* Lado Direito: Navegação (visível em md+) */}
        <div className="flex items-center">
          {/* Navegação Direita - Visível a partir de 'md' */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {rightItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-primary whitespace-nowrap", // Adicionado whitespace-nowrap
                  isActive(item.path) ? "text-primary" : "text-foreground/80"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;