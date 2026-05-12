import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const Sorry = () => (
  <div className="fixed inset-0 z-[500] bg-[#050505] flex flex-col items-center justify-center p-6 text-center overflow-hidden font-sans">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.02] blur-[120px] rounded-full"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.02] blur-[120px] rounded-full"></div>
    
    <div className="scanline"></div>
    
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="reveal-glass p-16 rounded-[3rem] border border-white/5 max-w-xl relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)]"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="mb-8 relative inline-block">
        <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full"></div>
        <div className="w-20 h-20 rounded-2xl border border-white/10 flex items-center justify-center relative bg-black/40">
          <FiX className="text-4xl text-white/40" />
        </div>
      </div>

      <h1 className="text-8xl font-black text-white mb-4 tracking-tighter italic leading-none">SORRY</h1>
      <div className="h-[2px] w-12 bg-white/20 mx-auto mb-8"></div>
      
      <p className="text-gray-400 text-xs font-bold leading-relaxed mb-10 uppercase tracking-[0.4em] max-w-xs mx-auto">
        System Access Restricted <br/> 
        <span className="text-[9px] opacity-40 mt-2 block">Terminal inspection detected. Please terminate signal to continue.</span>
      </p>

      <div className="flex justify-center gap-3">
        {[0, 1, 2].map((i) => (
          <motion.div 
            key={i}
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        ))}
      </div>
    </motion.div>
    
    <div className="absolute bottom-10 left-0 w-full">
      <p className="text-[8px] font-black tracking-[1em] text-white/10 uppercase">Security Protocol v7.0.1 // Active</p>
    </div>
  </div>
);

export default Sorry;
