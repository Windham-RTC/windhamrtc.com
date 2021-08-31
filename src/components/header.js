import React from 'react'
import { Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

import Navbar from 'components/navbar'

const Header = ({ location }) => (
  <header className="relative p-6 pb-0 flex flex-col justify-center md:flex-row">
    <div className="text-center">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
        >
          <Link className="font-bold text-2xl whitespace-nowrap" to="/">
            <h1>Windham RTC</h1>
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
    <Navbar />
  </header>
)

export default Header
