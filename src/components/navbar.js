import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NAV_LINKS = [
  ['Home', '/'],
  ['Contact', '/contact'],
]

const NavLink = ({ mobile = false, ...props }) => (
  <Link
    className={classNames(
      mobile
        ? 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 font-medium'
    )}
    activeClassName={classNames(
      mobile
        ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
        : 'border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 font-medium'
    )}
    {...props}
  />
)

const Navbar = ({ location }) => {
  console.log(location)
  return (
    <header className="relative">
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <motion.div
                    whileHover={{ scale: 0.95 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center"
                  >
                    <Link
                      to="/"
                      className="flex-shrink-0 flex items-center space-x-5"
                    >
                      <StaticImage
                        width={50}
                        placeholder="tracedSVG"
                        src="../images/elephant.png"
                        alt="Windham Connecticut Republican Town Committee"
                      />
                      <h2 className="font-bold text-rtc-red text-lg">
                        Windham RTC
                      </h2>
                    </Link>
                  </motion.div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {/* desktop */}
                    {NAV_LINKS.map(([name, path]) => (
                      <NavLink to={path}>{name}</NavLink>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {/* mobile */}
                {NAV_LINKS.map(([name, path]) => (
                  <NavLink to={path} mobile>
                    {name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  )
}

export default Navbar
