import React from 'react'
import { Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

import Navbar from 'components/navbar'

const Header = ({ location }) => (
  <header className="relative p-6 pb-0 flex flex-col justify-center md:flex-row">
    <div className="text-center">
      <AnimatePresence exitBeforeEnter>
        <motion.h1
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            className="font-bold text-2xl whitespace-nowrap text-rtc-red hover:text-rtc-red-300"
            to="/"
            alt="Windham Connecticut Republican Town Committee"
          >
            Windham RTC
          </Link>
        </motion.h1>
      </AnimatePresence>
    </div>
    <Navbar />
  </header>
)

export default Header
