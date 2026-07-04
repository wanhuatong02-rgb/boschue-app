import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, RotateCcw, Trophy, AlertCircle, Home } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useLearningStore } from '@/store/learningStore';
import { useProgressStore } from '@/store/progressStore';
import { getSubjectData, ALL_SUBJECTS, getQuizById } from '@/data';
import type { Chapter, SubjectId } from '@/types';

/** 根据 chapterId 找到所属学科和章节对象 */
function findChapterAndSubject(chapterId: string): { chapter: Chapter; subjectId: SubjectId } | undefined {
  for (const subject of ALL_SUBJECTS) {
    const chapter = subject.chapters.find((c) => c.id === chapterId);
    if (chapter) {
      return { chapter, subjectId: subject.id };
    }
  }
  return undefined;
}

export default function ChapterResultPage() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const navigate = useNavigate();

  const lastSessionResult = useLearningStore((s) => s.lastSessionResult);
  const getChapterProgress = useProgressStore((s) => s.getChapterProgress);

  // 通关测验的特殊 chapterId 形如 "final-economics"
  const isFinal = chapterId?.startsWith('final-');
  const subjectId = isFinal ? (chapterId!.replace('final-', '') as SubjectId) : undefined;
  const subject = subjectId ? getSubjectData(subjectId) : undefined;

  // 找到当前章节（遍历所有学科，而非硬编码 economics）
  const found = chapterId ? findChapterAndSubject(chapterId) : undefined;
  const chapter = found?.chapter;
  const chapterSubjectId = found?.subjectId;

  if (!lastSessionResult) {
    return (
      <AppLayout showTabBar={false}>
        <PageHeader title="测验结果" defaultBackTo="/" />
        <div className="p-5 text-center text-ink-light">未找到测验记录</div>
      </AppLayout>
    );
  }

  const result = lastSessionResult;
  const accuracy = result.accuracy;
  const score = Math.round(accuracy);

  // 颜色：60%以下暖橙 / 60%+蓝 / 90%+金
  const ringColor = accuracy >= 90 ? '#D4A574' : accuracy >= 60 ? '#7AAEC0' : '#D08068';

  // 找到下一章节（在所属学科中查找）
  let nextChapter: Chapter | undefined;
  if (chapter && chapterSubjectId) {
    const chapterSubject = getSubjectData(chapterSubjectId);
    if (chapterSubject) {
      const idx = chapterSubject.chapters.findIndex((c) => c.id === chapter.id);
      if (idx >= 0 && idx < chapterSubject.chapters.length - 1) {
        nextChapter = chapterSubject.chapters[idx + 1];
      }
    }
  }

  // 是否通过
  const passed = accuracy >= 60;

  // 错题列表
  const wrongAnswers = result.answers.filter((a) => !a.isCorrect);

  // 下一章是否已解锁
  const nextChapterProgress = nextChapter ? getChapterProgress(nextChapter.id) : undefined;
  const nextChapterUnlocked = nextChapterProgress ? nextChapterProgress.status !== 'locked' : false;

  const handleRetry = () => {
    if (chapter) {
      navigate(`/quiz/chapter/${chapter.id}`, { replace: true });
    } else if (subjectId) {
      navigate(`/quiz/final/${subjectId}`, { replace: true });
    }
  };

  const handleNextChapter = () => {
    if (nextChapter && chapterSubjectId) {
      navigate(`/subject/${chapterSubjectId}`, { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  };

  return (
    <AppLayout showTabBar={false}>
      <PageHeader title={isFinal ? '通关测验结果' : '章节测验结果'} defaultBackTo="/" />

      <div className="px-5 pb-8">
        {/* 得分圆环 */}
        <section className="text-center py-6">
          <div className="relative inline-flex flex-col items-center">
            <svg width={160} height={160} className="-rotate-90">
              <circle
                cx={80}
                cy={80}
                r={70}
                fill="none"
                stroke="rgba(122, 174, 192, 0.12)"
                strokeWidth={10}
              />
              <circle
                cx={80}
                cy={80}
                r={70}
                fill="none"
                stroke={ringColor}
                strokeWidth={10}
                strokeDasharray={2 * Math.PI * 70}
                strokeDashoffset={2 * Math.PI * 70 * (1 - accuracy / 100)}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[40px] font-serif font-bold text-ink leading-none">
                {score}
                <span className="text-[18px] text-ink-light">分</span>
              </span>
              <span className="text-[11px] text-ink-light mt-1">
                {result.correct}/{result.total} 题正确
              </span>
            </div>
          </div>

          <div className="mt-4">
            {accuracy >= 90 ? (
              <div className="inline-flex items-center gap-1.5 text-[14px] font-medium" style={{ color: ringColor }}>
                <Trophy size={16} /> 优秀！知识掌握扎实
              </div>
            ) : accuracy >= 60 ? (
              <div className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent">
                <ArrowRight size={16} /> 通过！可以进入下一章
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 text-[14px] font-medium text-psychology">
                <AlertCircle size={16} /> 还需努力，复习错题再战
              </div>
            )}
          </div>
        </section>

        {/* 知识点掌握度条形图 */}
        <section className="mb-5">
          <h3 className="text-[14px] font-semibold text-ink mb-2.5">知识点掌握度</h3>
          <Card padding="md">
            <div className="space-y-3">
              {result.knowledgePointStats.map((stat) => {
                const m = stat.mastery;
                const color = m >= 80 ? '#7BB661' : m >= 60 ? '#7AAEC0' : '#D08068';
                return (
                  <div key={stat.point}>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-ink-secondary">{stat.point}</span>
                      <span className="text-ink-light">
                        {stat.correct}/{stat.total} · {Math.round(m)}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-accent/10 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${m}%`, backgroundColor: color }}
                      />
                    </div>
                  </div>
                );
              })}
              {result.knowledgePointStats.length === 0 && (
                <div className="text-[12px] text-ink-light text-center py-2">暂无数据</div>
              )}
            </div>
          </Card>
        </section>

        {/* 错题回顾 */}
        {wrongAnswers.length > 0 && (
          <section className="mb-5">
            <h3 className="text-[14px] font-semibold text-ink mb-2.5">
              错题回顾 · {wrongAnswers.length} 题
            </h3>
            <div className="space-y-2">
              {wrongAnswers.map((ans) => {
                const quiz = getQuizById(ans.quizId);
                if (!quiz) return null;
                const correctOpt = quiz.options.find((o) => o.id === quiz.correctOptionId);
                return (
                  <Card key={ans.quizId} padding="md">
                    <p className="text-[13px] font-serif text-ink leading-relaxed mb-2">
                      {quiz.question}
                    </p>
                    <div className="text-[11px] text-psychology mb-1">
                      你的答案：{quiz.options.find((o) => o.id === ans.selectedOptionId)?.text ?? '-'}
                    </div>
                    <div className="text-[11px] text-economics mb-2">
                      正确答案：{correctOpt?.text}
                    </div>
                    <p className="text-[12px] text-ink-secondary font-serif leading-relaxed m-0">
                      {quiz.explanation}
                    </p>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* 双 CTA */}
        <section className="space-y-2.5">
          {passed && nextChapter && (
            <Button block size="lg" onClick={handleNextChapter}>
              进入「{nextChapter.title}」 <ArrowRight size={16} />
            </Button>
          )}
          {!passed && (
            <Button block size="lg" variant="primary" onClick={handleRetry}>
              <RotateCcw size={16} /> 重做测验
            </Button>
          )}
          {passed && wrongAnswers.length > 0 && (
            <Button block size="lg" variant="secondary" onClick={handleRetry}>
              <RotateCcw size={16} /> 复习错题
            </Button>
          )}
          {isFinal && passed && (
            <Card padding="lg" className="bg-economics-light/40 border border-economics/30 text-center">
              <Trophy size={32} color="#7BB661" className="mx-auto mb-2" />
              <div className="text-[14px] font-serif font-semibold text-ink">
                恭喜！你已通过经济学通关测验
              </div>
              <div className="text-[11px] text-ink-secondary mt-1">
                「经济学入门」徽章已解锁
              </div>
            </Card>
          )}
          <Button block size="md" variant="ghost" onClick={() => navigate('/', { replace: true })}>
            <Home size={14} /> 返回首页
          </Button>
        </section>
      </div>
    </AppLayout>
  );
}
