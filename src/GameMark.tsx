import type { ReactNode } from 'react';

/** Clean, flat card-table symbols, matched to each game's name and drawn as scalable SVG. */
const INK = '#5a421f', RED = '#a63c3c', GOLD = '#9a6c21', PAPER = '#fffaf0';
const card = (x: number, y: number, w = 24, h = 32, rot = 0) => <rect x={x} y={y} width={w} height={h} rx="4" fill={PAPER} stroke={INK} strokeWidth="1.8" transform={rot ? `rotate(${rot} ${x + w / 2} ${y + h / 2})` : undefined} />;
const ART: Record<string, ReactNode> = {
  callbreak: <path d="M24 4C20 12 10 20 10 28a8 8 0 0 0 14 5 8 8 0 0 0 14-5C38 20 28 12 24 4Z" fill={INK} />,
  hearts: <path d="M24 41 8 25C-1 12 15 5 24 17 33 5 49 12 40 25Z" fill={RED} />,
  courtpiece: <path d="M24 5 43 24 24 43 5 24Z" fill={INK} />,
  dehla: <>{card(10, 6, 28, 36)}<text x="24" y="31" textAnchor="middle" fontSize="17" fontWeight="800" fill={RED}>10</text></>,
  '325': <>{card(3, 13, 19, 26, -13)}{card(14, 8, 20, 31)}{card(26, 13, 19, 26, 13)}<text x="13" y="30" textAnchor="middle" fontSize="11" fontWeight="800" fill={INK}>3</text><text x="24" y="29" textAnchor="middle" fontSize="13" fontWeight="800" fill={RED}>2</text><text x="36" y="30" textAnchor="middle" fontSize="11" fontWeight="800" fill={INK}>5</text></>,
  confidence: <><path d="M24 7c-2 5-8 5-8 11a8 8 0 0 0 16 0c0-6-6-6-8-11Z" fill={INK} /><path d="M24 23c-2 5-8 5-8 11a8 8 0 0 0 16 0c0-6-6-6-8-11Z" fill="none" stroke={INK} strokeWidth="2" /></>,
  bluff: <><path d="M5 22 24 9l19 13-19 14Z" fill="none" stroke={INK} strokeWidth="2.4" strokeLinejoin="round"/><circle cx="18" cy="22" r="2" fill={INK}/><circle cx="30" cy="22" r="2" fill={INK}/><path d="M8 30 24 41l16-11" fill="none" stroke={RED} strokeWidth="2" strokeLinejoin="round"/></>,
  seven: <>{card(10, 6, 28, 36)}<text x="24" y="34" textAnchor="middle" fontSize="26" fontWeight="800" fill={INK}>7</text></>,
  ghulam: <>{card(10, 6, 28, 36)}<path d="m15 16 4 4 5-8 5 8 4-4v7H15Z" fill={GOLD}/><text x="24" y="38" textAnchor="middle" fontSize="15" fontWeight="800" fill={INK}>J</text></>,
  donkey: <><path d="M13 13 9 5l10 5 5-3 5 3 10-5-4 8" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round"/><path d="M13 18c0-4 5-7 11-7s11 3 11 7v9c0 7-5 12-11 12s-11-5-11-12Z" fill="none" stroke={INK} strokeWidth="2.5"/><path d="M18 24h.1M30 24h.1M20 32q4 3 8 0" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round"/></>,
  president: <><path d="m6 34-2-21 11 9 9-15 9 15 11-9-2 21Z" fill="none" stroke={GOLD} strokeWidth="3" strokeLinejoin="round"/><path d="M8 38h32" stroke={INK} strokeWidth="3" strokeLinecap="round"/></>,
  spoons: <g transform="rotate(38 24 24)"><ellipse cx="24" cy="13" rx="8" ry="10" fill="none" stroke={INK} strokeWidth="3"/><path d="M24 23v21" stroke={INK} strokeWidth="4" strokeLinecap="round"/></g>,
  yaniv: <>{card(7, 8, 24, 32, -12)}{card(18, 8, 24, 32, 12)}<path d="M18 25h12m-6-6v12" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/></>,
  cabo: <><path d="M4 24c6-9 13-13 20-13s14 4 20 13c-6 9-13 13-20 13S10 33 4 24Z" fill="none" stroke={INK} strokeWidth="2.5"/><circle cx="24" cy="24" r="7" fill="none" stroke={RED} strokeWidth="2.5"/><circle cx="24" cy="24" r="2" fill={INK}/></>,
  rummy: <>{card(4, 13, 20, 28, -16)}{card(14, 8, 20, 31)}{card(25, 13, 19, 28, 16)}<path d="M18 23h.1M24 22h.1M30 23h.1" stroke={INK} strokeWidth="4" strokeLinecap="round"/></>,
};

export function GameMark({ gameId, className = '' }: { gameId: string; className?: string }) {
  return <span className={`game-icon game-mark art-${gameId} ${className}`} aria-hidden="true"><svg viewBox="0 0 48 48" focusable="false">{ART[gameId] ?? ART.callbreak}</svg></span>;
}
