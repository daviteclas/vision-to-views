import { Search, Users, UserPlus, Clock, Ban, UsersRound, Mail } from "lucide-react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Amigos = () => {
  const sidebarItems = {
    amigos: [
      { icon: Users, label: "Amigos", count: "5" },
      { icon: UserPlus, label: "Adicionar Amigos" },
      { icon: Clock, label: "Pedidos Pendentes" },
      { icon: Ban, label: "Bloqueados" },
    ],
    grupos: [
      { icon: UsersRound, label: "Grupos", count: "2" },
      { icon: Mail, label: "Convites Pendentes" },
      { icon: Search, label: "Procurar Grupos..." },
      { icon: UserPlus, label: "Criar Grupo" },
    ],
  };
  
  const recommendations = [
    { name: "hienanamoto", status: "Estagiário de TI" },
    { name: "W00ns", status: "Estagiária de TI" },
    { name: "Sehrs", status: "Bio Médica" },
    { name: "Cookie_Chan", status: "Procurando emprego" },
    { name: "mateuszin", status: "Procurando emprego" },
    { name: "Scheppa", status: "Procurando emprego" },
    { name: "Stress", status: "Advogado" },
    { name: "iMedeross", status: "Procurando emprego" },
    { name: "NusiR", status: "Procurando emprego" },
    { name: "lizz", status: "Enfermeira" },
    { name: "seelohfilhao", status: "Estagiário de TI" },
    { name: "88cplay202", status: "Atendente de Loja" },
    { name: "Pikezso", status: "Estagiário de TI" },
    { name: "GABUR65", status: "Engenheira Elétrica" },
    { name: "Deesi", status: "Personal Trainer" },
    { name: "User 4", status: "Engenheiro Elétrico" },
    { name: "User 4", status: "Médico" },
    { name: "User 4", status: "Professor" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Header */}
            <div className="flex items-center gap-3 mb-8">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-foreground">Mateus Dassie Souza</h2>
              </div>
            </div>
            
            {/* AMIGOS Section */}
            <div>
              <h3 className="text-xs font-semibold text-foreground/50 mb-3 tracking-wider">
                AMIGOS
              </h3>
              <div className="space-y-1">
                {sidebarItems.amigos.map((item, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left"
                  >
                    <item.icon className="h-4 w-4 text-foreground/70" />
                    <span className="text-sm text-foreground/80">{item.label}</span>
                    {item.count && (
                      <span className="ml-auto text-sm text-foreground/60">
                        {item.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* GRUPOS Section */}
            <div>
              <h3 className="text-xs font-semibold text-foreground/50 mb-3 tracking-wider">
                GRUPOS
              </h3>
              <div className="space-y-1">
                {sidebarItems.grupos.map((item, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left"
                  >
                    <item.icon className="h-4 w-4 text-foreground/70" />
                    <span className="text-sm text-foreground/80">{item.label}</span>
                    {item.count && (
                      <span className="ml-auto text-sm text-foreground/60">
                        {item.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-semibold text-foreground">
                AMIGOS <span className="text-foreground/60">5/1000</span>
              </h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                <Input
                  placeholder="Procurar amigos"
                  className="pl-10 w-64 h-10 rounded-full bg-input border-0"
                />
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-lg font-medium text-foreground/70 mb-4">
                RECOMENDAÇÃO
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendations.map((user, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                        <AvatarFallback>
                          {user.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">
                          {user.name}
                        </p>
                        <p className="text-sm text-foreground/60 truncate">
                          {user.status}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amigos;
