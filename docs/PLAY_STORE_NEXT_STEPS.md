# Play Store next steps

This project contains a Capacitor Android scaffold. The current environment did not have Android Studio, Java, Gradle, or the Android SDK, so the Android app package has not been built or installed on a device.

## Free local build and phone testing

1. Install the current Android Studio and its Android SDK on a computer. The Android Studio download and local debug build do not require a paid build service.
2. Extract this project ZIP and install its Node.js dependencies using the included `package.json`.
3. Run `npm run android:sync` to build the web app and copy its assets into the Android project.
4. Run `npm run android:open`, select an emulator or connect an Android phone with developer mode enabled, and build/run the app from Android Studio.
5. Check landscape orientation, immersive mode, every game and variant, offline behavior, invite links, and device sizes on real hardware.
6. Choose and verify the final Android application ID before publishing. The scaffold currently uses `com.cardclubarcade.app`; change it only if you control a suitable identity, and keep it fixed after the first Play upload.

## Play Console release

1. Create a developer account and verify the publisher identity. Google currently lists a one-time US$25 account registration fee for full Play distribution.
2. Prepare a signed Android App Bundle (AAB), store listing, feature graphic, phone/tablet screenshots, app content declarations, age/content rating, privacy policy URL, and data safety responses.
3. Upload the bundle to an internal test first. Fix crashes and device-specific layout issues.
4. If the account is a new personal account created after November 13, 2023, Google requires a closed test with at least 12 testers continuously opted in for 14 days before applying for production access.
5. Apply for production access, complete Play review requirements, and publish only after the privacy, policy, signing, and device checks are ready.

## Costs and limits

- Android Studio, the Android SDK, local debug builds, and internal device installation are free.
- Google Play full-distribution developer registration is not free: the one-time registration fee is currently US$25. Fees/tax/currency handling can vary by region.
- A signed release requires a protected signing key and a developer account. Do not share the signing key or its passwords.
- This app has no hosted player account database. A unique local player ID does not create globally unique usernames or cross-device friend requests. Online room invites use the app's existing PeerJS signaling path; test that service from your intended regions and networks.
- Privacy policy and terms drafts in `docs/` are scaffolding, not legal approval. Publish accurate policies and complete Data safety based on the final app behavior before submission.

## Official references

- [Target API level requirements](https://support.google.com/googleplay/android-developer/answer/11926878?hl=en-EN)
- [Testing requirements for new personal developer accounts](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en)
- [Play Console account setup and fee](https://support.google.com/googleplay/android-developer/answer/6112435?hl=en-GS)
