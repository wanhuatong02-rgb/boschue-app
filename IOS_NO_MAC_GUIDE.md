# 没有 Mac 电脑的 iOS 构建方案

没有苹果电脑也能构建 iOS 应用！以下是几种可行方案，按推荐程度排序。

---

## 🏆 方案一：GitHub Actions（推荐 ⭐⭐⭐⭐⭐）

**优点**：完全免费、自动化、配置一次永久使用
**缺点**：需要注册 Apple 开发者账号（免费也可以）

### 第一步：准备工作

1. **注册 GitHub 账号**：https://github.com （免费）
2. **注册 Apple ID**：https://appleid.apple.com （免费）
3. **加入 Apple Developer Program**（可选）：
   - 免费账号：只能在自己的真机上调试，不能分发
   - 付费账号（99美元/年）：可以上架 App Store、TestFlight 分发

### 第二步：把代码推送到 GitHub

```bash
# 1. 初始化 git（如果还没有）
git init
git add .
git commit -m "Initial commit"

# 2. 在 GitHub 上创建新仓库，然后推送
git remote add origin https://github.com/你的用户名/boschue-app.git
git branch -M main
git push -u origin main
```

> 注意：项目根目录下已经有 `.github/workflows/ios-build.yml` 工作流配置了

### 第三步：触发构建

1. 打开你的 GitHub 仓库页面
2. 点击顶部的 **Actions** 标签
3. 左边选择 **iOS Build**
4. 点击 **Run workflow** → 选择 main 分支 → 点击 Run workflow
5. 等待约 10-15 分钟，构建完成

### 第四步：下载构建产物

1. 在 Actions 页面点击刚刚完成的构建
2. 滚动到页面底部 **Artifacts** 区域
3. 点击 **ios-build** 下载
4. 解压后就能得到 `.app` 或 `.ipa` 文件

### 第五步：安装到 iPhone

#### 方式 A：使用 Sideloadly（免费，推荐）

1. 下载 Sideloadly：https://sideloadly.io/
2. 电脑上安装 iTunes（Windows 需要）
3. 用 USB 连接 iPhone 到电脑
4. 打开 Sideloadly
5. 拖入下载的 `.ipa` 文件
6. 输入你的 Apple ID
7. 点击 Start，等待安装完成
8. iPhone 上打开 设置 → 通用 → VPN与设备管理 → 信任你的 Apple ID
9. 打开应用即可使用

> 注意：免费 Apple ID 签名的 App 7 天后过期，需要重新签名安装

#### 方式 B：使用 AltStore

类似 Sideloadly，也是免费侧载工具：https://altstore.io/

---

## 🥈 方案二：Codemagic（推荐 ⭐⭐⭐⭐）

**优点**：专门做移动端 CI/CD，界面友好，有免费额度
**缺点**：免费额度有限（每月 500 分钟）

### 操作步骤

1. 注册 Codemagic：https://codemagic.io/ （用 GitHub 登录）
2. 添加你的仓库
3. 选择 **iOS** 平台
4. 按向导配置构建
5. 点击 **Start new build**
6. 构建完成后下载 IPA

Codemagic 有可视化的配置界面，比 GitHub Actions 更简单直观。

---

## 🥉 方案三：租一台云 Mac

适合长期需要 iOS 开发的情况。

| 服务商 | 价格（约） | 说明 |
|--------|-----------|------|
| **MacStadium** | $1/小时起 | 最知名的 Mac 云服务 |
| **AWS EC2 Mac** | $1/小时起 | 亚马逊云的 Mac 实例 |
| **阿里云 Mac 迷你主机** | ¥30/天起 | 国内服务商，速度快 |
| **腾讯云 Mac 迷你主机** | ¥30/天起 | 国内服务商 |

### 操作方式

1. 租一台 Mac mini（MacStadium / 阿里云等）
2. 用 VNC / 远程桌面连接
3. 把项目代码传上去
4. 按照 [IOS_BUILD_GUIDE.md](./IOS_BUILD_GUIDE.md) 的步骤操作
5. 构建好 IPA 后下载下来

---

## 💡 关于签名的说明

### 免费 Apple ID 能做什么？
- ✅ 在自己的 iPhone 上安装运行
- ❌ 不能上架 App Store
- ❌ 不能 TestFlight 分发
- ❌ 7 天后过期，需要重新签名

### 付费开发者账号（99美元/年）能做什么？
- ✅ 上架 App Store
- ✅ TestFlight 内测（最多 10000 人）
- ✅ App 签名一年有效
- ✅ 推送通知等高级功能

---

## 🚀 最快上手路径（推荐）

如果你只是想先看看效果，按这个顺序：

1. **注册 GitHub 账号**（5分钟）
2. **把代码推上去**（5分钟）
3. **触发 GitHub Actions 构建**（等 10-15 分钟）
4. **下载模拟器版本 .app**（可以在 Mac 模拟器运行）
5. **如果有 iPhone**：
   - 注册免费 Apple ID
   - 用 Sideloadly 签名安装
   - 7 天后重签一次

---

## ❓ 常见问题

### Q: 免费 Apple ID 签名的 App 7 天过期怎么办？
A: 用 Sideloadly 重新签名安装一次就行，数据不会丢。或者用付费开发者账号。

### Q: 没有 iPhone 能测试吗？
A: 可以。GitHub Actions 构建的模拟器版本（.app 文件）可以在 Mac 的 Xcode 模拟器里运行。如果连 Mac 都没有，可以先租一天云 Mac 测试。

### Q: 能不能直接在 Windows 上装 iPhone 模拟器？
A: 不行。iOS 模拟器只能在 macOS 上运行。

### Q: 构建 IPA 一定要付费开发者账号吗？
A: 不一定。用免费账号 + Sideloadly 也能装到自己手机上，只是 7 天过期。

### Q: 支持 iOS 17 - iOS 26 吗？
A: 支持。我们配置了最低部署目标 iOS 17.0。对于未来的 iOS 26，到时候更新一下 Xcode 版本就行，Capacitor 会持续跟进新版本。

---

## 📞 需要帮助？

如果你在配置过程中遇到问题，可以参考：
- GitHub Actions 官方文档：https://docs.github.com/actions
- Sideloadly 官方网站：https://sideloadly.io/
- Codemagic 文档：https://docs.codemagic.io/
