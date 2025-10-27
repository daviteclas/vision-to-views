import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Award } from 'lucide-react'; // Ícones

// Reutilizar a interface e dados de exemplo (em um app real, isso viria de um context/API)
import { Brain, Briefcase, Users, BookOpen } from "lucide-react";

interface KnowledgeTrail {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  imageUrl: string;
  videos: { id: number; title: string; url: string }[]; // Adicionando videos
  quiz: { id: number; question: string; options: string[]; answer: string }[]; // Adicionando quiz
}

// Expandindo os dados de exemplo
const sampleTrails: KnowledgeTrail[] = [
  {
    id: 1,
    title: "Inteligência Artificial para Iniciantes",
    description: "Entenda os conceitos básicos de IA, machine learning e como aplicá-los.",
    category: "Tecnologia",
    icon: Brain,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    videos: [
      { id: 101, title: "Introdução à IA", url: "placeholder_video_url_1" },
      { id: 102, title: "O que é Machine Learning?", url: "placeholder_video_url_2" },
      { id: 103, title: "Tipos de Algoritmos", url: "placeholder_video_url_3" },
    ],
    quiz: [
      { id: 201, question: "O que significa IA?", options: ["Inteligência Artificial", "Internet Avançada", "Interface Adaptável"], answer: "Inteligência Artificial" },
      { id: 202, question: "Qual destes NÃO é um tipo de Machine Learning?", options: ["Supervisionado", "Não Supervisionado", "Semi-Automático"], answer: "Semi-Automático" },
    ],
  },
  {
    id: 2,
    title: "Fundamentos de Administração de Empresas",
    description: "Aprenda sobre gestão, finanças, marketing e operações essenciais para negócios.",
    category: "Negócios",
    icon: Briefcase,
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    videos: [
      { id: 104, title: "Princípios de Gestão", url: "placeholder_video_url_4" },
      { id: 105, title: "Introdução a Finanças", url: "placeholder_video_url_5" },
    ],
    quiz: [
      { id: 203, question: "O que é SWOT?", options: ["Ferramenta de Análise", "Tipo de Contrato", "Software de Gestão"], answer: "Ferramenta de Análise" },
    ],
  },
   // Adicione mais trilhas aqui com vídeos e quizzes
];
// --- Fim dos dados de exemplo ---

const KnowledgeTrailPage = () => {
  const { trailId } = useParams<{ trailId: string }>();
  const navigate = useNavigate();
  const [trail, setTrail] = useState<KnowledgeTrail | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [certificateEarned, setCertificateEarned] = useState(false);

  useEffect(() => {
    // Simula a busca dos dados da trilha pelo ID
    const foundTrail = sampleTrails.find(t => t.id === parseInt(trailId || '0'));
    if (foundTrail) {
      setTrail(foundTrail);
      // Resetar status ao carregar nova trilha
      setQuizCompleted(false);
      setCertificateEarned(false);
      // Verificar se já completou (simulação com localStorage)
      const completionStatus = localStorage.getItem(`trail_${trailId}_completed`);
      if (completionStatus === 'true') {
        setQuizCompleted(true);
        setCertificateEarned(true); // Assume que completou com sucesso
      }
    } else {
      // Trilha não encontrada, redirecionar ou mostrar erro
      console.error("Trilha não encontrada:", trailId);
      // navigate('/404'); // Descomente se tiver uma rota 404
    }
  }, [trailId]);

  // Simulação da submissão do Quiz
  const handleQuizSubmit = () => {
    console.log("Quiz submetido. Verificando respostas...");
    // --- Lógica de verificação do Quiz (Simulada) ---
    const score = Math.random() * 100; // Simula uma pontuação aleatória
    const passed = score >= 70;
    console.log(`Pontuação simulada: ${score.toFixed(0)}%`);

    setQuizCompleted(true);
    if (passed) {
      setCertificateEarned(true);
      console.log("Parabéns! Certificado obtido.");
      // Salvar status de conclusão (simulação com localStorage)
      localStorage.setItem(`trail_${trailId}_completed`, 'true');
      // Idealmente, isso seria salvo no backend associado ao usuário
      alert("Parabéns! Você concluiu a trilha e ganhou um certificado!");
    } else {
      setCertificateEarned(false);
      console.log("Não atingiu a pontuação mínima.");
      alert(`Você não atingiu a pontuação mínima (70%). Sua pontuação: ${score.toFixed(0)}%. Tente novamente!`);
      // Permitir refazer o quiz (resetar quizCompleted talvez?)
      setQuizCompleted(false); // Permite tentar novamente
    }
  };

  if (!trail) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-8 py-12 text-center text-foreground">
          Carregando trilha ou trilha não encontrada...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-8 py-12">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <trail.icon className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl">{trail.title}</CardTitle>
            </div>
            <CardDescription>{trail.description}</CardDescription>
          </CardHeader>
        </Card>

        {/* Seção de Vídeos */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Vídeos da Trilha</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trail.videos.map(video => (
              <Card key={video.id} className="overflow-hidden">
                {/* Placeholder para o player de vídeo */}
                <div className="bg-muted aspect-video flex items-center justify-center text-foreground/50">
                  Vídeo Placeholder <br /> ({video.title})
                  {/* Em uma aplicação real, usar um player como react-player */}
                  {/* <ReactPlayer url={video.url} width="100%" height="100%" /> */}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-foreground">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Seção do Quiz */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Quiz de Conhecimento</h2>
          {certificateEarned ? (
             <Card className="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700">
               <CardHeader className="flex flex-row items-center gap-4">
                 <Award className="h-10 w-10 text-green-600 dark:text-green-400" />
                 <div>
                   <CardTitle className="text-green-800 dark:text-green-200">Certificado Obtido!</CardTitle>
                   <CardDescription className="text-green-700 dark:text-green-300">
                     Você concluiu esta trilha com sucesso. Seu certificado está disponível no seu perfil.
                   </CardDescription>
                 </div>
               </CardHeader>
             </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Teste seus conhecimentos</CardTitle>
                <CardDescription>Responda às perguntas abaixo para ganhar seu certificado. Você precisa de 70% de acertos.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Aqui viria a lógica real do Quiz (perguntas, opções, etc.) */}
                <p className="text-foreground/70 mb-4">
                  (Simulação: O botão abaixo simula a conclusão do quiz com uma nota aleatória.)
                </p>
                {trail.quiz.map(q => (
                  <div key={q.id} className="mb-4 p-4 border rounded">
                    <p className="font-medium mb-2">{q.question}</p>
                    <div className="space-y-1">
                      {q.options.map(option => (
                        <label key={option} className="flex items-center gap-2 text-sm">
                          <input type="radio" name={`question_${q.id}`} value={option} className="accent-primary"/>
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <Button onClick={handleQuizSubmit} disabled={quizCompleted && !certificateEarned} className="mt-4">
                  {quizCompleted && !certificateEarned ? 'Tentar Novamente' : 'Finalizar Quiz'}
                </Button>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
};

export default KnowledgeTrailPage;