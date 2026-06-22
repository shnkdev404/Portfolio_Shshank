import Link from "next/link";
import { fabItems } from "@/lib/data";

export default function FloatingNav() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-2 z-50">
      {fabItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`floating-btn h-10 w-10 ${item.color} rounded-full flex items-center justify-end pr-3 overflow-hidden cursor-pointer shadow-lg no-underline`}
        >
          <span className="fab-label text-black text-xs font-semibold">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
