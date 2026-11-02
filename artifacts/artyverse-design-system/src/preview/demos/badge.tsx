import { Badge } from '../../components/ui/badge';
import { AudioWaveform, LiveStatus } from '../../components/ui/status';

export function BadgeDemo() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="space-y-5 rounded-2xl border bg-card p-5 sm:p-6">
        <div>
          <h3 className="font-semibold">สถานะการฟัง</h3>
          <p className="mt-1 text-sm text-muted-foreground">ไลม์แสดงสถานะที่กำลังทำงาน</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <LiveStatus>กำลังฟัง</LiveStatus>
          <LiveStatus active={false}>พักการฟัง</LiveStatus>
          <AudioWaveform />
          <AudioWaveform active={false} />
        </div>
      </section>
      <section className="space-y-5 rounded-2xl border bg-card p-5 sm:p-6">
        <div>
          <h3 className="font-semibold">ป้ายกำกับ</h3>
          <p className="mt-1 text-sm text-muted-foreground">ใช้สั้น กระชับ และแยกความหมายด้วยสี</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="pink">Q12</Badge>
          <Badge variant="lime">เปิดคำถาม</Badge>
          <Badge variant="neutral">มีคำถามใหม่ 2 ข้อ</Badge>
          <Badge variant="outline">ถอดเสียง</Badge>
          <Badge variant="danger">ไม่พร้อมใช้งาน</Badge>
        </div>
      </section>
    </div>
  );
}
