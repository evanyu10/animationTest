
import { EmailTemplate } from '@/app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_cL1E9uyQ_KrUMMv6wzL4gYMxan8im1ZTm');
const fromEmail= process.env.FROM_EMAIL;

export async function POST(req: { body: any; }, res: any) {
  const {body} = req; 
  const {email, subject, message} = body;

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail ?? 'default@example.com',
      to: ['yuevan7@gmail.com'],
      subject: 'subject',
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>{message}</p>
        </>
      ), 
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
