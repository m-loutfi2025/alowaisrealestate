import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isArabic } = useLanguage();

  console.log('AIChatWidget: Component rendered, isOpen =', isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens for the first time
      const welcomeMessage: Message = {
        id: Date.now(),
        text: isArabic 
          ? 'مرحباً! أنا مساعد العويس للعقارات. كيف يمكنني مساعدتك اليوم؟'
          : 'Hello! I\'m Al Owais Real Estate assistant. How can I help you today?',
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, isArabic]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = isArabic ? [
        'شكراً لك على استفسارك. سيتواصل معك أحد ممثلي المبيعات قريباً.',
        'يمكنك الاطلاع على مشاريعنا في قسم المشاريع أو التواصل معنا مباشرة.',
        'نحن متخصصون في الاستثمار والتطوير العقاري في دبي. كيف يمكننا مساعدتك؟',
        'للمزيد من المعلومات، يرجى زيارة مكتبنا أو الاتصال بنا على +9714 2664999'
      ] : [
        'Thank you for your inquiry. One of our sales representatives will contact you shortly.',
        'You can view our projects in the Projects section or contact us directly.',
        'We specialize in real estate investment and development in Dubai. How can we assist you?',
        'For more information, please visit our office or call us at +9714 2664999'
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 bg-[#21A1D9] text-white p-4 rounded-full shadow-lg hover:bg-[#1a7fb0] transition-all duration-300 z-40 hover:scale-110"
        aria-label={isArabic ? 'فتح الدردشة' : 'Open chat'}
        aria-expanded="false"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 left-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-40 flex flex-col ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>
          {/* Header */}
          <div className="bg-[#21A1D9] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <img src="/alowais-logo-transparent.png" alt="Al Owais" className="h-6 w-auto mr-2 filter brightness-0 invert" />
              <span className="font-medium">
                {isArabic ? 'مساعد العويس' : 'Al Owais Assistant'}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label={isArabic ? 'إغلاق الدردشة' : 'Close chat'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isUser
                      ? 'bg-[#21A1D9] text-white'
                      : 'bg-gray-100 text-gray-800'
                  } ${isArabic ? 'text-right' : 'text-left'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isArabic ? 'اكتب رسالتك...' : 'Type your message...'}
                className={`flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#21A1D9] ${isArabic ? 'text-right' : 'text-left'}`}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-[#21A1D9] text-white px-4 py-2 rounded-lg hover:bg-[#1a7fb0] disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                aria-label={isArabic ? 'إرسال' : 'Send'}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatWidget;
