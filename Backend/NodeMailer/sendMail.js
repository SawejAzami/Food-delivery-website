import dotenv from "dotenv";
import Mailjet from "node-mailjet";
dotenv.config();

const baseUrl = `${process.env.BASE_URL}/api/user`;

const mailjet = Mailjet.apiConnect(process.env.API_KEY, process.env.SECRET_KEY);

async function sendMail(email, token ,OTP="") {
  const verifyUrl = `${baseUrl}/verify?token=${encodeURIComponent(token)}`;
  try {
     const result = await mailjet
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.MAIL_FROM, // use env
              Name: "TestyHub",
            },
            To: [{ Email: email }],
            Subject: "Verify your email by OTP or Link",
            HTMLPart:OTP?`<h1>${OTP}<h1/>`: `
              <p>Thanks for registering.</p>
              <p>Please click the link below to verify your email address:</p>
              <a href="${verifyUrl}">${verifyUrl}</a>
            `,
          },
        ],
      });
  } catch (err) {
    console.error("Mailjet Error:", err?.response?.data || err);
    throw err;
  }
}

export default sendMail;

// const sendMail =async (userEmail,token)=>{
//      const verifyUrl = `${baseUrl}/verify?token=${encodeURIComponent(token)}`;
//  const transporter = nodemailer.createTransport({
//    host: "in-v3.mailjet.com",
//    port: 587,
//    auth: {
//      user: process.env.API_KEY,
//      pass: process.env.SECRET_KEY,
//    },
//  });

//     const info = await transporter.sendMail({
//       from: "10022002sa@gmail.com",
//       to: userEmail,
//       subject: "Verify your email",
//   html: `
//   <p>Thanks for registering.</p>
//   <p>Please click the link below to verify your email address:</p>
//   <a href="${verifyUrl}">${verifyUrl}</a>
//   <p>This link expires according to token lifetime.</p>
// `,
//     });

//     // console.log("Message sent:", info.messageId);

//      if (nodemailer.getTestMessageUrl(info)) {
//        return {
//          previewUrl: nodemailer.getTestMessageUrl(info),
//          messageId: info.messageId,
//        };
//      }
//      return { messageId: info.messageId };

// }

// export default sendMail;
