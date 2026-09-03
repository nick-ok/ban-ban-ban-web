# Ban Ban Ban

## Структура

```
├── 📜 README.md
├── 📄 index.html
├── 🗂️ package-lock.json
├── 🗂️ package.json
├── 📁 public
│ ├── 🖼️ apple-touch-icon.png
│ ├── 🖼️ favicon-16x16.png
│ ├── 🖼️ favicon.png
│ ├── 📁 images
│ │ ├── 🖼️ ban-stamp.png
│ │ ├── 🖼️ hoa.webp
├── 📁 src
│ ├── 🎨 App.module.css
│ ├── 🟦 App.tsx
│ ├── 📁 app
│ │ ├── 📁 providers
│ │ │ ├── 🟦 I18nProvider.tsx
│ │ │ ├── 🟦 index.tsx
│ │ ├── 📁 styles
│ │ │ ├── 🎨 index.css
│ │ │ ├── 🎨 reset.css
│ │ │ ├── 🎨 tokens.css
│ ├── 📁 entities
│ │ ├── 📁 location
│ │ │ ├── 📁 config
│ │ │ │ ├── 🟨 locations.ts
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 lib
│ │ │ │ ├── 🟨 get-location-stats.ts
│ │ │ │ ├── 🟨 get-next-location.ts
│ │ │ │ ├── 🟨 is-location-completed.ts
│ │ │ ├── 📁 model
│ │ │ │ ├── 🟨 types.ts
│ │ ├── 📁 message
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 model
│ │ │ │ ├── 🟨 types.ts
│ │ ├── 📁 navigation
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 model
│ │ │ │ ├── 🟨 store.ts
│ │ ├── 📁 player-progress
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 model
│ │ │ │ ├── 🟨 store.ts
│ │ │ │ ├── 🟨 types.ts
│ │ ├── 📁 review
│ │ │ ├── 📁 model
│ │ │ │ ├── 🟨 types.ts
│ │ ├── 📁 scenario
│ │ │ ├── 📁 config
│ │ │ │ ├── 🟨 constants.ts
│ │ │ │ ├── 🟨 scenarios.ts
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 lib
│ │ │ │ ├── 🟨 get-scenario-by-id.ts
│ │ │ │ ├── 🟨 get-scenarios-by-location.ts
│ │ │ │ ├── 🟨 is-scenario-unlocked.ts
│ │ │ ├── 📁 model
│ │ │ │ ├── 🟨 types.ts
│ ├── 📁 features
│ │ ├── 📁 i18n
│ │ │ ├── 📁 @types
│ │ │ │ ├── 🟨 i18next.d.ts
│ │ │ │ ├── 🟨 resources.ts
│ │ │ ├── 🟨 config.ts
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 locales
│ │ │ │ ├── 🗂️ en.json
│ │ │ │ ├── 🗂️ ru.json
│ ├── 🟦 main.tsx
│ ├── 📁 scenes
│ │ ├── 📁 game
│ │ │ ├── 🟨 index.ts
│ │ ├── 📁 lobby
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 ui
│ │ │ │ ├── 🎨 LobbyScene.module.css
│ │ │ │ ├── 🟦 LobbyScene.tsx
│ │ ├── 📁 lock
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 ui
│ │ │ │ ├── 🎨 LockScene.module.css
│ │ │ │ ├── 🟦 LockScene.tsx
│ │ ├── 📁 preview
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 ui
│ │ │ │ ├── 🎨 PreviewScene.module.css
│ │ │ │ ├── 🟦 PreviewScene.tsx
│ │ │ │ ├── 🎨 PreviewSceneSplash.module.css
│ │ │ │ ├── 🟦 PreviewSceneSplash.tsx
│ ├── 📁 shared
│ │ ├── 📁 assets
│ │ │ ├── 📁 icons
│ │ │ │ ├── 🖼️ hoa.svg
│ │ │ │ ├── 🖼️ lock.svg
│ │ │ │ ├── 🖼️ spiritual.svg
│ │ ├── 📁 lib
│ │ │ ├── 🟨 with-persist.ts
│ │ ├── 📁 types
│ │ │ ├── 🟨 svg.d.ts
│ │ ├── 📁 ui
│ │ │ ├── 📁 Icon
│ │ │ │ ├── 🟦 Icon.tsx
│ │ │ │ ├── 🟨 iconsMap.ts
│ │ │ │ ├── 🟨 types.ts
│ │ │ ├── 📁 button
│ │ │ │ ├── 🎨 Button.module.css
│ │ │ │ ├── 🟦 Button.tsx
│ │ │ ├── 📁 glass-surface
│ │ │ │ ├── 🎨 GlassSurface.module.css
│ │ │ │ ├── 🟦 GlassSurface.tsx
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 progress-bar
│ │ │ │ ├── 🎨 ProgressBar.module.css
│ │ │ │ ├── 🟦 ProgressBar.tsx
│ ├── 📁 widgets
│ │ ├── 📁 app-grid
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 ui
│ │ │ │ ├── 🎨 AppGrid.module.css
│ │ │ │ ├── 🟦 AppGrid.tsx
│ │ │ │ ├── 🎨 AppGridItem.module.css
│ │ │ │ ├── 🟦 AppGridItem.tsx
│ │ ├── 📁 blobs-fx
│ │ │ ├── 📁 ui
│ │ │ │ ├── 🎨 BlobsFX.module.css
│ │ │ │ ├── 🟦 BlobsFX.tsx
│ │ ├── 📁 phone-frame
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 ui
│ │ │ │ ├── 🎨 PhoneFrame.module.css
│ │ │ │ ├── 🟦 PhoneFrame.tsx
│ │ ├── 📁 preview-content
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 ui
│ │ │ │ ├── 🎨 PreviewContent.module.css
│ │ │ │ ├── 🟦 PreviewContent.tsx
│ │ ├── 📁 scan-fx
│ │ │ ├── 🟨 index.ts
│ │ │ ├── 📁 ui
│ │ │ │ ├── 🎨 ScanFX.module.css
│ │ │ │ ├── 🟦 ScanFX.tsx
├── 🗂️ tsconfig.app.json
├── 🗂️ tsconfig.json
├── 🗂️ tsconfig.node.json
├── 🟨 vite.config.ts

```
