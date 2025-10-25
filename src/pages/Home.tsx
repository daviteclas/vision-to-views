import { useState } from "react";
import { Search, Heart } from "lucide-react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [liked, setLiked] = useState(false);
  
  const tabs = ["Principal", "Novidades", "Categorias", "Dicas", "Favoritos"];
  const [activeTab, setActiveTab] = useState("Principal");
  
  const jobImages = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-8 py-6">
        {/* Secondary Navigation */}
        <div className="flex items-center gap-6 mb-8 pb-4 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "text-primary"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
          <div className="ml-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <Input
              placeholder="Buscar..."
              className="pl-10 w-64 h-10 rounded-full bg-input border-0"
            />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-foreground/70">
              Pesquisar por:
            </h2>
            <div className="bg-card rounded-lg p-8 border border-border">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
                alt="AI Technology"
                className="w-full rounded-lg mb-6"
              />
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-foreground/70">
                    Conheça mais sobre:
                  </h2>
                  <h1 className="text-5xl font-bold mb-8">IA</h1>
                </div>
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
              
              <div className="space-y-4">
                <button className="text-left text-lg text-foreground/80 hover:text-primary transition-colors">
                  Quais os benefícios?
                </button>
                <button className="text-left text-lg text-foreground/80 hover:text-primary transition-colors">
                  Como podemos usá-la ao nosso favor?
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Job Images Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {jobImages.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/3] rounded-lg overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer"
            >
              <img
                src={image}
                alt={`Oportunidade ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
