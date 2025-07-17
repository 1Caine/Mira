import { motion } from 'framer-motion';

export default function Mira() {
  return (
    <motion.div
      className="w-24 h-24 bg-mira rounded-full shadow-lg fixed bottom-10 right-10"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <div className="text-xs text-center pt-8">Mira</div>
    </motion.div>
  );
}
