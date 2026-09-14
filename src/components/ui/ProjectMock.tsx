import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project, ProjectVisual } from "@/data/projects";

const NAVY = "#0E1A3D";
const NAVY2 = "#162A5C";
const BLUE = "#2E6FF2";
const GRAY = "#6B7280";
const LINE = "#E0E3EA";
const IVORY = "#F7F7F5";
const WHITE = "#FFFFFF";

const navyGlow = `${NAVY}1A`;

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  );
}

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 border-b border-line bg-ivory px-4 py-2">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-moss/40" />
      </div>
      <span className="ml-1 flex h-5 flex-1 items-center justify-center rounded-[2px] bg-white text-[9px] tracking-wide text-muted">
        {url}
      </span>
    </div>
  );
}

function NavBar({ title, dark = true }: { title: string; dark?: boolean }) {
  return (
    <div
      className={cn("flex items-center justify-between px-5 py-3")}
      style={{
        borderBottom: `1px solid ${dark ? "rgba(247,247,245,0.14)" : LINE}`,
      }}
    >
      <span
        className="text-[10px] font-extrabold tracking-[0.18em]"
        style={{ color: dark ? IVORY : NAVY }}
      >
        {title.slice(0, 14).toUpperCase()}
      </span>
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-10 rounded-[2px]" style={{ backgroundColor: dark ? "rgba(247,247,245,0.22)" : LINE }} />
        <span className="hidden h-1.5 w-10 rounded-[2px] sm:block" style={{ backgroundColor: dark ? "rgba(247,247,245,0.22)" : LINE }} />
        <span className="h-4 w-12 rounded-[2px] bg-moss" />
      </div>
    </div>
  );
}

function Chip({ label, tone = "blue" }: { label: string; tone?: "blue" | "navy" | "ivory" }) {
  const bg = tone === "blue" ? BLUE : tone === "navy" ? NAVY : IVORY;
  const color = tone === "ivory" ? NAVY : IVORY;
  return (
    <span
      className="inline-flex w-fit items-center rounded-[2px] px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest"
      style={{ backgroundColor: bg, color }}
    >
      {label}
    </span>
  );
}

function Bar({ width, color, h = 3 }: { width: string; color: string; h?: number }) {
  return <span className="block rounded-[1px]" style={{ width, height: h, backgroundColor: color }} />;
}

function HeroMock({ project }: { project: Project }) {
  return (
    <div className="relative h-full w-full" style={{ backgroundColor: NAVY }}>
      <div className="absolute inset-0">
        <Photo src={project.image} alt={project.imageAlt} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,16,32,0.82) 0%, rgba(10,16,32,0.18) 45%, rgba(10,16,32,0.42) 100%)",
          }}
        />
      </div>
      <NavBar title={project.title} />
      <div className="relative flex h-full min-h-0 flex-col justify-end gap-2 px-5 pb-5 pt-6">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-moss">
          {project.industry}
        </span>
        <div className="max-w-[85%] text-[clamp(15px,2.1vw,24px)] font-extrabold leading-[1.05] tracking-tight text-ivory">
          {project.title}
        </div>
        <div className="mt-1 flex flex-col gap-1.5">
          <Bar width="75%" color="rgba(247,247,245,0.5)" />
          <Bar width="50%" color="rgba(247,247,245,0.32)" />
        </div>
        <div className="mt-1.5">
          <Chip label="Lihat Karya" />
        </div>
      </div>
    </div>
  );
}

function EditorialMock({ project }: { project: Project }) {
  return (
    <div className="flex h-full min-h-0 bg-white">
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-5 py-4">
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-moss">
          {project.industry}
        </span>
        <div className="text-[clamp(13px,1.9vw,22px)] font-extrabold leading-none tracking-tight text-forest">
          {project.title}
        </div>
        <Bar width="40px" color={BLUE} />
        <div className="mt-1 flex flex-col gap-1.5">
          <Bar width="100%" color={LINE} h={4} />
          <Bar width="66%" color={LINE} h={4} />
          <Bar width="80%" color={LINE} h={4} />
        </div>
        <div className="mt-1">
          <Chip label="Pelajari" tone="navy" />
        </div>
      </div>
      <div className="relative w-[46%] min-w-0 overflow-hidden">
        <Photo src={project.image} alt={project.imageAlt} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to left, rgba(10,16,32,0.42), rgba(10,16,32,0))" }}
        />
      </div>
    </div>
  );
}

function GalleryMock({ project }: { project: Project }) {
  return (
    <div className="flex h-full min-h-0 flex-col" style={{ backgroundColor: NAVY }}>
      <NavBar title={project.title} />
      <div className="relative flex-1 overflow-hidden">
        <Photo src={project.image} alt={project.imageAlt} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,16,32,0.68), transparent 50%)" }}
        />
        <span className="absolute bottom-4 left-5 text-[9px] font-bold uppercase tracking-[0.2em] text-moss">
          {project.industry}
        </span>
      </div>
      <div className="grid shrink-0 grid-cols-3 gap-1.5 px-5 py-4">
        <span className="h-6 rounded-[1px]" style={{ backgroundColor: "rgba(247,247,245,0.5)" }} />
        <span className="h-6 rounded-[1px] bg-moss" />
        <span className="h-6 rounded-[1px]" style={{ backgroundColor: "rgba(247,247,245,0.28)" }} />
      </div>
      <div className="shrink-0 px-5 pb-4">
        <div className="text-[clamp(11px,1.4vw,16px)] font-extrabold leading-none tracking-tight text-ivory">
          {project.title}
        </div>
        <div className="mt-1.5">
          <Bar width="66%" color={BLUE} />
        </div>
      </div>
    </div>
  );
}

function MobileMock({ project }: { project: Project }) {
  return (
    <div className="flex h-full min-h-0 items-center justify-center gap-4 px-6 py-4 bg-ivory">
      <div
        className="relative hidden h-[86%] w-[36%] min-w-0 overflow-hidden rounded-[3px] border sm:block"
        style={{ borderColor: LINE }}
      >
        <div className="absolute left-0 top-2 h-[3px] w-1/3 bg-moss" />
        <Photo src={project.image} alt={project.imageAlt} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,16,32,0.78), rgba(10,16,32,0))" }}
        />
        <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1">
          <span className="text-[8px] font-extrabold leading-none text-ivory">{project.title}</span>
          <Bar width="75%" color={BLUE} />
        </div>
      </div>
      <div className="relative h-[82%] w-[40%] min-w-0 overflow-hidden rounded-[3px] bg-white shadow-raise">
        <div className="absolute left-0 top-2 z-10 flex w-full flex-col items-center gap-1.5 px-3">
          <span className="h-4 w-4 rounded-full border border-ivory/60" />
          <span className="text-[6px] font-bold tracking-[0.2em] text-ivory">
            {project.title.slice(0, 16).toUpperCase()}
          </span>
        </div>
        <Photo src={project.image} alt={project.imageAlt} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,16,32,0.58), rgba(10,16,32,0) 40%, rgba(10,16,32,0.72))",
          }}
        />
        <span className="absolute bottom-8 left-3 text-[7px] font-bold uppercase tracking-[0.18em] text-moss">
          {project.industry}
        </span>
        <span
          className="absolute bottom-3 left-3 right-3 rounded-[2px] py-1.5 text-center text-[7px] font-bold uppercase tracking-widest"
          style={{ backgroundColor: BLUE, color: "#fff" }}
        >
          Pelajari Lebih
        </span>
      </div>
    </div>
  );
}

function NavRow({ label, active, index }: { label: string; active?: boolean; index: number }) {
  return (
    <div
      className="flex items-center gap-2 rounded-[2px] px-2 py-1.5"
      style={{ backgroundColor: active ? BLUE : "transparent" }}
    >
      <span className="h-2.5 w-2.5 rounded-[1px]" style={{ backgroundColor: active ? "rgba(247,247,245,0.9)" : "rgba(247,247,245,0.3)" }} />
      <span className="h-1.5 rounded-[1px]" style={{ width: `${[74, 88, 60, 82, 66][index] * 0.6}%`, backgroundColor: active ? "rgba(247,247,245,0.9)" : "rgba(247,247,245,0.32)" }} />
    </div>
  );
}

function DashboardMock({ project }: { project: Project }) {
  return (
    <div className="flex h-full min-h-0" style={{ backgroundColor: IVORY }}>
      <div className="hidden w-[30%] min-w-0 flex-col gap-1 p-3 sm:flex" style={{ backgroundColor: NAVY2 }}>
        <div className="mb-1 flex items-center gap-2 px-2">
          <span className="h-4 w-4 rounded-[2px] bg-moss" />
          <span className="h-2 w-14 rounded-[1px]" style={{ backgroundColor: "rgba(247,247,245,0.8)" }} />
        </div>
        {["Dashboard", "Kursus", "Tugas", "Nilai", "Materi"].map((label, i) => (
          <NavRow key={label} label={label} active={i === 0} index={i} />
        ))}
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-3.5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <Bar width="56px" color={NAVY} h={8} />
            <Bar width="34px" color={GRAY} h={3} />
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden h-5 w-16 rounded-[2px] sm:block" style={{ backgroundColor: WHITE, border: `1px solid ${LINE}` }} />
            <span className="h-6 w-6 rounded-full bg-moss" />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[64, 42, 78].map((w, i) => (
            <div key={i} className="rounded-[3px] border p-2" style={{ backgroundColor: WHITE, borderColor: LINE }}>
              <Bar width="40%" color={GRAY} h={3} />
              <Bar width={`${w}%`} color={NAVY} h={6} />
            </div>
          ))}
        </div>
        <div className="mt-3 flex min-h-0 flex-1 flex-col gap-2">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-2.5 rounded-[3px] border p-2" style={{ backgroundColor: WHITE, borderColor: LINE }}>
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-[2px]">
                <Photo src={project.image} alt={project.imageAlt} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <Bar width={`${[52, 44][i]}%`} color={NAVY} h={5} />
                  <span className="h-4 w-9 rounded-[2px] border" style={{ borderColor: LINE, backgroundColor: IVORY }} />
                </div>
                <div className="h-[3px] w-full overflow-hidden rounded-full" style={{ backgroundColor: LINE }}>
                  <div className="h-full rounded-full bg-moss" style={{ width: `${[68, 46][i]}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductTile({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="flex min-h-0 flex-col rounded-[2px] border" style={{ borderColor: LINE, backgroundColor: WHITE }}>
      <div className="relative min-h-0 flex-1">
        <Photo src={image} alt={alt} />
      </div>
      <div className="flex items-center justify-between p-2">
        <Bar width="55%" color={NAVY} h={4} />
        <span className="h-4 w-10 rounded-[2px] bg-moss" />
      </div>
    </div>
  );
}

function CommerceMock({ project }: { project: Project }) {
  return (
    <div className="flex h-full min-h-0 flex-col" style={{ backgroundColor: IVORY }}>
      <div className="flex shrink-0 items-center justify-between border-b px-4 py-2.5" style={{ borderColor: LINE }}>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-[1px] bg-moss" />
          <span className="text-[9px] font-extrabold tracking-[0.15em]" style={{ color: NAVY }}>
            {project.title.slice(0, 12).toUpperCase()}
          </span>
        </span>
        <div className="flex items-center gap-2">
          <span className="hidden h-4 w-9 rounded-[2px] border sm:block" style={{ borderColor: LINE }} />
          <span className="flex h-5 w-8 items-center justify-center rounded-[2px] border" style={{ borderColor: LINE, backgroundColor: WHITE }}>
            <span className="h-2 w-2 rounded-full bg-moss" />
          </span>
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-2 p-3">
        <ProductTile image={project.image} alt={project.imageAlt} />
        <div className="relative min-h-0 overflow-hidden rounded-[2px]">
          <Photo src={project.image} alt={project.imageAlt} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,16,32,0.5), transparent 55%)" }} />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <span className="text-[7px] font-bold uppercase tracking-widest text-ivory">Tampil</span>
            <span className="h-4 w-9 rounded-[2px] bg-moss" />
          </div>
        </div>
        <div className="relative min-h-0 overflow-hidden rounded-[2px]">
          <Photo src={project.image} alt={project.imageAlt} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,16,32,0.5), transparent 55%)" }} />
          <span className="absolute bottom-2 left-2 h-4 w-9 rounded-[2px] bg-moss" />
        </div>
        <ProductTile image={project.image} alt={project.imageAlt} />
      </div>
    </div>
  );
}

function Field({ label, width }: { label: string; width: string }) {
  return (
    <div className="flex flex-col gap-1">
      <Bar width={width} color="rgba(247,247,245,0.55)" h={3} />
      <span className="h-5 rounded-[2px]" style={{ backgroundColor: "rgba(247,247,245,0.28)", border: "1px solid rgba(247,247,245,0.22)" }} />
    </div>
  );
}

function HospitalityMock({ project }: { project: Project }) {
  return (
    <div className="relative h-full min-h-0 overflow-hidden bg-ivory">
      <div className="absolute inset-0">
        <Photo src={project.image} alt={project.imageAlt} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,16,32,0.72), rgba(10,16,32,0.2) 55%, rgba(10,16,32,0.35))" }}
        />
      </div>
      <NavBar title={project.title} />
      <div className="relative flex h-full min-h-0 flex-col justify-end p-5">
        <div
          className="rounded-[3px] p-3.5 shadow-float"
          style={{ backgroundColor: "rgba(14,26,61,0.82)", border: "1px solid rgba(247,247,245,0.16)", backdropFilter: "blur(2px)" }}
        >
          <div className="grid grid-cols-2 gap-2.5">
            <Field label="Check-in" width="45%" />
            <Field label="Check-out" width="48%" />
          </div>
          <span className="mt-3 block h-6 rounded-[2px] bg-moss" />
          <div className="mt-2 flex flex-col gap-1">
            <Bar width="60%" color={NAVY} h={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DoctorRow({ active, image, alt }: { active?: boolean; image: string; alt: string }) {
  return (
    <div
      className="flex items-center gap-2 rounded-[2px] border px-2 py-1.5"
      style={{ borderColor: active ? BLUE : LINE, backgroundColor: active ? navyGlow : WHITE }}
    >
      <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full">
        <Photo src={image} alt={alt} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <Bar width="62%" color={NAVY} h={4} />
        <Bar width="40%" color={GRAY} h={3} />
      </div>
      <span
        className="h-5 w-9 rounded-[2px]"
        style={{ backgroundColor: active ? BLUE : "rgba(46,111,242,0.18)" }}
      />
    </div>
  );
}

function BookingMock({ project }: { project: Project }) {
  return (
    <div className="flex h-full min-h-0 flex-col justify-center bg-ivory p-4">
      <div className="rounded-[3px] border shadow-raise" style={{ borderColor: LINE, backgroundColor: WHITE }}>
        <div className="flex items-center justify-between border-b px-3.5 py-2.5" style={{ borderColor: LINE }}>
          <span className="text-[9px] font-extrabold tracking-[0.14em]" style={{ color: NAVY }}>
            {project.title.slice(0, 12).toUpperCase()}
          </span>
          <Bar width="34px" color={GRAY} h={3} />
        </div>
        <div className="flex flex-col gap-2.5 p-3.5">
          <div className="grid grid-cols-7 gap-1.5">
            {["S", "S", "R", "K", "J", "S", "M"].map((d, i) => (
              <span
                key={i}
                className="flex h-6 items-center justify-center rounded-[2px] text-[8px] font-bold"
                style={
                  i === 4
                    ? { backgroundColor: BLUE, color: "#fff" }
                    : { backgroundColor: IVORY, color: GRAY }
                }
              >
                {d}
              </span>
            ))}
          </div>
          <div className="flex gap-1.5">
            {["09:00", "10:30", "13:00", "15:30"].map((t, i) => (
              <span
                key={t}
                className="flex h-5 flex-1 items-center justify-center rounded-[2px] text-[7px] font-bold"
                style={
                  i === 1
                    ? { backgroundColor: BLUE, color: "#fff" }
                    : { backgroundColor: IVORY, color: GRAY, border: `1px solid ${LINE}` }
                }
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-1.5">
            <DoctorRow active image={project.image} alt={project.imageAlt} />
            <DoctorRow image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80&auto=format&fit=crop" alt="Dokter kedua" />
          </div>
        </div>
      </div>
    </div>
  );
}

const visuals: React.ComponentType<{ project: Project }>[] = [
  HeroMock,
  EditorialMock,
  GalleryMock,
  MobileMock,
  DashboardMock,
  CommerceMock,
  HospitalityMock,
  BookingMock,
];

const visualIndex: Record<ProjectVisual, number> = {
  hero: 0,
  editorial: 1,
  gallery: 2,
  mobile: 3,
  dashboard: 4,
  commerce: 5,
  hospitality: 6,
  booking: 7,
};

type ProjectMockProps = {
  project: Project;
  visual?: ProjectVisual;
  variation?: number;
  className?: string;
  frame?: boolean;
  url?: string;
};

export function ProjectMock({
  project,
  visual,
  variation = 0,
  className,
  frame = true,
}: ProjectMockProps) {
  const Visual = visual ? visuals[visualIndex[visual]] : visuals[variation % visuals.length];
  const url = `solvra.studio/work/${project.slug}`;

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden border border-line bg-white shadow-raise",
        className
      )}
    >
      {frame && <BrowserChrome url={url} />}
      <div className="min-h-0 flex-1">
        <Visual project={project} />
      </div>
    </div>
  );
}