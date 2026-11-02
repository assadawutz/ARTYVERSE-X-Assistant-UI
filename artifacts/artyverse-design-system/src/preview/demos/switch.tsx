import { useState } from 'react';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';

export function SwitchDemo() {
  const [autoScroll, setAutoScroll] = useState(true);
  const [highlight, setHighlight] = useState(true);

  return (
    <div className="max-w-xl rounded-2xl border bg-card p-5 sm:p-6">
      <h3 className="font-semibold">ปรับการอ่าน</h3>
      <div className="mt-4 divide-y divide-border">
        <div className="flex items-center justify-between gap-6 py-4">
          <div>
            <Label htmlFor="switch-auto-scroll">เลื่อนอัตโนมัติ</Label>
            <p className="mt-1 text-xs text-muted-foreground">เลื่อนไปยังบทพูดที่กำลังอ่าน</p>
          </div>
          <Switch id="switch-auto-scroll" checked={autoScroll} onCheckedChange={setAutoScroll} />
        </div>
        <div className="flex items-center justify-between gap-6 py-4">
          <div>
            <Label htmlFor="switch-highlight">ไฮไลต์ประโยค</Label>
            <p className="mt-1 text-xs text-muted-foreground">เน้นประโยคปัจจุบันในบทพูด</p>
          </div>
          <Switch id="switch-highlight" checked={highlight} onCheckedChange={setHighlight} />
        </div>
        <div className="flex items-center justify-between gap-6 py-4">
          <Label htmlFor="switch-disabled" className="text-muted-foreground">ไม่พร้อมใช้งาน</Label>
          <Switch id="switch-disabled" disabled />
        </div>
      </div>
    </div>
  );
}
