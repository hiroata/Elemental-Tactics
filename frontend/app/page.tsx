import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a2e] text-white">
      <h1 className="text-4xl font-bold mb-8">エレメンタルタクティクス</h1>
      <div className="space-x-4">
        <Link href="/lobby" className="px-6 py-3 bg-[#e94560] rounded hover:bg-[#ff6f91] transition">ロビーへ</Link>
        <Link href="/tutorial" className="px-6 py-3 bg-[#0f3460] rounded hover:bg-[#16213e] transition">チュートリアル</Link>
      </div>
    </main>
  );
}
