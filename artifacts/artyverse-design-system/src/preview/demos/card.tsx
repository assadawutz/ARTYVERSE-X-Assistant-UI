import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';

export function CardDemo() {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(280px,.65fr)]">
      <Card className="overflow-hidden">
        <CardHeader className="flex-row items-center justify-between gap-3 border-b border-border/70">
          <div>
            <CardTitle>Full Speaker Script</CardTitle>
            <CardDescription className="mt-1">บทพูดสำหรับนำเสนอ</CardDescription>
          </div>
          <Badge variant="pink">Q12</Badge>
        </CardHeader>
        <CardContent className="space-y-4 pt-5 text-sm leading-7">
          <p>
            เริ่มใช้งานเป็นระยะ โดยเลือกงานที่มีขอบเขตชัดเจนมาทดลองก่อน
            เพื่อให้ทีมปรับตัวและตรวจสอบปัญหาได้
          </p>
          <p className="text-muted-foreground">
            เตรียมข้อมูล ทดสอบสิทธิ์ และกำหนดช่องทางแจ้งปัญหาก่อนขยายผล
          </p>
        </CardContent>
        <CardFooter className="justify-between border-t border-border/70 pt-4">
          <span className="text-xs text-muted-foreground">Q13 · มีคำถามใหม่ 1 ข้อ</span>
          <Button size="sm" variant="lime">เปิดคำถาม</Button>
        </CardFooter>
      </Card>
      <div className="space-y-4">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>คำถามปัจจุบัน</CardTitle>
            <Badge variant="outline">Q12</Badge>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed">
            เราควรเริ่มนำระบบใหม่มาใช้งานอย่างไร ให้กระทบงานประจำวันน้อยที่สุด?
          </CardContent>
        </Card>
        <Card className="bg-secondary/60">
          <CardHeader>
            <CardTitle>พื้นผิวการตั้งค่า</CardTitle>
            <CardDescription>
              การ์ดนี้ขยายเป็นแผงข้างบนแท็บเล็ตและชีตด้านล่างบนมือถือ
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            ใช้พื้นขาว เส้นขอบเย็น และเงาเบาเพื่อแยกชั้นเนื้อหา
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
