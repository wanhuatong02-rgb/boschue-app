import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles, RefreshCw, Network } from 'lucide-react';
import { useEffect, useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import StreakIndicator from '@/components/streak/StreakIndicator';
import SubjectCard from '@/components/subject/SubjectCard';
import SubjectIcon from '@/components/subject/SubjectIcon';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import AchievementToast from '@/components/achievement/AchievementToast';
import StreakCelebration from '@/components/streak/StreakCelebration';
import { useProgressStore } from '@/store/progressStore';
import { useUserProfileStore } from '@/store/userProfileStore';
import { SUBJECTS } from '@/config/subjects';
import { getSubjectConfig } from '@/config/subjects';
import { getLessonById } from '@/data';
import { KNOWLEDGE_GRAPH_DATA } from '@/data/knowledgeGraph';
import { today } from '@/lib/date';

export default function TodayPage() {
  const navigate = useNavigate();
  const nickname = useUserProfileStore((s) => s.nickname);
  const getTodayLesson = useProgressStore((s) => s.getTodayLesson);
  const streak = useProgressStore((s) => s.streak);
  const lastUnlocked = useProgressStore((s) => s.lastUnlockedAchievements);
  const clearLastUnlocked = useProgressStore((s) => s.clearLastUnlocked);
  const getSubjectMastery = useProgressStore((s) => s.getSubjectMastery);
  const getCompletedLessonCount = useProgressStore((s) => s.getCompletedLessonCount);
  const getTotalLessonCount = useProgressStore((s) => s.getTotalLessonCount);
  const getLessonsForReview = useProgressStore((s) => s.getLessonsForReview);
  const getWrongQuizzes = useProgressStore((s) => s.getWrongQuizzes);
  const unlockedKnowledgeNodeIds = useProgressStore((s) => s.progress.unlockedKnowledgeNodeIds);

  const todayLesson = getTodayLesson();
  const [celebrate, setCelebrate] = useState(false);

  // 复习提醒
  const lessonsForReview = getLessonsForReview(0); // 需要复习的课程
  const wrongQuizzes = getWrongQuizzes();

  // 进入页面时若刚达成 7/21 天连击，触发庆祝
  useEffect(() => {
    if (streak.currentStreak === 7 || streak.currentStreak === 21) {
      const lastMilestone = streak.achievedMilestones[streak.achievedMilestones.length - 1];
        if (lastMilestone === streak.currentStreak) {
          // 简化：根据 lastStudyDate === 今日判断是否刚达成
          if (streak.lastStudyDate === today()) {
            setCelebrate(true);
          }
        }
    }
  }, [streak]);

  const lessonDetail = todayLesson ? getLessonById(todayLesson.id) : null;
  const subjectConfig = lessonDetail ? getSubjectConfig(lessonDetail.subjectId) : null;
  // 基于今日推荐课程的学科计算进度
  const todaySubjectId = lessonDetail?.subjectId ?? null;
  const completedCount = todaySubjectId ? getCompletedLessonCount(todaySubjectId) : 0;
  const totalCount = todaySubjectId ? getTotalLessonCount(todaySubjectId) : 0;
  // 全学科总完成课程数
  const totalCompletedAll = SUBJECTS.filter(s => s.status === 'active').reduce((sum, s) => sum + getCompletedLessonCount(s.id), 0);

  // 知识图谱探索入口
  const totalKnowledgeNodes = SUBJECTS.filter(s => s.status === 'active').reduce(
    (sum, s) => sum + (KNOWLEDGE_GRAPH_DATA[s.id] || []).length, 0
  );
  const unlockedCount = unlockedKnowledgeNodeIds?.length ?? 0;
  const unexploredCount = totalKnowledgeNodes - unlockedCount;

  return (
    <AppLayout>
      <AchievementToast achievements={lastUnlocked} onDismiss={clearLastUnlocked} />
      <StreakCelebration open={celebrate} days={streak.currentStreak} onClose={() => setCelebrate(false)} />

      {/* 顶部问候 + 连击 */}
      <header className="px-5 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12px] text-ink-light">今天也是继续成长的一天</p>
            <h1 className="text-[22px] font-serif font-semibold text-ink mt-0.5">
              你好，{nickname}
            </h1>
          </div>
          <StreakIndicator days={streak.currentStreak} size="md" />
        </div>
      </header>

      {/* 今日推荐 */}
      <section className="px-5 mb-6">
        <div className="flex items-center gap-1.5 mb-2.5">
          <Sparkles size={14} color="#7AAEC0" />
          <span className="text-[12px] font-semibold text-accent tracking-wide">今日推荐</span>
        </div>

        {lessonDetail && subjectConfig ? (
          <Card padding="lg" className="relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mr-12 -mt-12"
              style={{ backgroundColor: subjectConfig.color }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <SubjectIcon subjectId={lessonDetail.subjectId} size={28} />
                <span className="text-[11px] text-ink-light">
                  {subjectConfig.name} · {lessonDetail.textbookRef}
                </span>
              </div>
              <h2 className="text-[20px] font-serif font-semibold text-ink leading-snug mb-2">
                {lessonDetail.title}
              </h2>
              <p className="text-[13px] text-ink-secondary leading-relaxed line-clamp-2 mb-4">
                {lessonDetail.content.intro}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[11px] text-ink-light">
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} /> {lessonDetail.estimatedMinutes} 分钟
                  </span>
                  <span>第 {completedCount + 1} / {totalCount} 节</span>
                </div>
                <Button size="sm" onClick={() => navigate(`/reading/${lessonDetail.id}`)}>
                  开始学习 <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </Card>
        ) : (
          <Card padding="lg" className="text-center">
            <div className="text-[14px] text-ink-secondary mb-2">
              {subjectConfig ? `${subjectConfig.name} 全部完成` : '所有学科全部完成'}
            </div>
            <Button size="sm" onClick={() => navigate(todaySubjectId ? `/subject/${todaySubjectId}` : '/subject/economics')}>
              查看学科
            </Button>
          </Card>
        )}
      </section>

      {/* 复习提醒 & 错题重练 */}
      {(lessonsForReview.length > 0 || wrongQuizzes.length > 0) && (
        <section className="px-5 mb-6">
          <div className="flex items-center gap-1.5 mb-2.5">
            <RefreshCw size={14} color="#D08068" />
            <span className="text-[12px] font-semibold text-psychology tracking-wide">复习提醒</span>
          </div>
          <Card padding="md">
            {lessonsForReview.length > 0 && (
              <button
                className="w-full flex items-center gap-3 py-2 mb-2 last:mb-0 hover:bg-canvas rounded-lg px-2 -mx-2 transition-colors"
                onClick={() => navigate(`/review?type=spaced`)}
              >
                <div className="w-8 h-8 rounded-full bg-psychology/10 flex items-center justify-center">
                  <RefreshCw size={16} color="#D08068" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-[13px] font-medium text-ink">温故知新</div>
                  <div className="text-[11px] text-ink-light">{lessonsForReview.length} 节课等待复习</div>
                </div>
                <ArrowRight size={16} className="text-ink-light" />
              </button>
            )}
            {wrongQuizzes.length > 0 && (
              <button
                className="w-full flex items-center gap-3 py-2 hover:bg-canvas rounded-lg px-2 -mx-2 transition-colors"
                onClick={() => navigate(`/review?type=wrong`)}
              >
                <div className="w-8 h-8 rounded-full bg-psychology/10 flex items-center justify-center">
                  <BookOpen size={16} color="#D08068" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-[13px] font-medium text-ink">错题重练</div>
                  <div className="text-[11px] text-ink-light">{wrongQuizzes.length} 道错题待复习</div>
                </div>
                <ArrowRight size={16} className="text-ink-light" />
              </button>
            )}
          </Card>
        </section>
      )}

      {/* 知识图谱探索入口 */}
      {unexploredCount > 0 && (
        <section className="px-5 mb-6">
          <button
            className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/20 transition-colors"
            onClick={() => navigate('/knowledge-graph')}
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Network size={20} color="#7AAEC0" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[13px] font-medium text-ink">知识图谱</div>
              <div className="text-[11px] text-ink-light">{unexploredCount} 个概念待探索</div>
            </div>
            <ArrowRight size={16} className="text-ink-light" />
          </button>
        </section>
      )}

      {/* 五学科入口 */}
      <section className="px-5 mb-6">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-[14px] font-semibold text-ink">学科探索</h3>
          <span className="text-[11px] text-ink-light">5 学科</span>
        </div>
        <div className="grid grid-cols-1 gap-2.5">
          {SUBJECTS.map((s) => (
            <SubjectCard
              key={s.id}
              subjectId={s.id}
              comingSoon={s.status === 'coming-soon'}
              mastery={s.status === 'active' ? getSubjectMastery(s.id) : 0}
            />
          ))}
        </div>
      </section>

      {/* 学习统计简要 */}
      <section className="px-5 pb-4">
        <Card padding="md">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-[20px] font-serif font-semibold text-ink">{streak.totalStudyDays}</div>
              <div className="text-[10px] text-ink-light mt-0.5">累计学习天数</div>
            </div>
            <div className="border-l border-r border-accent/10">
              <div className="text-[20px] font-serif font-semibold text-ink">{totalCompletedAll}</div>
              <div className="text-[10px] text-ink-light mt-0.5">完成课程</div>
            </div>
            <div>
              <div className="text-[20px] font-serif font-semibold text-ink">{streak.longestStreak}</div>
              <div className="text-[10px] text-ink-light mt-0.5">最长连击</div>
            </div>
          </div>
        </Card>
      </section>
    </AppLayout>
  );
}
