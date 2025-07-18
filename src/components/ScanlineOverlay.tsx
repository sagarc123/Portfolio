import React from 'react';

const ScanlineOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%)',
          backgroundSize: '100% 4px',
          animation: 'scanlines 0.1s linear infinite'
        }}
      />
      
      <style jsx>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
      `}</style>
    </div>
  );
};

export default ScanlineOverlay;