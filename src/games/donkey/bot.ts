import type { Card } from '../../engine/cards';
import type { Level } from '../types';
import { Action, State, legalPlays } from './engine';

export function chooseAction(v: State, seat: number, _level: Level, _rng: () => number): Action {
  const plays = legalPlays(v, seat);
  if (plays.length === 1) return { type: 'play', card: plays[0] };
  const asc = [...plays].sort((a, b) => a.rank - b.rank);
  const play = (card: Card): Action => ({ type: 'play', card });
  if (!v.trick.length) {
    // Lead the lowest card instead of repeatedly forcing high cards through a short suit.
    return play(asc[0]);
  }
  const led = v.trick[0].card.suit, follow = asc.filter(c => c.suit === led);
  if (!follow.length) return play(asc[0]);                          // when void, cut with the smallest available card
  const top = Math.max(...v.trick.filter(t => t.card.suit === led).map(t => t.card.rank)), under = follow.filter(c => c.rank < top);
  return play(under.length ? under[0] : follow[0]);                 // stay under with the smallest possible card
}
