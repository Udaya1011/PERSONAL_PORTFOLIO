import React, { lazy, Suspense, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { setupSecurity, isDevToolsOpen } from './security'
import Sorry from './Sorry'

// lazy load the App component
const App = lazy(() => import('./App.tsx'))

// --- Final Lockdown: Block React DevTools Extension ---
if (typeof (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
  for (let key in (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = 
      typeof (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__[key] === 'function' ? () => {} : null;
  }
}

// --- Final Lockdown: Anti-Iframe (Prevent embedding) ---
if (window.self !== window.top) {
  window.top!.location.href = window.self.location.href;
}

const Main = () => {
  const [blocked, setBlocked] = useState(isDevToolsOpen())

  useEffect(() => {
    // Initial immediate check
    if (isDevToolsOpen()) setBlocked(true);

    const cleanup = setupSecurity((isOpen) => {
      setBlocked(isOpen);
      if (isOpen) {
        // Stability Fix: Instead of reloading (which loops), we use 
        // the debugger trap to freeze the Sources tab instantly.
        console.clear();
        (function() {
          return false;
        }
        ['constructor']('debugger')
        ['call']());
      }
    });
    const handleGlobalInteraction = (e: any) => {
      // Block middle click
      if (e.button === 1) e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Block F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        setBlocked(true);
        return false;
      }

      // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        setBlocked(true);
        return false;
      }

      // Block Ctrl+U (View Source) and Ctrl+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && (e.keyCode === 85 || e.keyCode === 83)) {
        e.preventDefault();
        return false;
      }

      // Block Ctrl+P (Print)
      if ((e.ctrlKey || e.metaKey) && e.keyCode === 80) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener('auxclick', handleGlobalInteraction);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      cleanup();
      window.removeEventListener('auxclick', handleGlobalInteraction);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (blocked) {
    return <Sorry />;
  }

  return (
    <Suspense fallback={<div className="bg-dark-900 min-h-screen" />}>
      <App />
    </Suspense>
  );
};

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
