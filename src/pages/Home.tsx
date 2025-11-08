import { useState } from "react";
import { Search, Heart, BookOpen, Brain, Briefcase, Users } from "lucide-react"; // Adicionando ícones
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import KnowledgeTrailPage from "./KnowledgeTrailPage";

// ... (interface KnowledgeTrail e sampleTrails - podem ser movidos para um arquivo compartilhado)
interface KnowledgeTrail {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  imageUrl: string;
}

const sampleTrails: KnowledgeTrail[] = [
  {
    id: 1,
    title: "Inteligência Artificial para Iniciantes",
    description: "Entenda os conceitos básicos de IA, machine learning e como aplicá-los.",
    category: "Tecnologia",
    icon: Brain,
    imageUrl: "../src/lib/imgs/ia.png",
  },
  {
    id: 2,
    title: "Fundamentos de Administração de Empresas",
    description: "Aprenda sobre gestão, finanças, marketing e operações essenciais para negócios.",
    category: "Negócios",
    icon: Briefcase,
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
  }
];
// --- Fim dos dados ---


const Home = () => {
  const [liked, setLiked] = useState(false);
  const tabs = ["Principal", "Novidades", "Categorias", "Dicas", "Favoritos"];
  const [activeTab, setActiveTab] = useState("Principal");
  const navigate = useNavigate(); // Hook para navegação

  // Atualiza a função para navegar para a página da trilha
  const handleTrailClick = (trailId: number = 1) => {
    console.log(`Navegando para Trilha ID: ${trailId}`);
    navigate(`/trilhas/${trailId}`); // Navega para a rota dinâmica
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 sm:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Seção Esquerda */}
          <div>
            {/* Tamanho da fonte ajustado */}
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">Destaque da Semana</h2>
            {/* Padding ajustado */}
            <div className="bg-card click rounded-lg p-4 sm:p-8 border border-border"  onClick={() => handleTrailClick()}>
              <img
                src="../../public/imgs/ia.png"
                alt="AI Technology"
                className="w-full rounded-lg mb-6"
              />
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">{sampleTrails[0].title}</h1>
            </div>

          </div>

          {/* Seção Direita */}
          <div className="flex flex-col justify-center">
            
            <div className="space-y-6">
              
              <div className="flex items-start justify-between">
                
                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feed de Trilhas - Grid ajustado para responsividade */}
        <div className="mb-12">
           {/* Tamanho da fonte ajustado */}
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">Trilhas de Conhecimento</h2>
          {/* Grid responsivo: 1 coluna default, 2 a partir de 'md', 3 a partir de 'lg' */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleTrails.map((trail) => (
              <Card
                key={trail.id}
                className="overflow-hidden hover:border-primary transition-colors cursor-pointer flex flex-col"
                onClick={() => handleTrailClick(trail.id)}
              >
                <img
                  src={trail.imageUrl}
                  alt={trail.title}
                  className="w-full h-40 object-cover"
                />
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <trail.icon className="h-5 w-5 text-primary flex-shrink-0" /> {/* Evita encolher o ícone */}
                     {/* Tamanho da fonte ajustado */}
                    <CardTitle className="text-base sm:text-lg leading-tight">{trail.title}</CardTitle>
                  </div>
                   {/* Tamanho da fonte ajustado */}
                  <CardDescription className="text-xs sm:text-sm">{trail.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-0">
                  <span className="text-xs text-foreground/60">{trail.category}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;