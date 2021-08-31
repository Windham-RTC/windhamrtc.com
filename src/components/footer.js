import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Footer = ({ location }) => (
  <footer className="fixed right-0 bottom-0 p-4 flex justify-end">
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="text-indigo-600 text-2xl font-bold"
        key={location.pathname}
        initial={{ rotate: 0, scale: 1, x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.25 }}
        whileHover={{
          rotate: 5,
          scale: 1.1,
          opacity: 0.8,
        }}
        whileTap={{
          rotate: 7,
          scale: 1.3,
        }}
      >
        <a
          href="https://facebook.com/windhamrtc"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </motion.div>
    </AnimatePresence>
  </footer>
)

export default Footer
