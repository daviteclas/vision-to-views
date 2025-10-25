import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-12">Login</h1>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm text-foreground/80">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-full bg-input border-0 text-foreground"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm text-foreground/80">
              Senha
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 rounded-full bg-input border-0 text-foreground"
              required
            />
          </div>
          
          <Button
            type="submit"
            className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base"
          >
            Fazer Login
          </Button>
        </form>
        
        <div className="text-center space-y-2 pt-4">
          <p className="text-foreground/70">Não tem uma conta?</p>
          <Link
            to="/signup"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            Criar Conta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
