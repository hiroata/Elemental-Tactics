'use client';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { UnitType } from '../../features/unitTypes';
import { addUnit } from '../../features/unitsSlice';
import { setShopUnits, refreshShop } from '../../features/shopSlice';
import { updateGold } from '../../features/playerSlice';
import { useCallback } from 'react';

export default function Game() {
  const dispatch = useDispatch();
  const shopUnits = useSelector((state: RootState) => state.shop.shopUnits as UnitType[]);
  const units = useSelector((state: RootState) => state.units.units);
  const gold = useSelector((state: RootState) => state.player.gold);

  // ユニット購入処理
  const handleBuyUnit = useCallback((unit: UnitType) => {
    // コスト計算（ティアをコストとする）
    const cost = unit.tier;
    if (gold < cost) return;
    dispatch(addUnit({
      id: `${unit.id}_${Date.now()}`,
      unitTypeId: unit.id,
      attack: unit.attack,
      health: unit.health,
      position: units.length, // 仮: 末尾に配置
      level: 1,
    }));
    dispatch(updateGold(gold - cost));
    dispatch(setShopUnits(shopUnits.filter(u => u.id !== unit.id)));
  }, [dispatch, shopUnits, units.length, gold]);

  // ユニット売却処理
  const handleSellUnit = useCallback((unitId: string, refund: number) => {
    dispatch({ type: 'units/removeUnit', payload: unitId });
    dispatch(updateGold(gold + refund));
  }, [dispatch, gold]);

  // ショップリフレッシュ処理
  const handleRefreshShop = useCallback(() => {
    // 仮実装: unitTypesからランダム5体を選出
    const allUnitTypes = useSelector((state: RootState) => state.unitTypes.unitTypes);
    const shuffled = [...allUnitTypes].sort(() => 0.5 - Math.random());
    dispatch(refreshShop(shuffled.slice(0, 5)));
    dispatch(updateGold(gold - 1));
  }, [dispatch, gold]);

  return (
    <main className="flex flex-col items-center min-h-screen bg-[#0f3460] text-white p-4">
      <h2 className="text-3xl font-bold mb-6">メインゲーム画面</h2>
      <div className="mb-4">ゴールド: <span className="font-bold text-yellow-300">{gold}</span></div>
      <section className="w-full max-w-3xl mb-8">
        <h3 className="text-xl font-semibold mb-2">ショップ</h3>
        <button className="mb-2 px-4 py-1 bg-[#e94560] rounded hover:bg-[#ff6f91] transition text-sm disabled:opacity-50" onClick={handleRefreshShop} disabled={gold < 1}>リフレッシュ(1G)</button>
        <div className="flex gap-4">
          {shopUnits.length === 0 && <div className="text-gray-400">ショップにユニットがありません</div>}
          {shopUnits.map((unit) => {
            const cost = unit.tier;
            return (
              <div key={unit.id} className="bg-[#1a1a2e] rounded p-4 w-40 flex flex-col items-center border border-[#e94560]">
                <div className="w-16 h-16 bg-gray-700 rounded mb-2 flex items-center justify-center">
                  <span className="text-lg font-bold" style={{ color: unit.element === 'FIRE' ? '#FF4500' : unit.element === 'WATER' ? '#1E90FF' : unit.element === 'WIND' ? '#32CD32' : unit.element === 'EARTH' ? '#8B4513' : unit.element === 'LIGHT' ? '#FFD700' : '#800080' }}>{unit.element}</span>
                </div>
                <div className="font-bold mb-1">{unit.name}</div>
                <div className="text-xs mb-1">攻:{unit.attack} 体:{unit.health}</div>
                <div className="text-xs mb-1">ティア:{unit.tier} レア:{unit.rarity}</div>
                <button className="mt-2 px-3 py-1 bg-[#e94560] rounded hover:bg-[#ff6f91] transition text-sm disabled:opacity-50" onClick={() => handleBuyUnit(unit)} disabled={gold < cost}>購入（{cost}G）</button>
              </div>
            );
          })}
        </div>
      </section>
      <section className="w-full max-w-3xl mb-8">
        <h3 className="text-xl font-semibold mb-2">バトルボード（自分の盤面）</h3>
        <div className="flex gap-4 min-h-[100px]">
          {units.length === 0 && <div className="text-gray-400">ユニット未配置</div>}
          {units.map((unit) => (
            <div key={unit.id} className="bg-[#1a1a2e] rounded p-4 w-32 flex flex-col items-center border border-[#FFD700]">
              <div className="w-12 h-12 bg-gray-700 rounded mb-2 flex items-center justify-center">
                <span className="text-lg font-bold" style={{ color: '#FFD700' }}>{unit.unitTypeId}</span>
              </div>
              <div className="text-xs">攻:{unit.attack} 体:{unit.health}</div>
              <div className="text-xs">Lv:{unit.level}</div>
              <div className="text-xs">位置:{unit.position}</div>
              <button className="mt-2 px-2 py-1 bg-[#32CD32] rounded hover:bg-[#4be04b] transition text-xs" onClick={() => handleSellUnit(unit.id, 1)}>売却(+1G)</button>
            </div>
          ))}
        </div>
      </section>
      {/* 今後: ユニット移動や売却、シナジー表示など追加 */}
    </main>
  );
}
