import React from 'react';

// Simple test components to ensure they appear
export const TestChatButton: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      width: '60px',
      height: '60px',
      backgroundColor: '#21A1D9',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 1000,
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    }}>
      <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </div>
  );
};

export const TestBackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div 
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '50px',
        height: '50px',
        backgroundColor: '#21A1D9',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}
    >
      <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
        <path d="M5 10l7-7m0 0l7 7m-7-7v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </div>
  );
};

export const TestCookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Always show for testing - ignore localStorage
    setIsVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      left: '0',
      right: '0',
      backgroundColor: 'white',
      borderTop: '2px solid #21A1D9',
      boxShadow: '0 -4px 12px rgba(0,0,0,0.1)',
      zIndex: 1000,
      padding: '16px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
        <p style={{ 
          margin: '0',
          fontSize: '14px',
          color: '#374151',
          flex: '1',
          minWidth: '200px'
        }}>
          نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. بالمتابعة، فإنك توافق على استخدام ملفات تعريف الارتباط.
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => setIsVisible(false)}
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              border: '1px solid #d1d5db',
              backgroundColor: 'white',
              color: '#6b7280',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            رفض
          </button>
          <button
            onClick={handleAccept}
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              border: 'none',
              backgroundColor: '#21A1D9',
              color: 'white',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            قبول
          </button>
        </div>
      </div>
    </div>
  );
};

export const TestWelcomePopup: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenWelcome', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '32px',
        borderRadius: '12px',
        maxWidth: '400px',
        margin: '20px',
        textAlign: 'center',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ 
          margin: '0 0 16px 0',
          fontSize: '24px',
          fontWeight: '700',
          color: '#21A1D9'
        }}>
          مرحباً بك في العويس للعقارات
        </h2>
        <p style={{
          margin: '0 0 24px 0',
          fontSize: '16px',
          color: '#6b7280',
          lineHeight: '1.5'
        }}>
          نحن متخصصون في الاستثمار والتطوير والوساطة وإدارة الأصول في دبي.
        </p>
        <button
          onClick={handleClose}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            border: 'none',
            backgroundColor: '#21A1D9',
            color: 'white',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          ابدأ الاستكشاف
        </button>
      </div>
    </div>
  );
};
