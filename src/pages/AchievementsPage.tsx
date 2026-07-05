import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Trophy, Star, BookOpen, Compass, Target, TrendingUp } from 'lucide-react';
import * as Icons from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import Card from '@/components/ui/Card';
import { useProgressStore } from '@/store/progressStore';
import type { Achievement, AchievementType } from '@/types';

type TabType = 'all' | 'streak' | 'first' | 'subject' | 'subject-specific' | 'exploration' | 'accuracy' | 'mastery';

const TABS: { key: TabType; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'streak', label: '连击' },
  { key: 'first', label: '首次' },
  { key: 'subject', label: '学科通关' },
  { key: 'subject-specific', label: '学科专属' },
  { key: 'exploration', label: '探索' },
  { key: 'accuracy', label: '准确率' },
  { key: 'mastery', label: '掌握度' },
];

const TYPE_LABELS: Record<AchievementType, string> = {
  streak: '连击里程碑',
  lesson: '首次成就',
  chapter: '章节成就',
  subject: '学科通关',
  'subject-specific': '学科专属',
  exploration: '探索成就',
  accuracy: '准确率',
  mastery: '掌握度',
};

function formatUnlockedAt(ts: number): string {
  const d = new Date(ts);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${month}月${day}日`;
}

export default function AchievementsPage() {
  const navigate = useNavigate();
  const achievements = useProgressStore((s) => s.achievements);
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const filteredAchievements = activeTab === 'all'
    ? achievements
    : achievements.filter((a) => {
        if (activeTab === 'first') return a.type === 'lesson' || a.type === 'chapter';
        return a.type === activeTab;
      });

  // 已解锁的成就优先，同状态下按 unlockAt 倒序（最近解锁的在前）
  const sortedAchievements = [...filteredAchievements].sort((a, b) => {
    if (a.unlocked === b.unlocked) {
      if (a.unlocked && a.unlockedAt && b.unlockedAt) {
        return b.unlockedAt - a.unlockedAt;
      }
      return 0;
    }
    return a.unlocked ? -1 : 1;
  });

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <AppLayout>
      <header className="px-5 pt-6 pb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1.5 -ml-1.5 rounded-full hover:bg-canvas transition-colors">
            <ArrowLeft size={20} color="#5A5A5A" />
          </button>
          <div className="flex items-center gap-2">
            <Award size={20} color="#D4A574" />
            <h1 className="text-[18px] font-serif font-semibold text-ink">成就徽章</h1>
          </div>
        </div>
      </header>

      {/* Tab 切换 */}
      <div className="px-5 mb-4 overflow-x-auto">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.key
                  ? 'bg-accent text-white'
                  : 'bg-canvas text-ink-secondary hover:bg-accent/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 pb-8">
        {/* 进度摘要 */}
        <Card padding="md" className="mb-4 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy size={20} color="#D4A574" />
              <span className="text-[14px] font-medium text-ink">已解锁</span>
            </div>
            <div className="text-[20px] font-serif font-bold text-amber-600">
              {unlockedCount} <span className="text-[12px] font-normal text-ink-light">/ {achievements.length}</span>
            </div>
          </div>
          <div className="mt-2 h-2 bg-amber-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full transition-all"
              style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
            />
          </div>
        </Card>

        {/* 成就列表 */}
        <div className="space-y-3">
          {sortedAchievements.map((achievement) => {
            const IconComp = (Icons as unknown as Record<string, Icons.LucideIcon>)[achievement.icon] ?? Icons.Award;
            return (
              <Card
                key={achievement.id}
                padding="md"
                className={`cursor-pointer transition-all ${
                  achievement.unlocked ? 'hover:shadow-card-hover' : 'opacity-60'
                } ${selectedAchievement?.id === achievement.id ? 'ring-2 ring-accent' : ''}`}
                onClick={() => setSelectedAchievement(selectedAchievement?.id === achievement.id ? null : achievement)}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: achievement.unlocked ? `${achievement.color}1A` : '#F0F0F0',
                      color: achievement.unlocked ? achievement.color : '#CCC',
                    }}
                  >
                    <IconComp size={22} strokeWidth={achievement.unlocked ? 2 : 1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[14px] font-medium"
                        style={{ color: achievement.unlocked ? '#1F1F1F' : '#999' }}
                      >
                        {achievement.title}
                      </span>
                      {achievement.unlocked && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-600">
                          已解锁
                        </span>
                      )}
                    </div>
                    <p className="text-[12px] text-ink-light mt-0.5">{achievement.description}</p>
                    {achievement.unlocked && achievement.unlockedAt && (
                      <p className="text-[10px] text-ink-light mt-1">
                        解锁于 {formatUnlockedAt(achievement.unlockedAt)}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}

          {sortedAchievements.length === 0 && (
            <Card padding="lg" className="text-center">
              <Compass size={32} color="#CCC" className="mx-auto mb-2" />
              <div className="text-[14px] text-ink-secondary">该分类暂无成就</div>
            </Card>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
