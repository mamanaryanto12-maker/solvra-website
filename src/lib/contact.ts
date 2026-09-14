export type InquiryPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  businessType?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
};

export type InquiryResult =
  | { ok: true; mode: "connected" | "demo" }
  | { ok: false; error: string };

const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  if (!endpoint) {
    return {
      ok: true,
      mode: "demo",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { ok: false, error: "Terjadi kendala saat mengirim. Silakan coba lagi." };
    }

    return { ok: true, mode: "connected" };
  } catch {
    return { ok: false, error: "Terjadi kendala koneksi. Silakan coba lagi." };
  }
}