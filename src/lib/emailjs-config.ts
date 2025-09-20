// EmailJS configuration
if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
  throw new Error('NEXT_PUBLIC_EMAILJS_SERVICE_ID is not defined');
}

if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
  throw new Error('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID is not defined');
}

if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
  throw new Error('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is not defined');
}

export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
} as const;

// Type guard to ensure config is complete
export const isEmailConfigValid = (): boolean => {
  return Boolean(
    emailConfig.serviceId &&
    emailConfig.templateId &&
    emailConfig.publicKey
  );
};
