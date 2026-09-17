"use client";

import { type FormEvent, useState, useTransition } from "react";
import { Check, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { submitInquiry, type InquiryPayload } from "@/lib/contact";

type Field = {
  name: keyof InquiryPayload;
  label: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

const fields: Field[] = [
  { name: "name", label: "Nama", type: "text", required: true, placeholder: "Nama lengkap Anda" },
  { name: "company", label: "Perusahaan", type: "text", placeholder: "Nama perusahaan / organisasi" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "email@perusahaan.com" },
  { name: "phone", label: "Telepon / WhatsApp", type: "tel", placeholder: "+62 8XX XXXX XXXX" },
  {
    name: "businessType",
    label: "Jenis Bisnis",
    type: "select",
    options: ["", "Business & Retail", "Education", "Healthcare", "Hospitality", "Property", "Professional Services", "Lainnya"],
    placeholder: "Pilih jenis bisnis",
  },
  {
    name: "projectType",
    label: "Jenis Proyek",
    type: "select",
    options: ["", "Website baru", "Redesign website", "Landing page", "CMS & integrasi", "Belum tahu pasti", "Lainnya"],
    placeholder: "Pilih jenis proyek",
  },
  {
    name: "budget",
    label: "Estimasi Anggaran",
    type: "select",
    options: ["", "Di bawah Rp500 ribu", "Rp500 ribu sampai Rp1 juta", "Rp1 juta sampai Rp3 juta", "Rp3 juta sampai Rp5 juta", "Rp5 juta sampai Rp10 juta", "Rp10 juta+", "Belum ditentukan"],
    placeholder: "Pilih rentang anggaran",
  },
  {
    name: "timeline",
    label: "Timeline Proyek",
    type: "select",
    options: ["", "Segera", "1 sampai 2 bulan", "3 sampai 6 bulan", "Setelah 6 bulan", "Belum ditentukan"],
    placeholder: "Pilih timeline",
  },
  {
    name: "message",
    label: "Ceritakan proyek Anda",
    type: "textarea",
    placeholder: "Jelaskan tantangan, tujuan, atau kebutuhan website Anda...",
  },
];

type FormStatus = "idle" | "loading" | "success" | "demo" | "error";

export function ContactForm() {
  const [form, setForm] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [isPending, startTransition] = useTransition();

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!form.name?.trim()) errs.name = "Nama wajib diisi";
    if (!form.email?.trim()) errs.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Format email tidak valid";
    if (!form.message?.trim()) errs.message = "Pesan wajib diisi";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    const payload: InquiryPayload = {
      name: form.name ?? "",
      company: form.company || undefined,
      email: form.email ?? "",
      phone: form.phone || undefined,
      businessType: form.businessType || undefined,
      projectType: form.projectType || undefined,
      budget: form.budget || undefined,
      timeline: form.timeline || undefined,
      message: form.message || undefined,
    };

    startTransition(async () => {
      const result = await submitInquiry(payload);

      if (!result.ok) {
        setStatus("error");
        return;
      }

      setStatus(result.mode === "demo" ? "demo" : "success");
      setForm({});
    });
  }

  const disabled = status === "loading" || isPending;

  if (status === "success" || status === "demo") {
    return (
      <div className="border border-line bg-white p-8 text-center sm:p-10">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest">
          <Check className="h-7 w-7 text-ivory" strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-forest">
          {status === "success" ? "Terkirim" : "Terima kasih"}
        </h3>
        <p className="mt-3 max-w-sm mx-auto text-[15px] leading-relaxed text-muted">
          {status === "success"
            ? "Pesan Anda telah diterima. Kami akan membalas dalam 1 sampai 2 hari kerja."
            : "Terima kasih, pesan Anda tercatat. Untuk pembicaraan yang lebih langsung, kirim email ke hello@solvra.studio."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[13px] font-semibold text-moss transition-colors hover:text-forest"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {fields.map((field) => {
        const error = errors[field.name];
        const id = `field-${field.name}`;

        return (
          <div key={field.name}>
            <label htmlFor={id} className="mb-1.5 block text-[12.5px] font-semibold text-forest">
              {field.label}
              {field.required && <span className="text-moss"> *</span>}
            </label>
            {field.type === "select" ? (
              <select
                id={id}
                name={field.name}
                value={form[field.name] ?? ""}
                onChange={(e) => setForm((p) => ({ ...p, [field.name]: e.target.value }))}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                className={cn("input-base", error && "border-red-500")}
              >
                {field.options?.map((opt) => (
                  <option key={opt} value={opt} disabled={!opt}>
                    {opt || field.placeholder}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={id}
                name={field.name}
                rows={5}
                value={form[field.name] ?? ""}
                onChange={(e) => setForm((p) => ({ ...p, [field.name]: e.target.value }))}
                placeholder={field.placeholder}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                className={cn("input-base resize-none", error && "border-red-500")}
              />
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type ?? "text"}
                value={form[field.name] ?? ""}
                onChange={(e) => setForm((p) => ({ ...p, [field.name]: e.target.value }))}
                placeholder={field.placeholder}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                className={cn("input-base", error && "border-red-500")}
              />
            )}
            {error && (
              <p id={`${id}-error`} role="alert" className="mt-1.5 text-[12px] font-medium text-red-600">
                {error}
              </p>
            )}
          </div>
        );
      })}

      {status === "error" && (
        <p role="alert" className="text-[13px] font-medium text-red-600">
          Terjadi kendala saat mengirim. Silakan coba lagi.
        </p>
      )}

      <button
        type="submit"
        disabled={disabled}
        className={cn(
          "mt-2 flex items-center justify-center gap-2 bg-forest py-4 text-[15px] font-semibold text-ivory transition-colors hover:bg-forest-2",
          disabled && "cursor-not-allowed opacity-70"
        )}
      >
        {disabled && <Loader2 className="h-4 w-4 animate-spin" />}
        {disabled ? "Mengirim..." : "Kirim Pengajuan Proyek"}
      </button>
    </form>
  );
}