'use client';

export default function Lobby() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#16213e] text-white">
      <h2 className="text-3xl font-bold mb-6">ロビー</h2>
      <p className="mb-4">ここでゲームを作成・参加できます（UIは今後拡張）</p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-[#e94560] rounded hover:bg-[#ff6f91] transition">ゲーム作成</button>
        <button className="px-6 py-3 bg-[#0f3460] rounded hover:bg-[#16213e] transition">ゲーム参加</button>
      </div>
    </main>
  );
}
