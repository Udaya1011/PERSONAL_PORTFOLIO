export const isDevToolsOpen = () => {
  const threshold = 160;
  const widthDiff = window.outerWidth - window.innerWidth > threshold;
  const heightDiff = window.outerHeight - window.innerHeight > threshold;
  return widthDiff || heightDiff;
};

export const setupSecurity = (onStateChange: (isOpen: boolean) => void) => {
  let lastState = isDevToolsOpen();
  
  const check = () => {
    const currentState = isDevToolsOpen();
    if (currentState !== lastState) {
      lastState = currentState;
      onStateChange(currentState);
    }
    
    if (currentState) {
       // Level 11: Force a reload with a restriction flag
       // This triggers the Gatekeeper in index.html, which will REFUSE
       // to load any scripts, making the Sources tab completely empty.
       window.location.replace(window.location.pathname + '#restricted');
       window.location.reload();
    }
  };

  const interval = setInterval(check, 500);
  window.addEventListener('resize', check);
  
  return () => {
    clearInterval(interval);
    window.removeEventListener('resize', check);
  };
};
