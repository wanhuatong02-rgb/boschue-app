# 博学者 iOS 应用构建指南

## 前置要求

- **macOS 14+** (推荐 macOS 15 Sonoma 或更高)
- **Xcode 15+** (推荐 Xcode 16，支持 iOS 17 - iOS 18)
- **Node.js 18+** (推荐 20 LTS)
- **CocoaPods** (`sudo gem install cocoapods` 或 `brew install cocoapods`)
- **Apple 开发者账号** (免费账号可真机调试，付费账号才能上架 App Store)

---

## 第一步：项目准备

1. 将整个 `boschue-app` 项目文件夹拷贝到 Mac 上
2. 打开终端，进入项目目录：
   ```bash
   cd /path/to/boschue-app
   ```
3. 安装依赖（如果还没装过）：
   ```bash
   npm install
   ```

---

## 第二步：生成 Web 构建产物

```bash
npm run build
```

确认 `dist/` 目录生成成功。

---

## 第三步：添加 iOS 平台

```bash
npx cap add ios
```

这会创建 `ios/` 目录，生成 Xcode 工程。

> 如果之前已经添加过 iOS 平台，跳过此步，直接执行 sync。

---

## 第四步：安装图标与启动页资源

### 方法 A：使用预生成的资源（推荐）

项目的 `resources/ios/` 目录下已经预生成好了所有图标和启动页资源：
- `resources/ios/AppIcon.appiconset/` — 18 个尺寸的应用图标
- `resources/ios/Splash.imageset/` — 3 个尺寸的启动页图片

添加 iOS 平台后，将这两个文件夹拷贝到 Xcode 工程中：

```bash
# 先添加 iOS 平台（如果还没添加）
npx cap add ios

# 拷贝图标资源
cp -R resources/ios/AppIcon.appiconset ios/App/App/Assets.xcassets/
cp -R resources/ios/Splash.imageset ios/App/App/Assets.xcassets/
```

### 方法 B：使用 capacitor-assets 自动生成

确保 `assets/icon.png` 存在（1024×1024 PNG），然后执行：

```bash
npx capacitor-assets generate --ios
```

这会自动生成：
- AppIcon.appiconset（所有尺寸的应用图标）
- Splash.imageset（启动页图片）

---

## 第五步：同步 Web 资源到 iOS 工程

```bash
npx cap sync ios
```

每次修改 Web 代码后都需要重新 build + sync。

---

## 第六步：打开 Xcode 配置

```bash
npx cap open ios
```

这会自动打开 Xcode。在 Xcode 中进行以下配置：

### 6.1 配置 Bundle Identifier 和签名

1. 左侧项目导航器点击最顶层的 `App` (蓝色图标)
2. 选择 `TARGETS` → `App`
3. 在 `Signing & Capabilities` 标签页：
   - `Bundle Identifier` 确认是 `com.boxuezhe.app`
   - `Team` 选择你的 Apple ID 团队（免费账号也可以）
   - `Signing Certificate` 选择 `Development`
   - 勾选 `Automatically manage signing`

### 6.2 配置部署目标（支持 iOS 17+）

1. 在 `General` 标签页：
   - `Minimum Deployments` → `iOS` 设置为 `17.0`
   - `Interface` 选择 `iPhone` 和 `iPad`（按需）

### 6.3 配置状态栏样式

1. 打开 `Info.plist`
2. 添加或确认以下键：
   - `UIViewControllerBasedStatusBarAppearance` → `NO`
   - `UIStatusBarStyle` → `UIStatusBarStyleDefault`
   - `UILaunchStoryboardName` → `LaunchScreen`

### 6.4 配置 App 名称为中文

1. 在 `Info.plist` 中：
   - `CFBundleDisplayName` → `博学者`
   - `CFBundleName` → `博学者`

---

## 第七步：运行到模拟器

1. Xcode 顶部选择一个模拟器（如 iPhone 15 Pro）
2. 点击 ▶️ 运行按钮（或快捷键 Cmd + R）
3. 等待编译完成，模拟器会自动启动应用

---

## 第八步：真机调试

1. 用 USB 线连接 iPhone 到 Mac
2. iPhone 上打开 `设置` → `通用` → `VPN与设备管理` → 信任你的开发者证书
3. Xcode 顶部选择你的 iPhone 设备
4. 点击 ▶️ 运行
5. 第一次运行可能需要等待 Xcode 处理符号文件

---

## 第九步：导出 IPA 安装包

### 方法 A：使用 Xcode 图形界面

1. Xcode 菜单 → `Product` → `Archive`
2. 等待 Archive 完成，弹出 Organizer 窗口
3. 选择刚刚的 Archive，点击 `Distribute App`
4. 选择 `Ad Hoc`（内测分发）或 `App Store Connect`（上架）
5. 按向导操作，最后导出 `.ipa` 文件

### 方法 B：使用命令行

```bash
cd ios/App
```

```bash
xcodebuild archive \
  -scheme App \
  -configuration Release \
  -archivePath ./build/App.xcarchive
```

```bash
xcodebuild -exportArchive \
  -archivePath ./build/App.xcarchive \
  -exportPath ./build/ipa \
  -exportOptionsPlist exportOptions.plist
```

> 注意：需要先创建 `exportOptions.plist` 配置文件，指定签名方式和 team id。

---

## 第十步：安装 IPA 到设备

### 方法 A：使用 Apple Configurator 2

1. 从 App Store 安装 Apple Configurator 2
2. 连接 iPhone 到 Mac
3. 拖入 IPA 文件到设备上即可安装

### 方法 B：使用 Xcode

1. Xcode → `Window` → `Devices and Simulators`
2. 选择你的设备
3. 点击 `+` 号选择 IPA 文件

### 方法 C：使用命令行

```bash
xcrun devicectl device install app --device <UDID> /path/to/app.ipa
```

---

## 常见问题

### Q: 编译报错 `pod install` 失败？
A: 确保已安装 CocoaPods：
```bash
brew install cocoapods
cd ios/App
pod install
```

### Q: 签名报错 `No signing certificate`？
A: 
1. 打开 Xcode → `Settings` → `Accounts`
2. 添加你的 Apple ID
3. 回到项目，在 Signing & Capabilities 选择正确的 Team

### Q: 启动后白屏/黑屏？
A: 
1. 检查 `npm run build` 是否成功
2. 执行 `npx cap sync ios` 重新同步
3. 检查 Xcode 控制台日志

### Q: 图标没更新？
A: 
1. 确保 `assets/icon.png` 是 1024×1024 PNG
2. 执行 `npx capacitor-assets generate --ios`
3. 在 Xcode 中 Clean Build Folder（Cmd + Shift + K）后重新运行

### Q: 如何支持 iOS 17 - iOS 26？
A: 
- 设置 `Minimum Deployments` 为 `17.0`
- 使用最新版 Xcode（Xcode 16+ 支持 iOS 18 SDK）
- 对于未来的 iOS 26，届时更新 Xcode 版本即可，Capacitor 会持续跟进

---

## 快速操作命令速查

```bash
# 完整构建流程
npm run build && npx cap sync ios && npx cap open ios

# 只更新 Web 代码
npm run build && npx cap sync ios

# 重新生成图标
npx capacitor-assets generate --ios

# 清理 Xcode 构建
rm -rf ios/App/build
rm -rf ios/App/Pods
cd ios/App && pod install
```

---

## 应用信息

| 项目 | 值 |
|------|-----|
| App Name | 博学者 |
| Bundle ID | com.boxuezhe.app |
| 最低 iOS 版本 | 17.0 |
| 方向 | 竖屏 |
| 界面风格 | 浅色 |
| 启动页背景色 | #E8F5F9 |
| 主色调 | #7AAEC0 |
