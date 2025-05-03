import React, { useEffect } from 'react';
import { motion } from 'motion/react';

const ProjectPopup = ({ isOpen, onClose, project }) => {
  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-md mx-4 relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Title */}
        <h3 className="text-xl font-Ovo font-semibold dark:text-white mb-4">{project.title}</h3>
        
        {/* Message */}
        <div className="dark:text-white font-Ovo">
          <p className="mb-6 text-gray-700 dark:text-gray-200 leading-relaxed">
            This project is closed-source, so there is no open repository. For any questions, you are very welcome to reach me here:
          </p>
          <a 
            href="#contact" 
            onClick={onClose}
            className="inline-block py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors font-medium"
          >
            Contact Form
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPopup; 