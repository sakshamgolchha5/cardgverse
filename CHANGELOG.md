# Changelog

## 2026-10-31 — Game rules, bot play, and release verification

- Updated Donkey bot card choices to prefer low cards, follow under the current winner when possible, and cut with the lowest available card when void.
- Added an optional once-per-deal blind transfer of the next active player's whole hand; the player then continues their turn and plays as usual. Ghulam Chor was left unchanged.
- Applied the requested Callbreak trump/overtrump rule and Cambrio memory-game behavior.
- Verified typecheck, Vite production build, and the full suite: 330 tests passed across 25 files.
- Added current Play Store build and testing steps to `docs/PLAY_STORE_NEXT_STEPS.md`.
- Native Android build, device testing, signed AAB, and Play Console upload remain unverified because Android build tools are not installed in this environment.

## 2026-10-24 — Hub navigation and invitation pass

- Replaced prior navigation with a compact labelled top row and persistent Games/back route.
- Made Friends the only navigation dropdown. It lists locally saved invite names and unique human opponents from up to the latest 10 match records, with a cap of 8 names.
- Added invite game selection and shared room invite links with accept/decline choices when opened.
- Removed forced web manifest orientation; installed games may request landscape where browser/OS support permits.
- Kept backend-dependent sign-in, global friends, cloud sync, purchases and account deletion documented as unavailable.

## Earlier source refresh

- Added the game hub, local rewards/profile experience, and 13-card Rummy; see `docs/RUMMY_RULES.md` and `docs/PROJECT_CONTEXT.md`.
