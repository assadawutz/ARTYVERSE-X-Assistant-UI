import { Paperclip, Send } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input, RangeControl } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';

export function InputDemo() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="space-y-5 rounded-2xl border bg-card p-5 sm:p-6">
        <div className="space-y-2">
          <Label htmlFor="assistant-question">คำถาม</Label>
          <Textarea id="assistant-question" defaultValue="ช่วยสรุปประเด็นสำคัญให้หน่อย" />
          <p className="text-xs text-muted-foreground">Enter เพื่อส่ง · Shift + Enter เพื่อขึ้นบรรทัดใหม่</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="assistant-context">บริบทเพิ่มเติม</Label>
          <Input id="assistant-context" placeholder="พิมพ์บริบทสั้น ๆ..." />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm"><Paperclip /> แนบไฟล์</Button>
          <Button size="sm"><Send /> ส่งคำถาม</Button>
        </div>
      </section>
      <section className="space-y-6 rounded-2xl border bg-card p-5 sm:p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <Label htmlFor="font-range">ขนาดตัวอักษร</Label>
            <span className="font-mono text-xs text-muted-foreground">20 px</span>
          </div>
          <RangeControl id="font-range" min="16" max="24" step="2" defaultValue="20" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="source-select">แหล่งที่มา</Label>
          <select id="source-select" className="h-10 w-full rounded-xl border border-input bg-card px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <option>จากเสียงสนทนา</option>
            <option>จากไมโครโฟน</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="file-input">ไฟล์ข้อความ</Label>
          <Input id="file-input" type="file" accept=".txt,.md,.csv,.json" />
        </div>
      </section>
    </div>
  );
}
