import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'classnames'

const FadeText = ({ show, className, children }) => {
  const variants = {
    show: { opacity: 1 },
    hide: { opacity: 0 },
  }

  return (
    <motion.p
      animate={show ? 'show' : 'hide'}
      variants={variants}
      className={clsx('mt-3 text-gray-500', className)}
    >
      {children}
    </motion.p>
  )
}

export default FadeText
