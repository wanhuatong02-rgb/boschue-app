import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Lightbulb, RefreshCw } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import ConceptHighlight from '@/components/lesson/ConceptHighlight';
import LessonNav from '@/components/lesson/LessonNav';
import ReadingTimer from '@/components/lesson/ReadingTimer';
import { useLearningStore } from '@/store/learningStore';
import { useProgressStore } from '@/store/progressStore';
import { getLessonById, getPrevLesson, getNextLesson, getLessonQuizzes } from '@/data';
import { getSubjectConfig } from '@/config/subjects';

export default function ReadingPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const lesson = lessonId ? getLessonById(lessonId) : undefined;

  const startLesson = useLearningStore((s) => s.startLesson);
  const exitLesson = useLearningStore((s) => s.exitLesson);
  const isReviewMode = useLearningStore((s) => s.isReviewMode);
  const markLessonInProgress = useProgressStore((s) => s.markLessonInProgress);
  const updateReadingProgress = useProgressStore((s) => s.updateReadingProgress);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [elapsedSec, setElapsedSec] = useState(0);
  useEffect(() => {
    if (!lesson) return;
    // 如果没有指定复习模式，默认从首次学习开始
    startLesson(lesson.id);
    if (!isReviewMode) {
      markLessonInProgress(lesson.id);
    }
    return () => {
      exitLesson();
    };
  }, [lesson, startLesson, exitLesson, markLessonInProgress, isReviewMode]);

  // 滚动监听：实时更新阅读进度
  useEffect(() => {
    const handler = () => {
      const el = scrollRef.current;
      if (!el) return;
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const p = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setReadingProgress(p);
    };
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handler);
    return () => el.removeEventListener('scroll', handler);
  }, []);

  // 每 5 秒持久化一次进度
  useEffect(() => {
    if (!lesson) return;
    const timer = setInterval(() => {
      updateReadingProgress(lesson.id, readingProgress, 5);
    }, 5000);
    return () => clearInterval(timer);
  }, [lesson, readingProgress, updateReadingProgress]);

  // 退出时保存最终进度（仅在 unmount 时执行）
  useEffect(() => {
    return () => {
      if (lesson) {
        updateReadingProgress(lesson.id, readingProgress, elapsedSec);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson]);

  if (!lesson) {
    return (
      <AppLayout showTabBar={false}>
        <PageHeader title="未找到课程" defaultBackTo="/" />
        <div className="p-5 text-center text-ink-light">课程不存在</div>
      </AppLayout>
    );
  }

  const subjectConfig = getSubjectConfig(lesson.subjectId);
  const color = subjectConfig?.color ?? '#7AAEC0';
  const prevLesson = getPrevLesson(lesson.id);
  const nextLesson = getNextLesson(lesson.id);
  const quizzes = getLessonQuizzes(lesson.id);
  const canStartQuiz = readingProgress >= 0.85;

  const handleStartQuiz = () => {
    if (!canStartQuiz) return;
    navigate(`/quiz/lesson/${lesson.id}`);
  };

  return (
    <AppLayout showTabBar={false}>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-mobile z-30 bg-canvas/95 backdrop-blur-md">
        <PageHeader
          title={lesson.title}
          subtitle={lesson.textbookRef}
          onBack={() => navigate(-1)}
          right={<ReadingTimer active onTick={setElapsedSec} />}
        />
        {/* 阅读进度条 */}
        <div className="h-0.5 bg-accent/10">
          <div
            className="h-full transition-all duration-150"
            style={{ width: `${readingProgress * 100}%`, backgroundColor: color }}
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute top-14 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-mobile overflow-y-auto"
        style={{ scrollPaddingTop: 16 }}
      >
        <article className="px-5 pt-4 pb-8 reading-content">
          {/* 导语 */}
          <p className="text-[14px] text-ink-secondary leading-relaxed italic border-l-2 pl-3 mb-5"
             style={{ borderColor: color }}>
            {lesson.content.intro}
          </p>

          {/* 正文 sections */}
          {lesson.content.sections.map((section, idx) => (
            <section key={idx}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, pidx) => (
                <p key={pidx}>{p}</p>
              ))}
              {section.conceptBox && (
                <ConceptHighlight concept={section.conceptBox} subjectId={lesson.subjectId} />
              )}
            </section>
          ))}

          {/* 案例研究 */}
          {lesson.content.caseStudy && (
            <section className="my-6 p-4 rounded-card" style={{ backgroundColor: `${color}0A` }}>
              <h2 className="!mt-0" style={{ color }}>{lesson.content.caseStudy.title}</h2>
              <p>{lesson.content.caseStudy.content}</p>
              <div className="mt-3 pt-3 border-t" style={{ borderColor: `${color}30` }}>
                <div className="flex items-start gap-1.5">
                  <Lightbulb size={14} color={color} className="flex-shrink-0 mt-1" />
                  <p className="text-[13px] text-ink-secondary italic m-0">
                    {lesson.content.caseStudy.insight}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* 本节小结 */}
          <section className="mt-6 p-4 rounded-card bg-accent/5">
            <h2 className="!mt-0 text-[16px]">本节小结</h2>
            <p className="text-[14px] text-ink-secondary leading-relaxed m-0">{lesson.content.summary}</p>
          </section>

          {/* 知识点标签 */}
          <section className="mt-5">
            <div className="text-[11px] text-ink-light mb-1.5">本节知识点</div>
            <div className="flex flex-wrap gap-1.5">
              {lesson.keyPoints.map((kp) => (
                <span
                  key={kp}
                  className="text-[11px] px-2 py-1 rounded-pill"
                  style={{ backgroundColor: `${color}1A`, color }}
                >
                  {kp}
                </span>
              ))}
            </div>
          </section>

          {/* 开始练习 */}
          <section className="mt-7">
            <Button
              block
              size="lg"
              disabled={!canStartQuiz}
              onClick={handleStartQuiz}
            >
              {canStartQuiz ? (
                <>
                  {isReviewMode ? (
                    <>重新练习 · {quizzes.length} 题 <RefreshCw size={16} /></>
                  ) : (
                    <>开始练习 · {quizzes.length} 题 <ArrowRight size={16} /></>
                  )}
                </>
              ) : (
                `继续${isReviewMode ? '回顾' : '阅读'}（${Math.round(readingProgress * 100)}%）`
              )}
            </Button>
            {!canStartQuiz && (
              <p className="text-[11px] text-ink-light text-center mt-1.5">
                读到底部（≥85%）即可开始练习
              </p>
            )}
          </section>

          {/* 上下节导航 */}
          <LessonNav
            prev={prevLesson}
            next={nextLesson}
            onPrev={() => prevLesson && navigate(`/reading/${prevLesson.id}`)}
            onNext={() => nextLesson && navigate(`/reading/${nextLesson.id}`)}
          />
        </article>
      </div>
    </AppLayout>
  );
}
