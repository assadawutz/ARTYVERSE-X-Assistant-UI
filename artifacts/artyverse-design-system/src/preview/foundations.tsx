import { AudioWaveform, LiveStatus } from '../components/ui/status';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Guidelines } from './parts';

const CORE_SWATCHES = [
  { name: 'Primary', role: 'สีชมพูเข้ม · การกระทำหลัก', className: 'bg-primary text-primary-foreground' },
  { name: 'Secondary', role: 'พื้นผิวรองโทนเย็น', className: 'bg-secondary text-secondary-foreground' },
  { name: 'Accent', role: 'สีไลม์ · สถานะสด', className: 'bg-accent text-accent-foreground' },
] as const;

const SUPPORTING_SWATCHES = [
  { name: 'Background', className: 'bg-background text-foreground' },
  { name: 'Card', className: 'bg-card text-card-foreground' },
  { name: 'Muted', className: 'bg-muted text-muted-foreground' },
  { name: 'Danger', className: 'bg-destructive text-destructive-foreground' },
  { name: 'Border', className: 'bg-border text-foreground' },
] as const;

const TYPE_SCALE = [
  { label: 'Display', className: 'text-4xl font-bold tracking-tight' },
  { label: 'Heading', className: 'text-2xl font-semibold tracking-tight' },
  { label: 'Body', className: 'text-base leading-relaxed' },
  { label: 'Label', className: 'text-sm font-medium' },
  { label: 'Caption', className: 'text-xs text-muted-foreground' },
] as const;

const SPACING_SCALE = [
  { label: '4', className: 'w-4' },
  { label: '8', className: 'w-8' },
  { label: '12', className: 'w-12' },
  { label: '16', className: 'w-16' },
  { label: '24', className: 'w-24' },
] as const;

function Swatch({
  name,
  className,
  role,
}: {
  name: string;
  className: string;
  role?: string;
}) {
  return (
    <div className="min-w-0">
      <div className={`flex h-20 items-end rounded-xl border border-border/70 p-3 ${className}`}>
        <span className="text-xs font-semibold">{name}</span>
      </div>
      {role ? <p className="mt-2 text-xs text-muted-foreground">{role}</p> : null}
    </div>
  );
}

export function OverviewPage() {
  return (
    <div className="space-y-5">
      <section className="relative overflow-hidden rounded-3xl border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 size-72 rounded-full bg-accent/20 blur-3xl"
        />
        <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">
              ARTYVERSE · Thai-first product UI
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Clear, calm, and ready to speak.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              ระบบภาพสำหรับผู้ช่วยสนทนาและการนำเสนอ เน้นอ่านง่ายบนจอใหญ่
              และคงการควบคุมสำคัญไว้ใกล้มือบนมือถือ
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <LiveStatus>กำลังฟัง</LiveStatus>
            <AudioWaveform className="mx-1" />
            <Button>ส่งคำถาม</Button>
          </div>
        </div>
      </section>

      <div className="grid gap-5 xl:grid-cols-[1.1fr_.9fr]">
        <section className="space-y-4 rounded-2xl border bg-card p-5 text-card-foreground sm:p-6">
          <div>
            <h2 className="font-semibold">Core palette</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              สีหลักสามบทบาทที่ใช้ซ้ำตลอดทั้งผลิตภัณฑ์
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {CORE_SWATCHES.map((swatch) => <Swatch key={swatch.name} {...swatch} />)}
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border bg-card p-5 text-card-foreground sm:p-6">
          <div>
            <h2 className="font-semibold">Thai-first typography</h2>
            <p className="mt-1 text-sm text-muted-foreground">IBM Plex Sans Thai + Space Grotesk</p>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-semibold">เราควรเริ่มจากจุดไหน?</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              ประโยคภาษาไทยอ่านสบาย และยังทำงานร่วมกับคำศัพท์ทางเทคนิคภาษาอังกฤษ
            </p>
            <p className="font-mono text-xs tracking-wide text-primary">Q12 · 00:24 · 1.5x</p>
          </div>
        </section>
      </div>

      <section className="rounded-2xl border bg-card p-5 text-card-foreground sm:p-6">
        <div className="mb-4">
          <h2 className="font-semibold">Component snapshot</h2>
          <p className="mt-1 text-sm text-muted-foreground">ตัวอย่างองค์ประกอบจากหน้าผู้ช่วยจริง</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <div>
                <CardTitle>Full Speaker Script</CardTitle>
                <CardDescription className="mt-1">บทพูดสำหรับคำถามปัจจุบัน</CardDescription>
              </div>
              <Badge>Q12</Badge>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed">
              เริ่มใช้งานเป็นระยะ เพื่อให้ทีมปรับตัวและตรวจสอบปัญหาได้ก่อนขยายผล
            </CardContent>
            <CardFooter className="justify-between">
              <span className="text-xs text-muted-foreground">มีคำถามใหม่ 1 ข้อ</span>
              <Button size="sm" variant="lime">เปิดคำถาม</Button>
            </CardFooter>
          </Card>
          <Card className="bg-secondary/40">
            <CardHeader>
              <CardTitle>Reading preferences</CardTitle>
              <CardDescription>การตั้งค่าแบบย่อที่ใช้ในแท็บเล็ตและมือถือ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="overview-auto-scroll">เลื่อนอัตโนมัติ</Label>
                <Switch id="overview-auto-scroll" defaultChecked />
              </div>
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="overview-size">ขนาดตัวอักษร</Label>
                <Input id="overview-size" className="h-9 w-24" defaultValue="20 px" readOnly />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="rounded-2xl border bg-card p-5 sm:p-6">
        <h2 className="font-semibold">หลักการของระบบ</h2>
        <div className="mt-4">
          <Guidelines
            items={[
              { kind: 'do', text: 'ใช้สีชมพูเข้มกับการกระทำหลัก และสีไลม์กับสถานะสดหรือการยืนยัน' },
              { kind: 'do', text: 'รักษาพื้นที่ว่าง เส้นขอบโทนเย็น และเงาเบาเพื่อให้บทพูดเด่น' },
              { kind: 'do', text: 'ใช้ IBM Plex Sans Thai สำหรับข้อความไทย และ Space Grotesk กับตัวเลขหรือป้ายสั้น' },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export function BrandPage() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
      <Card className="flex min-h-64 flex-col justify-between overflow-hidden bg-white p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <img
            src={`${import.meta.env.BASE_URL}artyverse-mark.svg`}
            alt=""
            className="size-12 object-contain"
          />
          <div>
            <p className="font-mono text-lg font-bold tracking-tight text-[#18203b]">
              ARTYVERSE <span className="text-primary">X</span>
            </p>
            <p className="text-xs font-medium tracking-[.08em] text-[#4d5875]">AI ASSISTANT</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-[#18203b]">Brand mark</h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#56617b]">
            สัญลักษณ์มุมแหลมสีชมพูจับคู่กับชิ้นสีไลม์ ใช้คู่กับ wordmark
            และรักษาพื้นที่ว่างรอบเครื่องหมายให้ชัดเจน
          </p>
        </div>
      </Card>
      <div className="space-y-5">
        <Card>
          <CardHeader>
            <CardTitle>Color signature</CardTitle>
            <CardDescription>สองสีที่ทำให้แบรนด์จดจำได้ทันที</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Swatch name="Pink" className="bg-[#ed1685] text-white" />
            <Swatch name="Lime" className="bg-[#c4ef22] text-[#243000]" />
          </CardContent>
        </Card>
        <Card className="p-5">
          <Guidelines
            items={[
              { kind: 'do', text: 'วางเครื่องหมายคู่กับ wordmark ในแนวนอนเมื่อมีพื้นที่' },
              { kind: 'do', text: 'ใช้เครื่องหมายสีบนพื้นขาวหรือพื้นโทนอ่อน' },
              { kind: 'dont', text: 'อย่าใช้สีไลม์เป็นสีข้อความขนาดเล็กบนพื้นขาว' },
            ]}
          />
        </Card>
      </div>
    </div>
  );
}

export function ColorsPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-4 rounded-2xl border bg-card p-5 text-card-foreground sm:p-6">
        <div>
          <h2 className="font-semibold">Brand colors</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            บทบาทหลัก: สีชมพูเข้มสำหรับ action, โทนเย็นสำหรับพื้นรอง และไลม์สำหรับสถานะสด
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {CORE_SWATCHES.map((swatch) => <Swatch key={swatch.name} {...swatch} />)}
        </div>
      </section>
      <section className="space-y-4 rounded-2xl border bg-card p-5 text-card-foreground sm:p-6">
        <div>
          <h2 className="font-semibold">Surface and semantic roles</h2>
          <p className="mt-1 text-sm text-muted-foreground">ใช้ token ตามหน้าที่ ไม่เลือกสีจากชื่อหรือความชอบส่วนตัว</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SUPPORTING_SWATCHES.map((swatch) => <Swatch key={swatch.name} {...swatch} />)}
        </div>
      </section>
      <section className="rounded-2xl border bg-card p-5 text-card-foreground sm:p-6">
        <h2 className="font-semibold">Theme mapping</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Light mode สกัดจากหน้าจอจริง ส่วน dark mode เป็นชุดสีที่ derive เพิ่ม
          เพราะแอปต้นทางไม่มี dark theme
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border bg-[#f7f9fc] p-4 text-[#1d2749]">
            <p className="text-xs font-semibold uppercase tracking-wide">Light · source-mapped</p>
            <div className="mt-3 flex gap-2"><i className="size-7 rounded-full bg-[#d90e73]" /><i className="size-7 rounded-full bg-[#c4ef22]" /></div>
          </div>
          <div className="rounded-xl border border-[#34374b] bg-[#151625] p-4 text-[#f5f7fc]">
            <p className="text-xs font-semibold uppercase tracking-wide">Dark · derived</p>
            <div className="mt-3 flex gap-2"><i className="size-7 rounded-full bg-[#ff4ea5]" /><i className="size-7 rounded-full bg-[#c8f126]" /></div>
          </div>
        </div>
      </section>
      <Guidelines items={[
        { kind: 'do', text: 'ใช้สีหลักตามหน้าที่: primary สำหรับ action และ accent สำหรับ live state หรือยืนยัน' },
        { kind: 'dont', text: 'อย่าใช้สีไลม์กับข้อความขนาดเล็กบนพื้นขาว' },
      ]} />
    </div>
  );
}

export function FontsPage() {
  return (
    <div className="space-y-6 rounded-2xl border bg-card p-5 text-card-foreground sm:p-7">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary">IBM Plex Sans Thai</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          อ่านไทยได้ต่อเนื่อง
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          ออกแบบลำดับข้อมูลให้เริ่มจากคำถาม ตามด้วยบทพูด และค่อยลดระดับไปยังคำอธิบาย
        </p>
      </section>
      <section className="space-y-3 border-t border-border pt-6">
        <h3 className="font-semibold">Type scale</h3>
        {TYPE_SCALE.map((entry) => (
          <div key={entry.label} className="grid gap-2 border-b border-border/70 py-3 sm:grid-cols-[96px_1fr]">
            <span className="pt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">{entry.label}</span>
            <p className={entry.className}>
              {entry.label === 'Caption' ? 'Q12 · 00:24 · 1.5x' : 'ตัวอย่างลำดับภาษาไทยและ English'}
            </p>
          </div>
        ))}
      </section>
      <section className="rounded-xl bg-secondary/60 p-4">
        <p className="font-mono text-lg font-semibold tracking-tight">Space Grotesk · 0123456789 · Q12 · 1.5x</p>
        <p className="mt-2 text-xs text-muted-foreground">ใช้กับตัวเลข เวลา รหัสคำถาม และป้ายภาษาอังกฤษแบบสั้น</p>
      </section>
    </div>
  );
}

export function LayoutPage() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="rounded-2xl border bg-card p-5 text-card-foreground sm:p-6">
        <h2 className="font-semibold">Spacing rhythm</h2>
        <p className="mt-1 text-sm text-muted-foreground">ฐาน 4 px · ใช้ช่องว่างเล็กกับ controls และเว้นระยะมากขึ้นระหว่างกลุ่ม</p>
        <div className="mt-6 space-y-4">
          {SPACING_SCALE.map((space) => (
            <div key={space.label} className="flex items-center gap-4">
              <span className="w-8 font-mono text-xs text-muted-foreground">{space.label}</span>
              <div className={`h-3 rounded-full bg-primary ${space.className}`} />
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-2xl border bg-card p-5 text-card-foreground sm:p-6">
        <h2 className="font-semibold">Radius and elevation</h2>
        <p className="mt-1 text-sm text-muted-foreground">Base radius 0.85 rem · thin cool borders · soft shadows</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            { label: 'Control', className: 'rounded-lg' },
            { label: 'Card', className: 'rounded-2xl' },
            { label: 'Sheet', className: 'rounded-3xl' },
            { label: 'Pill', className: 'rounded-full' },
          ].map((radius) => (
            <div key={radius.label} className={`flex h-20 items-end border border-border bg-secondary p-3 ${radius.className}`}>
              <span className="text-xs font-medium">{radius.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-2xl border bg-card p-5 text-card-foreground sm:p-6 lg:col-span-2">
        <h2 className="font-semibold">Responsive layout</h2>
        <p className="mt-1 text-sm text-muted-foreground">The source uses one adaptable conversation surface.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            ['Desktop', 'กว้างเต็มที่ · settings เป็นแผงข้าง'],
            ['Tablet', 'บทพูดอยู่ซ้าย · ปรับการอ่านอยู่ขวา'],
            ['Mobile', 'composer ติดด้านล่าง · settings เป็น bottom sheet'],
          ].map(([name, description]) => (
            <div key={name} className="rounded-xl border border-border bg-secondary/60 p-4">
              <p className="text-sm font-semibold">{name}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-2xl border bg-card p-5 text-card-foreground sm:p-6 lg:col-span-2">
        <Guidelines items={[
          { kind: 'do', text: 'รักษาแถบเขียนคำถามให้อยู่ใกล้ขอบล่างของพื้นที่ใช้งาน' },
          { kind: 'do', text: 'คงการควบคุมหลักให้เห็นได้บนแท็บเล็ตและมือถือ' },
          { kind: 'dont', text: 'อย่าบีบ settings panel ให้เล็กบนมือถือ; เปลี่ยนเป็น bottom sheet' },
        ]} />
      </section>
    </div>
  );
}
