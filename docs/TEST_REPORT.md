# Verification report — 2026-10-31

This report describes the updated v17 source project. It does not claim Android device certification, a signed release bundle, or Play Store approval.

## Completed project changes

- Donkey: bots choose the smallest available card when leading or cutting, and stay under the current winning card when following where possible. A player can once per deal privately take the next active player's full hand, then continue their turn and play normally. The interface reveals the card faces only to the player who took the hand.
- Callbreak: when void in the led suit, a player must trump if nobody has trumped yet and they hold trump. If a trump is already winning, overtrump when possible; when unable to overtrump, any card is legal.
- Cambrio: the face-down memory flow and card powers described in the project request are implemented.
- Ghulam Chor: no gameplay changes were made in this pass.
- The refreshed game hub, shared history navigation, landscape-oriented Android configuration, and project UI updates are included.

## Automated checks run

- TypeScript (`tsc --noEmit`): passed.
- Production web build (Vite): passed; 112 modules transformed.
- Complete Vitest suite: **330 tests passed across 25 files**.
- UI full-match tests passed for bots and pass-and-play across all 15 games, including Donkey, Ghulam Chor, Cambrio, and 13-card Rummy.
- Room protocol tests passed for all 15 games; these simulate the protocol locally and do not prove an externally reachable multiplayer service is always online.
- Game-engine suites include seeded simulations across configured options. They are broad regression checks, not proof of every possible play sequence or rule interpretation.

## Android and Play Store status

- Android project scaffold is included and configured for landscape sensor orientation, compile SDK 36, and target SDK 36.
- Android Studio, Java, Gradle, and the Android SDK are not installed in the available build environment. A native Gradle build, device install, Play App Bundle signing, and Play Store test-track upload were not performed.
- Capacitor asset synchronization was not run, so use `npm run android:sync` in an Android-ready environment before opening/building the Android project.
- The Android operating system owns its immersive-mode exit hint. The app contains no custom “drag from top / press back” notice, but app code cannot suppress an OS-owned transient hint.
- Sign-in, globally unique usernames, friend requests, synchronized profiles, push invitations, and cloud recovery are not provided. Profile and game data stay on the device. Room-code multiplayer uses the existing PeerJS signaling path and requires internet access.

## Play Store prerequisites

- Google Play's current policy requires new apps and updates to target API 36 from August 31, 2026; this project scaffold targets 36.
- New personal developer accounts created after November 13, 2023 must run a closed test with at least 12 opted-in testers for 14 consecutive days before applying for production access.
- A full distribution Play Console account has a one-time US$25 registration fee. Android Studio and local app building are free; the Play Console fee is not.
- Before submission: install and test on real phones, finish app identity and signing, prepare screenshots/store listing, publish hosted privacy/terms pages, complete content/data-safety declarations, and check current Play Console policy forms. These steps remain with the publisher.

## Test environment

Tests and the production web build ran against the included source using the project dependencies available in the workspace. The Windows environment required a temporary Node realpath workaround because dependencies are shared through a parent folder; that helper is verification-only and is excluded from the delivery ZIP.
