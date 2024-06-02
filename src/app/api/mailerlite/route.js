import MailerLite from '@mailerlite/mailerlite-nodejs';

export async function GET() {
    return Response.json("Hererer")
}

export async function POST(req) {
    const mailerlite = new MailerLite({
        api_key: process.env.MAILER_LITE_TOKEN
    });

    const data = await req.json()
    const { email } = data

    const params = { email }

    await mailerlite.subscribers.createOrUpdate(params)

    return Response.json({ status: 200, 'data': data })
}