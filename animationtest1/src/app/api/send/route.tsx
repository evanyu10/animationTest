import { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, subject, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail ?? 'default@example.com',
      to: ['yuevan7@gmail.com'],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      return res.status(500).json({ error });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
