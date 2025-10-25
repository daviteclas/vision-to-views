import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  
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
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[#0f1729] backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-8">
        <nav className="flex items-center gap-8">
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
        
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <div className="text-2xl font-bold tracking-wider text-primary">
            OPORTUNIZA
          </div>
        </Link>
        
        <nav className="flex items-center gap-8">
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
      </div>
    </header>
  );
};

export default Header;
