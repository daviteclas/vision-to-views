import { useState } from "react";
import { Search, Heart, BookOpen, Brain, Briefcase, Users } from "lucide-react"; // Adicionando ícones
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Fundamentos de Administração de Empresas",
    description: "Aprenda sobre gestão, finanças, marketing e operações essenciais para negócios.",
    category: "Negócios",
    icon: Briefcase,
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Liderança Eficaz para Equipes",
    description: "Desenvolva habilidades de liderança, comunicação e motivação de equipes.",
    category: "Carreira",
    icon: Users,
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Introdução à Programação Web",
    description: "Comece sua jornada na programação aprendendo HTML, CSS e JavaScript.",
    category: "Tecnologia",
    icon: BookOpen,
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
];
// --- Fim dos dados ---


const Home = () => {
  const [liked, setLiked] = useState(false);
  const tabs = ["Principal", "Novidades", "Categorias", "Dicas", "Favoritos"];
  const [activeTab, setActiveTab] = useState("Principal");
  const navigate = useNavigate(); // Hook para navegação

  // Atualiza a função para navegar para a página da trilha
  const handleTrailClick = (trailId: number) => {
    console.log(`Navegando para Trilha ID: ${trailId}`);
    navigate(`/trilhas/${trailId}`); // Navega para a rota dinâmica
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Ajustado padding do container para telas menores */}
      <div className="container mx-auto px-4 sm:px-8 py-6">

        {/* Navegação Secundária - Overflow e busca ajustada */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 pb-4 border-b border-border">
          {/* Navegação com scroll horizontal em telas pequenas */}
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                 // Adicionado whitespace-nowrap para evitar quebra de linha
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Busca agora fica abaixo em telas pequenas ou à direita em maiores */}
          <div className="relative w-full sm:ml-auto sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <Input
              placeholder="Buscar..."
               // Ajustado padding e tamanho
              className="pl-10 w-full h-10 rounded-full bg-input border-0"
            />
          </div>
        </div>

        {/* Conteúdo Principal - Grid ajustado para ser 1 coluna em mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Seção Esquerda */}
          <div>
            {/* Tamanho da fonte ajustado */}
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-foreground/70">
              Pesquisar por:
            </h2>
            {/* Padding ajustado */}
            <div className="bg-card rounded-lg p-4 sm:p-8 border border-border">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
                alt="AI Technology"
                className="w-full rounded-lg mb-6"
              />
            </div>
          </div>

          {/* Seção Direita */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  {/* Tamanhos de fonte ajustados */}
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-foreground/70">
                    Conheça mais sobre:
                  </h2>
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">IA</h1>
                </div>
                {/* Botão de like mantido */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setLiked(!liked)}
                  className="hover:bg-transparent"
                >
                  <Heart
                    className={`h-6 w-6 transition-colors ${
                      liked ? "fill-red-500 text-red-500" : "text-foreground/40"
                    }`}
                  />
                </Button>
              </div>

              {/* Tamanhos de fonte ajustados */}
              <div className="space-y-3 sm:space-y-4">
                <button className="text-left text-base sm:text-lg text-foreground/80 hover:text-primary transition-colors">
                  Quais os benefícios?
                </button>
                <button className="text-left text-base sm:text-lg text-foreground/80 hover:text-primary transition-colors">
                  Como podemos usá-la ao nosso favor?
                </button>
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