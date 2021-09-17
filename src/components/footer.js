import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Footer = ({ location }) => (
  <footer className="lg:fixed right-0 bottom-0 p-4 flex justify-end">
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="text-indigo-600 hover:text-indigo-400 text-2xl font-bold"
        initial={{ rotate: 0, scale: 1, x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.25 }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <a
          href="https://www.facebook.com/WindhamCtRepublicans"
          target="_blank"
          rel="noreferrer noopener"
        >
          Facebook
        </a>
      </motion.div>
    </AnimatePresence>
  </footer>
)

export default Footer
