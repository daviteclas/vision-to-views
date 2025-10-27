// src/pages/Chat.tsx
import { useState } from "react";
// Adicionando Users para o botão de contatos mobile
import { Search, Send, Plus, Users } from "lucide-react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Importar Sheet para o menu de contatos mobile (opcional, mas recomendado)
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type Message = {
  id: number;
  text: string;
  sent: boolean;
};

const Chat = () => {
  const [message, setMessage] = useState("");
  const initialMessages: Message[] = [
    { id: 1, text: "Olá! Como você está?", sent: false },
    { id: 2, text: "Estou bem, obrigado! E você?", sent: true },
    { id: 3, text: "Também estou bem!", sent: false },
    { id: 4, text: "Ótimo! Vamos conversar sobre o projeto?", sent: true },
  ];
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isContactsOpen, setIsContactsOpen] = useState(false); // Estado para o Sheet

  const contacts = [
    { id: 1, name: "User 1", type: "user" },
    { id: 2, name: "User 2", type: "user" },
    { id: 3, name: "Group 1", type: "group" },
    { id: 4, name: "User 3", type: "user" },
    { id: 5, name: "Group 2", type: "group" },
    { id: 6, name: "User 4", type: "user" },
    { id: 7, name: "User 5", type: "user" },
  ];

  const [activeChat, setActiveChat] = useState(contacts[0]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    const newMessage: Message = {
      id: messages.length + 1,
      text: message,
      sent: true,
    };
    setMessages([...messages, newMessage]);
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Componente reutilizável para a lista de contatos (para Desktop e Mobile Sheet)
  const ContactsList = ({ onSelectContact }: { onSelectContact: (contact: typeof contacts[0]) => void }) => (
    <>
      {/* Search */}
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
          <Input
            placeholder="Buscar..."
            className="pl-10 h-10 rounded-full bg-input border-0"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-2"> {/* Empilha botões em telas pequenas */}
        <Button
          variant="default"
          size="sm"
          className="flex-1 rounded-full bg-primary hover:bg-primary/90 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          ADICIONAR GRUPO
        </Button>
        <Button
          variant="default"
          size="sm"
          className="flex-1 rounded-full bg-primary hover:bg-primary/90 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          ADICIONAR CHAT
        </Button>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            onClick={() => onSelectContact(contact)} // Usa a função passada
            className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
              activeChat.id === contact.id
                ? "bg-accent"
                : "hover:bg-accent/50"
            }`}
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${contact.name}`} />
              <AvatarFallback>
                {contact.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-foreground">
              {contact.name}
            </span>
          </button>
        ))}
      </div>
    </>
  );

  const handleSelectAndClose = (contact: typeof contacts[0]) => {
      setActiveChat(contact);
      setIsContactsOpen(false); // Fecha o Sheet ao selecionar
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

       {/* Ajusta padding e altura total */}
      <div className="container mx-auto px-4 sm:px-8 py-4 sm:py-6 flex-1 h-full">
         {/* Grid responsivo: 1 coluna default, 2 a partir de 'md' */}
         {/* Define altura explicitamente para o grid funcionar corretamente com overflow */}
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 h-[calc(100vh-6rem-3rem)] md:h-[calc(100vh-4rem-3rem)]"> {/* Ajusta altura baseada no header */}

          {/* Sidebar (Lista de Contatos) - Oculta em telas pequenas */}
          <div className="bg-card rounded-lg border border-border flex-col hidden md:flex h-full">
             <ContactsList onSelectContact={setActiveChat} />
          </div>

          {/* Área de Chat */}
          <div className="bg-card rounded-lg border border-border flex flex-col h-full"> {/* Garante altura total */}
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center gap-3 flex-shrink-0"> {/* Evita encolher */}
              {/* Botão para abrir contatos em mobile */}
              <Sheet open={isContactsOpen} onOpenChange={setIsContactsOpen}>
                  <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="md:hidden mr-2">
                          <Users className="h-5 w-5" />
                          <span className="sr-only">Mostrar contatos</span>
                      </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="p-0 w-[300px] flex flex-col bg-card border-r border-border">
                       <ContactsList onSelectContact={handleSelectAndClose} />
                  </SheetContent>
              </Sheet>

              <Avatar className="h-10 w-10">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activeChat.name}`} />
                <AvatarFallback>
                  {activeChat.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground truncate">{activeChat.name}</span>
            </div>

            {/* Messages - Ocupa espaço restante com overflow */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
                >
                  {/* Ajusta padding e tamanho máximo da mensagem */}
                  <div
                    className={`max-w-[80%] sm:max-w-[70%] px-3 py-2 rounded-2xl ${
                      msg.sent
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input - Fica fixo no final */}
            <div className="p-4 border-t border-border flex-shrink-0"> {/* Evita encolher */}
              <div className="flex gap-2 sm:gap-3">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..." // Texto mais curto
                  className="flex-1 h-12 rounded-full bg-input border-0 px-4" // Ajusta padding
                  onKeyPress={handleKeyPress}
                />
                <Button
                  size="icon"
                  className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90 flex-shrink-0" // Evita encolher
                  onClick={handleSendMessage}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;