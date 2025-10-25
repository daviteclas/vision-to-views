import Header from "@/components/Header";

const Vagas = () => {
  const vagas = [
    "Atendente",
    "Estagiário de TI",
    "Faxineiro",
    "Secretário",
  ];
  
  const jobImages = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          {/* Sidebar */}
          <div>
            <h1 className="text-6xl font-bold mb-4 text-foreground">4</h1>
            <h2 className="text-3xl font-bold mb-8 text-foreground">VAGAS</h2>
            
            <div className="space-y-3">
              {vagas.map((vaga, index) => (
                <div
                  key={index}
                  className="text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                >
                  {vaga}
                </div>
              ))}
            </div>
          </div>
          
          {/* Main Content */}
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {jobImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] rounded-lg overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Vaga ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vagas;
