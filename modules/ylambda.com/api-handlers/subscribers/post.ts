import type { HandlerType } from 'api-handlers/HandlerType'
import axios from 'axios'

const handlePut: HandlerType = async ({ req, res }) => {
  const { email } = req.body

  if (!email) {
    res.status(400).json({
      title: 'email is invalid',
    })
  }

  try {
    const result = await axios.post(
      `${process.env.MAINCHIMP_URL}/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        headers: {
          Authorization: `Basic ${process.env.MAILCHIMP_API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
    return res.status(result.status).json(result?.data)
  } catch (error: any) {
    return res.status(error?.response?.status).json(error?.response?.data)
  }
}

export default handlePut
