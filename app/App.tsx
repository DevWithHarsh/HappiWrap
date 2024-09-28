'use client'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import the chat app component
// Import your login/signup component
import GiftChatbot from './gift-chatbot';
import AuthPage from './AuthPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/chat" element={<GiftChatbot />} />
        {/* Redirect any undefined route to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}