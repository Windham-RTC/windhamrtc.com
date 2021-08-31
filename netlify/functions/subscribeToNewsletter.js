const mailchimp = require('@mailchimp/mailchimp_marketing')
const axios = require('axios')
const qs = require('qs')

const {
  RECAPTCHA_SECRET_KEY,
  MAILCHIMP_API_KEY,
  MAILCHIMP_API_SERVER_PREFIX,
  WINDHAM_RTC_LIST_ID,
} = process.env

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_API_SERVER_PREFIX,
})

const RECAPTCHA_ENDPOINT = 'https://www.google.com/recaptcha/api/siteverify'

exports.handler = async function (event, context) {
  const { email, recaptchaToken } = JSON.parse(event.body)
  // VALIDATE RECAPTCHA TOKEN
  const recaptchaResponse = await axios.post(
    RECAPTCHA_ENDPOINT,
    qs.stringify({
      secret: RECAPTCHA_SECRET_KEY,
      response: recaptchaToken,
    })
  )

  const { success, score, 'error-codes': errorCodes } = recaptchaResponse.data

  if (!success) {
    // Recaptcha itself was invalid -- might mean key was misconfigured
    console.log({ EVENT: 'invalid-recaptcha', score, errorCodes })
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'invalid-recaptcha',
        errorCodes,
      }),
    }
  }

  if (score < 0.5) {
    // Recaptcha failed
    return {
      statusCode: 429,
      body: JSON.stringify({
        error: `You failed recaptcha verification. Are you human?`,
      }),
    }
  }

  // PING
  // const response = await mailchimp.ping.get()

  // GET LISTS
  // const response = await mailchimp.lists.getAllLists()

  // GET LIST MEMBER INFO
  // const response = await mailchimp.lists.getListMembersInfo(WINDHAM_RTC_LIST_ID)

  // ADD LIST MEMBER
  try {
    await mailchimp.lists.addListMember(WINDHAM_RTC_LIST_ID, {
      email_address: email,
      status: 'subscribed',
    })

    return {
      statusCode: 200,
    }
  } catch (err) {
    console.log('err', err)
    if (err?.response?.body?.title === 'Member Exists')
      return {
        statusCode: 500,
        body: JSON.stringify({
          code: 101,
          error: `You're already subscribed to the newsletter.`,
        }),
      }
  }
}
