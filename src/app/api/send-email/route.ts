import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "deepanshu.fullstack@gmail.com",
      subject: `Contact Form - ${name}`,
      html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

          body {
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
          }

          .container {
            max-width: 500px;
            margin: auto;
            background: #0b1b31;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .header {
            background: #64ffda;
            color: #0a1929;
            padding: 20px;
            text-align: center;
          }

          .heading {
            font-family: 'JetBrains Mono', monospace;
            font-size: 20px;
            font-weight: 600;
          }

          .content {
            padding: 30px;
          }

          .field {
            margin-bottom: 20px;
          }

          .label {
            font-weight: bold;
            color: #ccd6f6;
            display: block;
            margin-bottom: 5px;
            font-family: 'JetBrains Mono', monospace;
          }

          .value {
            color: #8892b0;
            background: transparent;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #64ffda;
            font-family: 'JetBrains Mono', monospace;
          }

          .footer {
            text-align: center;
            padding: 15px;
            font-size: 12px;
            color: #ccd6f6;
            background: #0b1b31;
            border-top: 1px solid #64ffda;
            font-family: 'JetBrains Mono', monospace;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="heading">New Contact Form Submission</h1>
          </div>

          <div class="content">
            <div class="field">
              <span class="label">Name</span>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <span class="label">Email</span>
              <div class="value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>

            <div class="field">
              <span class="label">Message</span>
              <div class="value">
                ${message}
              </div>
            </div>
          </div>

          <div class="footer">
            This message was sent from your website contact form.
          </div>
        </div>
      </body>
    </html>
      `,
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank you for contacting me",
      html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

          body {
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
          }

          .container {
            max-width: 500px;
            margin: auto;
            background: #0b1b31;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .header {
            background: #64ffda;
            color: #0a1929;
            padding: 20px;
            text-align: center;
          }

          .heading {
            font-family: 'JetBrains Mono', monospace;
            font-size: 20px;
            font-weight: 600;
          }

          .content {
            padding: 30px;
          }

          .field {
            margin-bottom: 20px;
          }

          .label {
            font-weight: bold;
            color: #ccd6f6;
            display: block;
            margin-bottom: 10px;
            font-family: 'JetBrains Mono', monospace;
          }

          .value {
            color: #8892b0;
            background: transparent;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #64ffda;
            font-family: 'JetBrains Mono', monospace;
          }

          .footer {
            padding: 15px;
            font-size: 12px;
            color: #ccd6f6;
            background: #0b1b31;
            border-top: 1px solid #64ffda;
            font-family: 'JetBrains Mono', monospace;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="heading">Thank You, ${name}! 🎉</h1>
          </div>

          <div class="content">
            <div class="field">
              <span class="label">I have received your message and will get back to you soon.</span>
            </div>


            <div class="field">
              <span class="label">Here is a copy of what you sent:</span>
              <div class="value">
                ${message}
              </div>
            </div>
          </div>

          <div class="footer">
            Warm regards, <br/>
            Deepanshu Mahawar
          </div>
        </div>
      </body>
    </html>
    
  `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 },
    );
  }
}
