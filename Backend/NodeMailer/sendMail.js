import dotenv from "dotenv";
import Mailjet from "node-mailjet";
dotenv.config();

const baseUrl = `${process.env.BASE_URL}/api/user`;

const mailjet = Mailjet.apiConnect(process.env.API_KEY, process.env.SECRET_KEY);

async function sendMail(email, token ,OTP="") {
  const verifyUrl = `https://food-delivery-website-backend-2q5v.onrender.com/api/user/verify?token=${encodeURIComponent(token)}`;
  try {
     const result = await mailjet
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.MAIL_FROM,
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
      // console.log(result)
  } catch (err) {
    console.error("Mailjet Error:", err?.response?.data || err);
    throw err;
  }
}

export default sendMail;
