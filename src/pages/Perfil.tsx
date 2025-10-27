// src/pages/Perfil.tsx
import Header from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Award } from 'lucide-react'; // Ícone para certificados
import React from 'react'; // Importar React

const Perfil = () => {

  // Simulação de certificados ganhos (viria do estado global/backend)
  const [earnedCertificates, setEarnedCertificates] = React.useState<string[]>([]);

  React.useEffect(() => {
    // Simula a busca por certificados no localStorage ao carregar a página
    const completedTrails: string[] = [];
    // Assumindo que temos IDs de 1 a N para as trilhas
    const maxTrailIdToCheck = 10; // Defina um limite razoável
    for (let i = 1; i <= maxTrailIdToCheck; i++) {
        if (localStorage.getItem(`trail_${i}_completed`) === 'true') {
            // Em um app real, buscaria o título da trilha pelo ID
            completedTrails.push(`Certificado da Trilha ${i}`); // Usar um nome melhor
        }
    }
    setEarnedCertificates(completedTrails);
  }, []);


  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Ajusta padding */}
      <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-12">
         {/* Mantém largura máxima, mas centraliza */}
        <div className="max-w-4xl mx-auto">
          {/* Padding interno ajustado */}
          <div className="bg-card rounded-lg border border-border p-6 sm:p-8">
            {/* Flex column em mobile, row a partir de 'sm' */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              {/* Avatar com tamanho responsivo */}
              <Avatar className="h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>

              {/* Textos centralizados em mobile, alinhados à esquerda a partir de 'sm' */}
              <div className="flex-1 text-center sm:text-left w-full">
                {/* Tamanhos de fonte ajustados */}
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                  Mateus Dassie Souza
                </h1>
                <p className="text-foreground/60 mb-4 sm:mb-6 text-base sm:text-lg"> {/* Aumenta um pouco a fonte base */}
                  Desenvolvedor Full Stack
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-foreground/70 mb-1">
                      Email
                    </h3>
                    <p className="text-sm sm:text-base text-foreground break-words"> {/* Permite quebra de email */}
                      mateus@exemplo.com
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-foreground/70 mb-1">
                      Localização
                    </h3>
                    <p className="text-sm sm:text-base text-foreground">
                      São Paulo, Brasil
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-foreground/70 mb-1">
                      Sobre
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/80">
                      Desenvolvedor apaixonado por tecnologia e inovação, sempre em busca
                      de novos desafios e oportunidades de crescimento.
                    </p>
                  </div>
                </div>

                {/* Botões empilhados em mobile, lado a lado a partir de 'sm' */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                  <Button className="rounded-full w-full sm:w-auto">Editar Perfil</Button>
                  <Button variant="outline" className="rounded-full w-full sm:w-auto">
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de Certificados */}
           {earnedCertificates.length > 0 && (
              <div className="bg-card rounded-lg border border-border p-6 sm:p-8 mt-8">
                 <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">Certificados Obtidos</h2>
                 <div className="space-y-3">
                    {earnedCertificates.map((certTitle, index) => (
                       <div key={index} className="flex items-center gap-3 p-3 bg-background rounded border border-border">
                          <Award className="h-5 w-5 text-primary flex-shrink-0"/>
                          <span className="text-sm text-foreground">{certTitle}</span>
                       </div>
                    ))}
                 </div>
              </div>
           )}

        </div>
      </div>
    </div>
  );
};

export default Perfil;