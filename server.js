import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());
app.use(cors());

// Serve static files from the dist folder (React build)
app.use(express.static(path.join(__dirname, "dist")));

// Configure le transporteur Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.ionos.fr",
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) console.error("Erreur SMTP:", error);
  else console.log("Serveur SMTP prêt !");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validation basique
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis" });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message reçu</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
  }
});

// Serve React app for all other routes (Express 5)
app.all(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});