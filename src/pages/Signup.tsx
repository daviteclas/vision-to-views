import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert("Os emails não coincidem");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }
    if (!formData.terms) {
      alert("Você deve aceitar os termos e condições");
      return;
    }
    navigate("/signup-details");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background py-12">
      <div className="w-full max-w-md space-y-8 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-12">Criar Conta</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm text-foreground/80">
              Nome Completo
            </Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="h-12 rounded-full bg-input border-0 text-foreground"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm text-foreground/80">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 rounded-full bg-input border-0 text-foreground"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmEmail" className="text-sm text-foreground/80">
              Confirmar Email
            </Label>
            <Input
              id="confirmEmail"
              type="email"
              value={formData.confirmEmail}
              onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
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
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="h-12 rounded-full bg-input border-0 text-foreground"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm text-foreground/80">
              Confirmar Senha
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="h-12 rounded-full bg-input border-0 text-foreground"
              required
            />
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, terms: checked as boolean })
              }
            />
            <label
              htmlFor="terms"
              className="text-sm text-foreground/80 cursor-pointer"
            >
              Concordo com os Termos e Condições
            </label>
          </div>
          
          <Button
            type="submit"
            className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base mt-6"
          >
            Continuar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
