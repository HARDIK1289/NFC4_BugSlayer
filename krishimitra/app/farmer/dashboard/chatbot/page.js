"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertCircle, Loader2 } from 'lucide-react';


const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant powered by Gemini. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const botMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'bot',
        timestamp: new Date(),
        modelUsed: data.model_used
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      setError(err.message);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I encountered an error. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm your AI assistant powered by Gemini. How can I help you today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    setError('');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    header: {
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      borderBottom: '1px solid #e5e7eb'
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    logo: {
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      padding: '8px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: 0
    },
    subtitle: {
      fontSize: '14px',
      color: '#6b7280',
      margin: 0
    },
    clearButton: {
      padding: '8px 16px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#6b7280',
      backgroundColor: '#f3f4f6',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    errorBanner: {
      backgroundColor: '#fef2f2',
      borderLeft: '4px solid #f87171',
      padding: '16px',
      margin: '16px',
      borderRadius: '0 8px 8px 0',
      display: 'flex',
      alignItems: 'center'
    },
    errorText: {
      color: '#b91c1c',
      fontSize: '14px',
      margin: 0,
      marginLeft: '8px'
    },
    messagesContainer: {
      flex: 1,
      overflow: 'hidden'
    },
    messagesWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      height: '100%'
    },
    messagesList: {
      height: '100%',
      overflowY: 'auto',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    messageContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px'
    },
    messageContainerUser: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      flexDirection: 'row-reverse'
    },
    avatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    avatarUser: {
      backgroundColor: '#3b82f6'
    },
    avatarBot: {
      background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'
    },
    avatarError: {
      backgroundColor: '#ef4444'
    },
    messageBubble: {
      maxWidth: '500px',
      borderRadius: '18px',
      padding: '12px 16px',
      position: 'relative'
    },
    messageBubbleUser: {
      backgroundColor: '#3b82f6',
      color: 'white'
    },
    messageBubbleBot: {
      backgroundColor: 'white',
      color: '#1f2937',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #f3f4f6'
    },
    messageBubbleError: {
      backgroundColor: '#fef2f2',
      color: '#b91c1c',
      border: '1px solid #fecaca'
    },
    messageText: {
      fontSize: '14px',
      lineHeight: '1.5',
      whiteSpace: 'pre-wrap',
      margin: 0
    },
    messageFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '8px',
      paddingTop: '8px',
      borderTop: '1px solid rgba(255,255,255,0.2)',
      fontSize: '12px'
    },
    messageFooterBot: {
      borderTop: '1px solid rgba(0,0,0,0.1)'
    },
    messageFooterError: {
      borderTop: '1px solid rgba(185,28,28,0.2)'
    },
    timestamp: {
      opacity: 0.7
    },
    modelUsed: {
      opacity: 0.6,
      marginLeft: '8px'
    },
    loadingContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px'
    },
    loadingBubble: {
      backgroundColor: 'white',
      borderRadius: '18px',
      padding: '12px 16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #f3f4f6',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    loadingText: {
      fontSize: '14px',
      color: '#6b7280'
    },
    inputArea: {
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
    },
    inputWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px',
      display: 'flex',
      alignItems: 'flex-end',
      gap: '12px'
    },
    textareaContainer: {
      flex: 1
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '18px',
      fontSize: '14px',
      lineHeight: '1.5',
      resize: 'none',
      minHeight: '48px',
      maxHeight: '128px',
      outline: 'none',
      transition: 'border-color 0.2s, box-shadow 0.2s',
      fontFamily: 'inherit'
    },
    sendButton: {
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '18px',
      padding: '12px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.2s',
      outline: 'none'
    },
    sendButtonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    },
    footer: {
      fontSize: '12px',
      color: '#6b7280',
      textAlign: 'center',
      marginTop: '8px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <div style={styles.logo}>
              <Bot size={24} color="white" />
            </div>
            <div>
              <h1 style={styles.title}>Chatbot</h1>
              {/* <p style={styles.subtitle}>Powered by Google's Gemini AI</p> */}
            </div>
          </div>
          <button
            style={styles.clearButton}
            onClick={clearChat}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e5e7eb'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#f3f4f6'}
          >
            Clear Chat
          </button>
        </div>
      </div>

      {/* Error Banner */}
      {error && (
        <div style={styles.errorBanner}>
          <AlertCircle size={20} color="#f87171" />
          <p style={styles.errorText}>{error}</p>
        </div>
      )}

      {/* Messages Container */}
      <div style={styles.messagesContainer}>
        <div style={styles.messagesWrapper}>
          <div style={styles.messagesList}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={message.sender === 'user' ? styles.messageContainerUser : styles.messageContainer}
              >
                {/* Avatar */}
                <div
                  style={{
                    ...styles.avatar,
                    ...(message.sender === 'user' 
                      ? styles.avatarUser 
                      : message.isError 
                      ? styles.avatarError 
                      : styles.avatarBot)
                  }}
                >
                  {message.sender === 'user' ? (
                    <User size={16} color="white" />
                  ) : (
                    <Bot size={16} color="white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  style={{
                    ...styles.messageBubble,
                    ...(message.sender === 'user'
                      ? styles.messageBubbleUser
                      : message.isError
                      ? styles.messageBubbleError
                      : styles.messageBubbleBot)
                  }}
                >
                  <p style={styles.messageText}>{message.text}</p>
                  <div
                    style={{
                      ...styles.messageFooter,
                      ...(message.sender === 'user' 
                        ? {} 
                        : message.isError 
                        ? styles.messageFooterError 
                        : styles.messageFooterBot)
                    }}
                  >
                    <span style={styles.timestamp}>
                      {formatTime(message.timestamp)}
                    </span>
                    {message.modelUsed && (
                      <span style={styles.modelUsed}>
                        {message.modelUsed}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div style={styles.loadingContainer}>
                <div style={{...styles.avatar, ...styles.avatarBot}}>
                  <Bot size={16} color="white" />
                </div>
                <div style={styles.loadingBubble}>
                  <Loader2 size={16} color="#6b7280" className="animate-spin" />
                  <span style={styles.loadingText}>Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div style={styles.inputArea}>
        <div style={styles.inputWrapper}>
          <div style={styles.textareaContainer}>
            <textarea
              ref={inputRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here... (Press Enter to send)"
              disabled={isLoading}
              style={{
                ...styles.textarea,
                ...(isLoading ? styles.sendButtonDisabled : {})
              }}
              rows="1"
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 128) + 'px';
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#3b82f6';
                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          <button
            onClick={sendMessage}
            disabled={!inputMessage.trim() || isLoading}
            style={{
              ...styles.sendButton,
              ...((!inputMessage.trim() || isLoading) ? styles.sendButtonDisabled : {})
            }}
            onMouseOver={(e) => {
              if (!e.target.disabled) {
                e.target.style.backgroundColor = '#2563eb';
              }
            }}
            onMouseOut={(e) => {
              if (!e.target.disabled) {
                e.target.style.backgroundColor = '#3b82f6';
              }
            }}
          >
            {isLoading ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <Send size={20} />
            )}
          </button>
        </div>
        <p style={styles.footer}>
          Powered by Google Gemini AI • Press Enter to send, Shift+Enter for new line
        </p>
      </div>

      <style jsx>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ChatBot;