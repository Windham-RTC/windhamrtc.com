import React, { useState, useCallback } from 'react'
import axios from 'axios'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import clsx from 'classnames'

import Button from 'components/button'
import FadeText from 'components/fade-text'

const InviteForm = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState(false)
  const [message, setMessage] = useState({})
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleEmailChange = (e) => {
    setMessage({})
    setEmail(e.target.value)
  }

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()

    try {
      setLoading(true)

      const recaptchaToken = await executeRecaptcha('mailchimp_signup')

      await axios.post('/.netlify/functions/subscribeToNewsletter', {
        email,
        recaptchaToken,
      })

      setEmail('')

      return setMessage({
        error: false,
        body: `Success! You've been added to our mailing list.`,
      })
    } catch (err) {
      if (err?.response?.data?.code === 101) {
        return setMessage({
          error: true,
          body: err?.response?.data?.error,
        })
      }

      return setMessage({
        error: true,
        body: (
          <span>
            Something went wrong. Please contact our webmaster at:{' '}
            <a className="link" href="mailto:website@windhamrtc.com">
              website@windhamrtc.com
            </a>
          </span>
        ),
      })
    } finally {
      setLoading(false)
    }
  })

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
      <div className="text-center lg:text-left lg:w-1/2">
        <h2 className="font-montserrat text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
          We're rebuilding the local Republican Party!
        </h2>
        <p className="font-montserrat text-3xl font-extrabold tracking-tight text-rtc-blue sm:block sm:text-4xl">
          Sign up for our Newsletter
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 sm:flex sm:justify-center lg:justify-start"
        >
          <label htmlFor="newsletter-signup" className="sr-only">
            Email address
          </label>
          <input
            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border border-gray-300 rounded-md"
            id="newsletter-signup"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={handleEmailChange}
            value={email}
            required
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <Button type="submit" disabled={loading}>
              Sign Up
            </Button>
          </div>
        </form>
        <RecaptchaText focused={focused} />
        {/* errorText / success text */}
        <FadeText
          show={message?.body}
          className={message?.error ? 'text-red-500' : 'text-green-500'}
        >
          {message.body}
        </FadeText>
      </div>
      <div>
        <StaticImage
          width={450}
          placeholder="tracedSVG"
          src="../images/logo.png"
          alt="Windham RTC Logo"
        />
      </div>
    </section>
  )
}

const RecaptchaText = ({ focused }) => (
  <FadeText show={focused} className="text-gray-500 text-sm">
    This site is protected by reCAPTCHA and the Google&nbsp;
    <a className="link" href="https://policies.google.com/privacy">
      Privacy Policy
    </a>{' '}
    and&nbsp;
    <a className="link" href="https://policies.google.com/terms">
      Terms of Service
    </a>{' '}
    apply.
  </FadeText>
)

export default InviteForm
