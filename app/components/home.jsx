// Home.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function BotHome() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen w-full bg-[#433878] flex flex-col items-center justify-center p-4 relative">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-8"
      >
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FFE1FF] mr-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
          <h1 className="text-4xl font-bold text-[#E4B1F0]">HappiWrap</h1>
        </div>
        <p className="mt-2 text-xl text-[#E4B1F0] font-semibold text-center">Wrap Your World in Happiness with HappiWrap</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <div className="p-4 flex sm:flex-row justify-center items-center gap-4">
          <Button 
            onClick={() => navigate('/login')} // Redirect to login & signup page
            className="bg-[#7E60BF] hover:bg-[#FFE1F0] hover:text-[#433878] text-white text-lg rounded-full transition-colors duration-300 w-40 h-12 flex items-center justify-center"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Start Chatting
          </Button>
          <Button 
            onClick={() => navigate('/login')}
            variant="outline"
            className="bg-transparent border-2 border-[#E4B1F0] text-[#E4B1F0] hover:bg-[#E4B1F0] hover:text-[#433878] text-lg rounded-full transition-colors duration-300 w-40 h-12 flex items-center justify-center"
          >
            <UserPlus className="mr-2 h-6 w-6" />
            Login / Sign Up
          </Button>
        </div>
      </motion.div>
    </main>
  );
}