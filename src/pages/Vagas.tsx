import React, { useState, useMemo } from "react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

// Interface para definir a estrutura de uma vaga
interface Job {
  id: number;
  title: string;
  company: string;
  area: string; // TI, Assistente, Vendedor, etc.
  location: string; // Cidade
  type: "Presencial" | "Híbrido" | "Home Office";
  salary?: number | string; // Salário pode ser número ou texto (e.g., "A combinar")
  description: string; // Descrição das atividades
  requirements: string[]; // Lista de requisitos
  imageUrl: string; // URL da imagem para a vaga
}

// Dados de exemplo para as vagas (substituir por dados de API em produção)
const sampleJobs: Job[] = [
  {
    id: 1,
    title: "Desenvolvedor Front-End React",
    company: "Tech Solutions",
    area: "TI",
    location: "São Paulo, SP",
    type: "Híbrido",
    salary: 7500,
    description: "Desenvolver interfaces de usuário modernas e responsivas utilizando React, Redux e TypeScript. Colaborar com designers e back-ends.",
    requirements: ["React", "TypeScript", "HTML5", "CSS3", "Git", "Experiência com APIs REST"],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Analista de Suporte Técnico Jr",
    company: "Infra Experts",
    area: "TI",
    location: "Rio de Janeiro, RJ",
    type: "Presencial",
    salary: "A combinar",
    description: "Prestar suporte técnico a usuários internos e externos, diagnosticar e resolver problemas de hardware e software.",
    requirements: ["Conhecimento em Windows/Linux", "Redes de computadores", "Boa comunicação", "Inglês técnico"],
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Assistente Administrativo",
    company: "Gestão Eficaz",
    area: "Administrativo",
    location: "Belo Horizonte, MG",
    type: "Presencial",
    salary: 3000,
    description: "Auxiliar nas rotinas administrativas, controle de planilhas, organização de documentos e atendimento telefônico.",
    requirements: ["Ensino Médio completo", "Pacote Office", "Organização", "Proatividade"],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Vendedor Externo",
    company: "Comercial Vendas+",
    area: "Vendas",
    location: "Curitiba, PR",
    type: "Presencial",
    salary: "2500 + Comissão",
    description: "Realizar visitas a clientes, apresentar produtos/serviços, negociar e fechar vendas.",
    requirements: ["Experiência com vendas externas", "CNH B", "Boa comunicação", "Foco em resultados"],
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Desenvolvedor Back-End Node.js",
    company: "Code Hub",
    area: "TI",
    location: "Remoto",
    type: "Home Office",
    salary: 8000,
    description: "Desenvolver e manter APIs RESTful utilizando Node.js, Express e bancos de dados SQL/NoSQL. Implementar testes unitários e de integração.",
    requirements: ["Node.js", "Express", "SQL (PostgreSQL/MySQL)", "NoSQL (MongoDB)", "Docker", "Git"],
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
  },
];

const Vagas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(sampleJobs[0]); // Inicia com a primeira vaga selecionada

  // Filtra as vagas com base no termo de busca (case-insensitive)
  const filteredJobs = useMemo(() => {
    if (!searchTerm) {
      return sampleJobs;
    }
    const lowerCaseSearch = searchTerm.toLowerCase();
    return sampleJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(lowerCaseSearch) ||
        job.area.toLowerCase().includes(lowerCaseSearch) ||
        job.company.toLowerCase().includes(lowerCaseSearch)
    );
  }, [searchTerm]);

  const handleSelectJob = (job: Job) => {
    setSelectedJob(job);
  };

  const formatSalary = (salary: number | string | undefined): string => {
    if (typeof salary === 'number') {
      return `R$ ${salary.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return salary || "Não informado";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8 text-center">Encontre sua Oportunidade</h1>

        {/* Barra de Busca */}
        <div className="mb-8 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40" />
            <Input
              placeholder="Buscar por cargo, área ou empresa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 rounded-full bg-input border-0 text-base"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-8">
          {/* Lista de Vagas */}
          <div className="border border-border rounded-lg overflow-hidden h-[calc(100vh-18rem)]">
            <div className="p-4 bg-card border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">
                Vagas Encontradas ({filteredJobs.length})
              </h2>
            </div>
            <div className="overflow-y-auto h-[calc(100%-4.5rem)]">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => handleSelectJob(job)}
                    className={`w-full text-left p-4 border-b border-border transition-colors ${
                      selectedJob?.id === job.id
                        ? "bg-accent"
                        : "hover:bg-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                        <img
                            src={job.imageUrl}
                            alt={`Logo ${job.company}`}
                            className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                        />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-medium text-foreground truncate">{job.title}</h3>
                        <p className="text-sm text-foreground/70 truncate">{job.company}</p>
                        <p className="text-xs text-foreground/50 truncate">
                          {job.location} - {job.type}
                        </p>
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <p className="p-4 text-center text-foreground/60">Nenhuma vaga encontrada.</p>
              )}
            </div>
          </div>

          {/* Detalhes da Vaga Selecionada */}
          <div className="border border-border rounded-lg overflow-hidden h-[calc(100vh-18rem)] flex flex-col">
            {selectedJob ? (
              <>
                <div className="p-6 bg-card border-b border-border">
                   <div className="flex items-start gap-4 mb-4">
                     <img
                       src={selectedJob.imageUrl}
                       alt={`Logo ${selectedJob.company}`}
                       className="w-16 h-16 object-cover rounded-lg flex-shrink-0 mt-1"
                     />
                     <div>
                       <CardTitle className="text-2xl mb-1">{selectedJob.title}</CardTitle>
                       <CardDescription className="text-base text-foreground/70">
                         {selectedJob.company}
                       </CardDescription>
                     </div>
                   </div>
                   <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{selectedJob.location}</Badge>
                    <Badge variant="secondary">{selectedJob.type}</Badge>
                    <Badge variant="secondary">Salário: {formatSalary(selectedJob.salary)}</Badge>
                    <Badge variant="outline">{selectedJob.area}</Badge>
                   </div>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Descrição da Vaga</h4>
                    <p className="text-foreground/80 text-sm whitespace-pre-line">{selectedJob.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Requisitos</h4>
                    <ul className="list-disc list-inside space-y-1 text-foreground/80 text-sm">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-4 border-t border-border bg-card">
                  <button className="w-full bg-primary text-primary-foreground h-10 rounded-md hover:bg-primary/90 transition-colors">
                    Candidatar-se
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-foreground/60">
                Selecione uma vaga para ver os detalhes.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vagas;