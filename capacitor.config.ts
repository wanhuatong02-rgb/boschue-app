import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.boxuezhe.app',
  appName: '博学者',
  webDir: 'dist',
  server: {
    androidScheme: 'http',
    cleartext: true,
    allowNavigation: ['http://124.222.199.117', 'http://localhost:*', 'https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
  },
  ios: {
    scheme: '博学者',
    contentInset: 'always',
    webView: {
      scrollEnabled: true,
    },
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3500,
      launchAutoHide: true,
      backgroundColor: '#E8F5F9',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      iosSplashResourceName: 'Splash',
      iosScaleType: 'CENTER_CROP',
      showSpinner: false,
    },
  },
};

export default config;