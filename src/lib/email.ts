// Email utilities using Resend for Robuust Marketing
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface PackageInquiryData extends ContactFormData {
  packageName: "solid-start" | "firm-foundation";
}

// Send contact form email
export async function sendContactEmail(data: ContactFormData) {
  try {
    const result = await resend.emails.send({
      from: "website@robuust.marketing",
      to: process.env.CONTACT_EMAIL || "info@robuustmarketing.nl",
      replyTo: data.email,
      subject: `Nieuwe contactaanvraag van ${data.name}`,
      html: `
        <h2>Nieuwe Contactaanvraag</h2>
        <p><strong>Naam:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefoon:</strong> ${data.phone || "Niet opgegeven"}</p>
        <p><strong>Interesse:</strong> ${data.service || "Niet opgegeven"}</p>
        <p><strong>Bericht:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error };
  }
}

// Send package inquiry email
export async function sendPackageInquiryEmail(data: PackageInquiryData) {
  const packageNames = {
    "solid-start": "Solid Start",
    "firm-foundation": "Firm Foundation",
  };

  try {
    const result = await resend.emails.send({
      from: "website@robuust.marketing",
      to: process.env.CONTACT_EMAIL || "info@robuustmarketing.nl",
      replyTo: data.email,
      subject: `Pakket aanvraag: ${packageNames[data.packageName]} - ${data.name}`,
      html: `
        <h2>Nieuwe Pakket Aanvraag: ${packageNames[data.packageName]}</h2>
        <p><strong>Naam:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefoon:</strong> ${data.phone || "Niet opgegeven"}</p>
        <p><strong>Interesse:</strong> ${data.service || "Niet opgegeven"}</p>
        <p><strong>Bericht:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Deze aanvraag is gedaan voor het ${packageNames[data.packageName]} pakket.</em></p>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending package inquiry email:", error);
    return { success: false, error };
  }
}
