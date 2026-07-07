package com.boxuezhe.app;

import android.graphics.drawable.GradientDrawable;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    private TextView skipBtn;
    private final Handler handler = new Handler(Looper.getMainLooper());

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // 等 splash 布局渲染后，叠加跳过按钮
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                addSkipButton();
            }
        }, 200);
    }

    private void addSkipButton() {
        try {
            FrameLayout root = (FrameLayout) findViewById(android.R.id.content);
            if (root == null) return;

            // 创建跳过按钮
            skipBtn = new TextView(this);
            skipBtn.setText("跳过");
            skipBtn.setTextColor(0xFF5A8E9F);
            skipBtn.setTextSize(14);
            skipBtn.setGravity(Gravity.CENTER);
            skipBtn.setIncludeFontPadding(false);

            // 圆角半透明背景
            GradientDrawable bg = new GradientDrawable();
            bg.setColor(0xB3FFFFFF);
            bg.setCornerRadius(dp(22));
            bg.setStroke(dp(1), 0x33FFFFFF);
            skipBtn.setBackground(bg);

            // 内边距
            int h = dp(18), v = dp(9);
            skipBtn.setPadding(h, v, h, v);

            // 位置：右上角
            FrameLayout.LayoutParams lp = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT,
                ViewGroup.LayoutParams.WRAP_CONTENT
            );
            lp.gravity = Gravity.TOP | Gravity.END;
            lp.topMargin = dp(28);
            lp.rightMargin = dp(20);

            skipBtn.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if (bridge != null) {
                        bridge.triggerWindowJSEvent("splashSkipClicked");
                    }
                    removeSkipButton();
                }
            });

            root.addView(skipBtn);

            // 3.8 秒后自动移除
            handler.postDelayed(new Runnable() {
                @Override
                public void run() {
                    removeSkipButton();
                }
            }, 3800);

        } catch (Exception e) {
            // 出错时不影响正常启动
        }
    }

    private void removeSkipButton() {
        if (skipBtn == null) return;
        try {
            ViewGroup parent = (ViewGroup) skipBtn.getParent();
            if (parent != null) parent.removeView(skipBtn);
        } catch (Exception ignored) {}
        skipBtn = null;
    }

    private int dp(int value) {
        return Math.round(value * getResources().getDisplayMetrics().density);
    }

    @Override
    public void onDestroy() {
        handler.removeCallbacksAndMessages(null);
        removeSkipButton();
        super.onDestroy();
    }
}
