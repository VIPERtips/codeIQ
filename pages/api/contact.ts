import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      await client.messages.create({
        body: `New contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        from: 'whatsapp:+14155238886', // Twilio sandbox number
        to: 'whatsapp:+263787778679', // Your WhatsApp number
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Twilio Error:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
