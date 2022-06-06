const nodemailer = require("nodemailer");

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.MAIL_PORT,
      port: 465,
      tls: {
        rejectUnauthorized: false,
      },
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  sendMail(targetEmail, content) {
    const message = {
      from: "Notes Apps",
      to: targetEmail,
      subject: "Ekspor Catatan",
      text: "Terlampir hasil dari ekspor catatan",
      attachments: [
        {
          filename: "notes.json",
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
