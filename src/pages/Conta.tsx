import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Conta = () => {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Configurações da Conta
          </h1>
          
          <div className="space-y-8">
            {/* Account Info */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Informações da Conta
              </h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="mateus@exemplo.com"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    defaultValue="(11) 98765-4321"
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
            
            {/* Security */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Segurança
              </h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="current-password">Senha Atual</Label>
                  <Input
                    id="current-password"
                    type="password"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="new-password">Nova Senha</Label>
                  <Input
                    id="new-password"
                    type="password"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="mt-2"
                  />
                </div>
                
                <Button className="rounded-full">Alterar Senha</Button>
              </div>
            </div>
            
            {/* Preferences */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Preferências
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notificações Push</Label>
                    <p className="text-sm text-foreground/60 mt-1">
                      Receba notificações sobre novidades e mensagens
                    </p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Atualizações por Email</Label>
                    <p className="text-sm text-foreground/60 mt-1">
                      Receba emails sobre vagas e oportunidades
                    </p>
                  </div>
                  <Switch
                    checked={emailUpdates}
                    onCheckedChange={setEmailUpdates}
                  />
                </div>
              </div>
            </div>
            
            {/* Danger Zone */}
            <div className="bg-card rounded-lg border border-destructive p-6">
              <h2 className="text-xl font-semibold text-destructive mb-4">
                Zona de Perigo
              </h2>
              <p className="text-foreground/60 mb-4">
                Uma vez que você excluir sua conta, não há como voltar atrás.
              </p>
              <Button variant="destructive" className="rounded-full">
                Excluir Conta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conta;
