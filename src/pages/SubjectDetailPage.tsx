import { useNavigate, useParams } from 'react-router-dom';
import { Award, ChevronRight, Lock } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import PageHeader from '@/components/layout/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import LessonListItem from '@/components/lesson/LessonListItem';
import SubjectProgressRing from '@/components/subject/SubjectProgressRing';
import { useProgressStore } from '@/store/progressStore';
import { getSubjectData } from '@/data';
import type { SubjectId } from '@/types';

export default function SubjectDetailPage() {
  const { subjectId } = useParams<{ subjectId: SubjectId }>();
  const navigate = useNavigate();
  const subject = subjectId ? getSubjectData(subjectId) : undefined;

  const getLessonProgress = useProgressStore((s) => s.getLessonProgress);
  const getChapterProgress = useProgressStore((s) => s.getChapterProgress);
  const isChapterUnlocked = useProgressStore((s) => s.isChapterUnlocked);
  const getSubjectMastery = useProgressStore((s) => s.getSubjectMastery);
  const getCompletedLessonCount = useProgressStore((s) => s.getCompletedLessonCount);
  const getTotalLessonCount = useProgressStore((s) => s.getTotalLessonCount);

  if (!subject) {
    return (
      <AppLayout>
        <PageHeader title="未找到学科" defaultBackTo="/" />
        <div className="p-5 text-center text-ink-light">该学科尚未上线</div>
      </AppLayout>
    );
  }

  const mastery = getSubjectMastery(subject.id);
  const completedCount = getCompletedLessonCount(subject.id);
  const totalCount = getTotalLessonCount(subject.id);

  return (
    <AppLayout>
      <PageHeader title={subject.name} defaultBackTo="/" />

      {/* 学科概览 */}
      <section className="px-5 pt-2 pb-5">
        <Card padding="lg">
          <div className="flex items-start gap-4">
            <SubjectProgressRing value={mastery} size={84} color={subject.color} sublabel="掌握度" />
            <div className="flex-1 min-w-0">
              <h2 className="text-[18px] font-serif font-semibold text-ink">{subject.name}</h2>
              <p className="text-[11px] text-ink-light mt-0.5">{subject.textbook}</p>
              <p className="text-[12px] text-ink-secondary mt-2 leading-relaxed line-clamp-3">
                {subject.goal}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-accent/10 grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-[16px] font-serif font-semibold text-ink">{completedCount}/{totalCount}</div>
              <div className="text-[10px] text-ink-light mt-0.5">课程进度</div>
            </div>
            <div className="border-l border-r border-accent/10">
              <div className="text-[16px] font-serif font-semibold text-ink">{subject.chapters.length}</div>
              <div className="text-[10px] text-ink-light mt-0.5">篇章数</div>
            </div>
            <div>
              <div className="text-[16px] font-serif font-semibold text-ink">
                {subject.chapters.filter((c) => (getChapterProgress(c.id).quizScore ?? 0) >= 60).length}
              </div>
              <div className="text-[10px] text-ink-light mt-0.5">已通关章</div>
            </div>
          </div>
        </Card>
      </section>

      {/* 按篇分组展示 */}
      {subject.chapters.map((chapter) => {
        const chapterProgress = getChapterProgress(chapter.id);
        const unlocked = isChapterUnlocked(chapter.id);
        const completedInChapter = chapter.lessons.filter(
          (l) => getLessonProgress(l.id).status === 'completed',
        ).length;
        const allLessonsCompleted = completedInChapter >= chapter.lessons.length;
        const quizPassed = (chapterProgress.quizScore ?? 0) >= 60;

        return (
          <section key={chapter.id} className="px-5 mb-5">
            {/* 篇标题 */}
            <div className="flex items-center justify-between mb-2.5">
              <div>
                <h3 className="text-[15px] font-serif font-semibold text-ink flex items-center gap-1.5">
                  {chapter.title}
                  {!unlocked && <Lock size={12} className="text-ink-light" />}
                </h3>
                <p className="text-[11px] text-ink-light">{chapter.subtitle} · {chapter.description}</p>
              </div>
              <div className="text-right">
                <div className="text-[12px] font-semibold text-ink">
                  {completedInChapter}/{chapter.lessons.length}
                </div>
                <div className="text-[10px] text-ink-light">完成</div>
              </div>
            </div>

            {/* 课程列表 */}
            <div className={`space-y-2 ${!unlocked ? 'opacity-50' : ''}`}>
              {chapter.lessons.map((lesson, idx) => {
                const prevLesson = idx > 0 ? chapter.lessons[idx - 1] : null;
                const prevCompleted = !prevLesson || getLessonProgress(prevLesson.id).status === 'completed';
                const lessonLocked = !unlocked || (idx > 0 && !prevCompleted);
                const status = getLessonProgress(lesson.id).status;
                return (
                  <LessonListItem
                    key={lesson.id}
                    lesson={lesson}
                    status={status}
                    locked={lessonLocked}
                  />
                );
              })}
            </div>

            {/* 章节测验 */}
            <div className="mt-3">
              {allLessonsCompleted && unlocked ? (
                <Card padding="md" className="border-2 border-dashed border-accent/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center ${quizPassed ? 'bg-economics-light text-economics' : 'bg-accent/10 text-accent'}`}
                      >
                        <Award size={16} />
                      </div>
                      <div>
                        <div className="text-[13px] font-medium text-ink">
                          {chapter.title}测验
                        </div>
                        <div className="text-[11px] text-ink-light">
                          {chapter.chapterQuiz.length} 题 · {quizPassed ? `已通过 ${chapterProgress.quizScore}%` : '综合检验学习成果'}
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant={quizPassed ? 'secondary' : 'primary'}
                      onClick={() => navigate(`/quiz/chapter/${chapter.id}`)}
                    >
                      {quizPassed ? '重做' : '开始测验'} <ChevronRight size={14} />
                    </Button>
                  </div>
                </Card>
              ) : (
                <div className="text-[11px] text-ink-light px-2 py-3 text-center bg-white/40 rounded-card">
                  完成本篇全部课程后解锁章节测验
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* 通关测验 */}
      {subject.chapters.every((c) => (getChapterProgress(c.id).quizScore ?? 0) >= 60) && subject.finalQuiz && (
        <section className="px-5 pb-5">
          <Card padding="lg" className="border-2 border-economics/30 bg-economics-light/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[16px] font-serif font-semibold text-ink mb-1">学科通关测验</h3>
                <p className="text-[11px] text-ink-secondary">{subject.finalQuiz.length} 题 · 通过 80% 解锁"经济学入门"徽章</p>
              </div>
              <Button size="sm" onClick={() => navigate(`/quiz/final/${subject.id}`)}>
                挑战 <ChevronRight size={14} />
              </Button>
            </div>
          </Card>
        </section>
      )}
    </AppLayout>
  );
}
