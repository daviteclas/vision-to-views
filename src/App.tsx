import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupDetails from "./pages/SignupDetails";
import Vagas from "./pages/Vagas";
import Amigos from "./pages/Amigos";
import Chat from "./pages/Chat";
import Perfil from "./pages/Perfil";
import Conta from "./pages/Conta";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-details" element={<SignupDetails />} />
          <Route path="/vagas" element={<Vagas />} />
          <Route path="/amigos" element={<Amigos />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/conta" element={<Conta />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
