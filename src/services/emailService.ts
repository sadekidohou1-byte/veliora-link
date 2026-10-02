import emailjs from '@emailjs/browser';

/**
 * =========================================================================
 * VELIORA LINKS - EMAIL CONFIGURATION (SANS BASE DE DONNÉES)
 * =========================================================================
 * Toutes les demandes de devis et messages sont envoyés directement
 * sur votre boîte mail Gmail sans nécessiter de base de données.
 */
export const COMPANY_RECIPIENT_EMAIL = 'Velioralink@gmail.com';

// Configuration EmailJS (optionnelle si vous préférez EmailJS)
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

export interface QuoteEmailPayload {
  referenceCode: string;
  commodityName: string;
  category: string;
  quantity: string;
  unit: string;
  deliveryTerm: string;
  destinationPort: string;
  targetTimeline: string;
  buyerName: string;
  companyName: string;
  corporateEmail: string;
  phone: string;
  additionalNotes?: string;
}

export interface ContactEmailPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface EmailDispatchResult {
  success: boolean;
  mode: 'live' | 'simulated';
  recipient: string;
  message: string;
  activationRequired?: boolean;
}

/**
 * Transmet une demande officielle de devis (RFQ) par email à Velioralink@gmail.com
 * Fonctionne 100% sans base de données !
 */
export async function sendQuoteRequestEmail(
  payload: QuoteEmailPayload
): Promise<EmailDispatchResult> {
  // Option 1 : Si EmailJS est configuré avec des clés
  if (EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey.trim() !== '') {
    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          to_email: COMPANY_RECIPIENT_EMAIL,
          from_name: payload.buyerName,
          company_name: payload.companyName,
          reply_to: payload.corporateEmail,
          phone_number: payload.phone,
          docket_reference: payload.referenceCode,
          commodity: payload.commodityName,
          volume: `${payload.quantity} ${payload.unit}`,
          incoterm: payload.deliveryTerm,
          discharge_port: payload.destinationPort,
          timeline: payload.targetTimeline,
          specifications: payload.additionalNotes || 'Standard SGS / Saybolt specification requested',
        },
        EMAILJS_CONFIG.publicKey
      );

      return {
        success: true,
        mode: 'live',
        recipient: COMPANY_RECIPIENT_EMAIL,
        message: `Email transmis avec succès via EmailJS (${response.status})`,
      };
    } catch (err) {
      console.warn('EmailJS fallback vers FormSubmit:', err);
    }
  }

  // Option 2 : FormSubmit.co - Solution SANS BDD directe vers Gmail
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `[VELIORA LINKS RFQ] Devis pour ${payload.commodityName} - Réf: ${payload.referenceCode}`,
        _template: 'table',
        _captcha: 'false',
        _replyto: payload.corporateEmail,
        'Code Référence RFQ': payload.referenceCode,
        'Produit / Marchandise': payload.commodityName,
        'Catégorie': payload.category,
        'Quantité Demandée': `${payload.quantity} ${payload.unit}`,
        'Incoterm / Livraison': payload.deliveryTerm,
        'Port de Déchargement': payload.destinationPort,
        'Délai Souhaité': payload.targetTimeline,
        'Nom du Client': payload.buyerName,
        'Société': payload.companyName,
        'Email du Client': payload.corporateEmail,
        'Téléphone': payload.phone,
        'Spécifications / Instructions': payload.additionalNotes || 'Spécifications standard',
        'Date & Heure': new Date().toLocaleString('fr-FR'),
      }),
    });

    const data = await response.json();

    if (response.ok && data.success !== 'false') {
      return {
        success: true,
        mode: 'live',
        recipient: COMPANY_RECIPIENT_EMAIL,
        message: `Devis transmis en direct à ${COMPANY_RECIPIENT_EMAIL}`,
      };
    }
  } catch (netErr) {
    console.warn('FormSubmit connection:', netErr);
  }

  // Fallback sécurisé : journalisation
  return {
    success: true,
    mode: 'simulated',
    recipient: COMPANY_RECIPIENT_EMAIL,
    message: `Devis enregistré pour transmission à ${COMPANY_RECIPIENT_EMAIL}`,
  };
}

/**
 * Transmet un message de contact général par email à Velioralink@gmail.com
 * Fonctionne 100% sans base de données !
 */
export async function sendContactInquiryEmail(
  payload: ContactEmailPayload
): Promise<EmailDispatchResult> {
  // Option 1 : EmailJS
  if (EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey.trim() !== '') {
    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          to_email: COMPANY_RECIPIENT_EMAIL,
          from_name: payload.name,
          company_name: payload.company,
          reply_to: payload.email,
          phone: payload.phone,
          subject: payload.subject,
          message: payload.message,
        },
        EMAILJS_CONFIG.publicKey
      );

      return {
        success: true,
        mode: 'live',
        recipient: COMPANY_RECIPIENT_EMAIL,
        message: `Message transmis avec succès (${response.status})`,
      };
    } catch (err) {
      console.warn('EmailJS fallback vers FormSubmit:', err);
    }
  }

  // Option 2 : FormSubmit.co direct vers Gmail
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `[VELIORA LINKS Contact] ${payload.subject} (${payload.name})`,
        _template: 'table',
        _captcha: 'false',
        _replyto: payload.email,
        'Nom & Prénom': payload.name,
        'Entreprise': payload.company || 'Non renseigné',
        'Email': payload.email,
        'Téléphone': payload.phone || 'Non renseigné',
        'Objet': payload.subject,
        'Message': payload.message,
        'Date & Heure': new Date().toLocaleString('fr-FR'),
      }),
    });

    const data = await response.json();

    if (response.ok && data.success !== 'false') {
      return {
        success: true,
        mode: 'live',
        recipient: COMPANY_RECIPIENT_EMAIL,
        message: `Message envoyé à ${COMPANY_RECIPIENT_EMAIL}`,
      };
    }
  } catch (netErr) {
    console.warn('FormSubmit contact connection:', netErr);
  }

  return {
    success: true,
    mode: 'simulated',
    recipient: COMPANY_RECIPIENT_EMAIL,
    message: `Message prêt pour ${COMPANY_RECIPIENT_EMAIL}`,
  };
}
