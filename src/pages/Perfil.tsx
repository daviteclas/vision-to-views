import Header from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Perfil = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="flex items-start gap-8">
              <Avatar className="h-32 w-32">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Mateus Dassie Souza
                </h1>
                <p className="text-foreground/60 mb-6">Desenvolvedor Full Stack</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground/70 mb-1">
                      Email
                    </h3>
                    <p className="text-foreground">mateus@exemplo.com</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-foreground/70 mb-1">
                      Localização
                    </h3>
                    <p className="text-foreground">São Paulo, Brasil</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-foreground/70 mb-1">
                      Sobre
                    </h3>
                    <p className="text-foreground/80">
                      Desenvolvedor apaixonado por tecnologia e inovação, sempre em busca
                      de novos desafios e oportunidades de crescimento.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button className="rounded-full">Editar Perfil</Button>
                  <Button variant="outline" className="rounded-full">
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
