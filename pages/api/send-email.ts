import { NextApiRequest, NextApiResponse } from 'next';
import postmark from 'postmark';

const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    let result = await client.sendEmail({
      'From': 'post@variant.se',
      'To': 'post@variant.se',
      'Subject': 'Nytt meddelande från formuläret på hemsidan',
      'TextBody': `${req.body}`,
    });

    res.status(200).json({ message: 'Email sent successfully', data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to send email', error: error });
  }
}