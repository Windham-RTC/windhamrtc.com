import React from 'react'
import { node, bool, oneOf } from 'prop-types'
import { motion } from 'framer-motion'
import clsx from 'classnames'

const BUTTON_CLASSES = {
  primary: 'bg-rtc-blue hover:bg-rtc-blue-300 focus:ring-indigo-500 text-white',
}

const Button = ({
  className = '',
  palette = 'primary',
  disabled,
  children,
  ...props
}) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      className={clsx(
        'w-full flex items-center justify-center px-5 py-3 border border-transparent font-montserrat text-base font-medium uppercase rounded-md text-white bg-rtc-blue hover:bg-rtc-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
        BUTTON_CLASSES[palette],
        { 'bg-gray-400 hover:cursor-not-allowed': disabled },
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}

Button.propTypes = {
  children: node.isRequired,
  palette: oneOf(['primary']),
  disabled: bool,
}

Button.defaultProps = {
  palette: 'primary',
  disabled: false,
}

export default Button
