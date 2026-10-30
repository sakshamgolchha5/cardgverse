# Card Club Arcade

Card Club Arcade is a landscape-oriented Android game project and installable web app with 15 card games. This refreshed project includes the requested Donkey bot/card-taking change, the Callbreak trump rule, and Cambrio memory flow; Ghulam Chor gameplay remains unchanged.

## Local development

1. Install a current Node.js LTS release.
2. Run `npm ci`.
3. Run `npm run dev` for local development, `npm run typecheck` for TypeScript checks, `npm test` for automated tests, or `npm run build` for a production web build.

The browser app uses root-relative URLs and `vercel.json` provides an SPA fallback. Deploy from the project root with Vercel's Vite build command `npm run build` and output directory `dist`.

## Android build

The project includes a Capacitor Android scaffold configured for landscape sensor orientation. Before running it, install Android Studio and its Android SDK, install Node.js dependencies with `npm ci`, then run `npm run android:sync` and `npm run android:open`. Check `docs/PLAY_STORE_NEXT_STEPS.md` for phone testing and Play Store steps.

The Android scaffold targets API 36, but a native build, signed App Bundle, and device install were not verified in this environment. Android owns its transient immersive-mode exit hint; the app has no custom exit-hint message and cannot suppress an OS-owned hint.

## Play and saved data

- Open the Games library and choose a game, then select its mode and options.
- The compact top row contains Games, Shop, History, Settings and Rules. Friends is the only dropdown; it includes saved friends and players from the last 10 match records.
- An Invite action creates a room; share the generated invite link or room code with the other player. Opening a shared link shows an accept/decline prompt. There is no push delivery or live online status without a hosted social service.
- Guest profile, display name, avatar, device-generated player ID, saved invite names, recent-match records, cosmetics, preferences and play coins are stored in this browser on this device. They do not sync to other devices. A device-generated ID is not a globally reserved unique username.
- Play coins are virtual points used for cosmetic unlocks. They have no cash value and are not used to wager on outcomes.
- Room-code games use PeerJS/WebRTC and require internet access. Offline mode caches the app shell and static assets; it does not make online rooms work offline.

See `docs/FEATURE_STATUS.md` for service-dependent limits, `docs/TEST_REPORT.md` for verified checks, and `docs/PLAY_STORE_NEXT_STEPS.md` for the release checklist.
