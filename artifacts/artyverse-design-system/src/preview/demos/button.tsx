import { ArrowUpRight, Check, Mic, Pause, Send } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Row } from '../parts';

export function ButtonDemo() {
  return (
    <div className="space-y-6">
      <section className="space-y-5 rounded-2xl border bg-card p-5 text-card-foreground sm:p-6">
        <Row label="Primary actions">
          <Button><Send /> ส่งคำถาม</Button>
          <Button variant="lime"><Check /> เปิดคำถาม</Button>
          <Button variant="outline">ยกเลิก</Button>
          <Button variant="ghost">ดูเพิ่มเติม</Button>
          <Button variant="link">อ่านต่อ</Button>
        </Row>
        <Row label="Compact and icon actions">
          <Button size="sm">ปรับการอ่าน</Button>
          <Button size="lg">เริ่มนำเสนอ</Button>
          <Button size="icon" variant="outline" aria-label="ควบคุมไมโครโฟน"><Mic /></Button>
          <Button size="icon" variant="outline" aria-label="พักการอ่าน"><Pause /></Button>
          <Button size="icon" variant="lime" aria-label="เปิด"><ArrowUpRight /></Button>
        </Row>
      </section>
      <section className="space-y-4 rounded-2xl border bg-card p-5 text-card-foreground sm:p-6">
        <h3 className="font-semibold">States</h3>
        <Row>
          <Button disabled>ปิดใช้งาน</Button>
          <Button loading>กำลังส่ง</Button>
          <Button variant="outline" aria-pressed="true">เลือกแล้ว</Button>
        </Row>
        <p className="text-sm text-muted-foreground">
          ปุ่มหลักใช้สีชมพูเข้ม ส่วนการดำเนินการเชิงบวกใช้พื้นสีไลม์
        </p>
      </section>
    </div>
  );
}
