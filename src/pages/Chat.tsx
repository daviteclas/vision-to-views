import { useState } from "react";
import { Search, Send, Plus } from "lucide-react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Definindo um tipo para as mensagens para melhor organização
type Message = {
  id: number;
  text: string;
  sent: boolean; // true se enviada pelo usuário atual, false se recebida
};

const Chat = () => {
  const [message, setMessage] = useState("");
  // Estado inicial das mensagens (pode vir de uma API no futuro)
  const initialMessages: Message[] = [
    { id: 1, text: "Olá! Como você está?", sent: false },
    { id: 2, text: "Estou bem, obrigado! E você?", sent: true },
    { id: 3, text: "Também estou bem!", sent: false },
    { id: 4, text: "Ótimo! Vamos conversar sobre o projeto?", sent: true },
  ];
  // Estado dinâmico para as mensagens
  const [messages, setMessages] = useState<Message[]>(initialMessages);

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

  // Função para enviar a mensagem
  const handleSendMessage = () => {
    if (message.trim() === "") return; // Não envia mensagens vazias

    const newMessage: Message = {
      id: messages.length + 1, // Simples ID baseado no tamanho atual (melhorar em produção)
      text: message,
      sent: true, // Assumindo que a mensagem enviada é sempre do usuário atual
    };

    setMessages([...messages, newMessage]); // Adiciona a nova mensagem ao array
    setMessage(""); // Limpa o campo de input
  };

  // Função para lidar com o pressionar da tecla Enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-8 py-6 h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-[320px_1fr] gap-6 h-full">
          {/* Sidebar */}
          <div className="bg-card rounded-lg border border-border flex flex-col">
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
            <div className="p-4 border-b border-border flex gap-2">
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
                  onClick={() => setActiveChat(contact)}
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
          </div>

          {/* Chat Area */}
          <div className="bg-card rounded-lg border border-border flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activeChat.name}`} />
                <AvatarFallback>
                  {activeChat.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground">{activeChat.name}</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Mapeia o estado dinâmico 'messages' */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-2 rounded-2xl ${
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

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-3">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite a sua mensagem aqui..."
                  className="flex-1 h-12 rounded-full bg-input border-0"
                  onKeyPress={handleKeyPress} // Chama handleKeyPress no evento onKeyPress
                />
                <Button
                  size="icon"
                  className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
                  onClick={handleSendMessage} // Chama handleSendMessage no clique
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