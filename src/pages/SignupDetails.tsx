import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

const SignupDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userType: "",
    phone: "",
    cpf: "",
    address: "",
    neighborhood: "",
    city: "",
    file: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration completion
    navigate("/login");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background py-12">
      <div className="w-full max-w-md space-y-8 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-12">Criar Conta</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="userType" className="text-sm text-foreground/80">
              Procurando Oportunidade ou é uma Empresa?
            </Label>
            <Input
              id="userType"
              type="text"
              value={formData.userType}
              onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
              className="h-12 rounded-full bg-input border-0 text-foreground"
              placeholder="Ex: Candidato, Empresa"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm text-foreground/80">
              Telefone
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-12 rounded-full bg-input border-0 text-foreground"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cpf" className="text-sm text-foreground/80">
              CPF
            </Label>
            <Input
              id="cpf"
              type="text"
              value={formData.cpf}
              onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
              className="h-12 rounded-full bg-input border-0 text-foreground"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm text-foreground/80">
              Endereço
            </Label>
            <Input
              id="address"
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="h-12 rounded-full bg-input border-0 text-foreground"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="neighborhood" className="text-sm text-foreground/80">
              Bairro
            </Label>
            <Input
              id="neighborhood"
              type="text"
              value={formData.neighborhood}
              onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
              className="h-12 rounded-full bg-input border-0 text-foreground"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm text-foreground/80">
              Cidade
            </Label>
            <Input
              id="city"
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="h-12 rounded-full bg-input border-0 text-foreground"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm text-foreground/80">
              Cadastrar Currículo/CNPJ da empresa:
            </Label>
            <label
              htmlFor="file-upload"
              className="flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-secondary hover:bg-secondary/80 text-foreground cursor-pointer transition-colors"
            >
              <Upload className="h-4 w-4" />
              <span className="text-sm font-medium">
                {formData.file ? formData.file.name : "Anexar Arquivo"}
              </span>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
            </label>
          </div>
          
          <Button
            type="submit"
            className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base mt-6"
          >
            Criar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupDetails;
