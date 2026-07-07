import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { X } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import Button from '@/components/ui/Button';
import QuizCard from '@/components/quiz/QuizCard';
import QuizOption, { type OptionStatus } from '@/components/quiz/QuizOption';
import QuizProgress from '@/components/quiz/QuizProgress';
import HintBlock from '@/components/quiz/HintBlock';
import { useLearningStore } from '@/store/learningStore';
import { useProgressStore } from '@/store/progressStore';
import { getLessonQuizzes, getChapterQuiz, getFinalQuiz, getQuizById } from '@/data';
import type { QuizType } from '@/types';

export default function QuizPage() {
  const { lessonId, chapterId, subjectId } = useParams<{
    lessonId?: string;
    chapterId?: string;
    subjectId?: string;
  }>();
  const navigate = useNavigate();

  const quizSession = useLearningStore((s) => s.quizSession);
  const startQuizSession = useLearningStore((s) => s.startQuizSession);

  // 初始化会话
  useEffect(() => {
    let type: QuizType;
    let refId: string;
    let quizzes: ReturnType<typeof getQuizById>[] = [];

    if (lessonId) {
      type = 'lesson-quiz';
      refId = lessonId;
      quizzes = getLessonQuizzes(lessonId);
    } else if (chapterId) {
      type = 'chapter-quiz';
      refId = chapterId;
      quizzes = getChapterQuiz(chapterId);
    } else if (subjectId) {
      type = 'final-quiz';
      refId = subjectId;
      quizzes = getFinalQuiz(subjectId);
    } else {
      navigate('/');
      return;
    }

    if (quizzes.length === 0) {
      // 空题集时友好回退：回学科/首页，不静默丢失
      const backTo = subjectId ? `/subject/${subjectId}` : lessonId ? `/subject/sociology` : '/';
      navigate(backTo, { replace: true });
      return;
    }

    // 若已经有会话且是同一会话，不重复初始化
    if (quizSession && quizSession.type === type && quizSession.refId === refId) return;
    startQuizSession(type, refId, quizzes.map((q) => q!.id));
  }, [lessonId, chapterId, subjectId, quizSession, startQuizSession, navigate]);

  if (!quizSession) {
    return (
      <AppLayout showTabBar={false}>
        <div className="p-5 text-center text-ink-light">加载中…</div>
      </AppLayout>
    );
  }

  const currentQuizId = quizSession.quizIds[quizSession.currentIndex];
  const currentQuiz = getQuizById(currentQuizId);
  if (!currentQuiz) {
    return (
      <AppLayout showTabBar={false}>
        <div className="p-5 text-center text-ink-light">题目数据缺失</div>
      </AppLayout>
    );
  }

  return <QuizContent key={currentQuizId} />;
}

// ============================================================
// 子组件：负责具体题目渲染与状态
// ============================================================
function QuizContent() {
  const navigate = useNavigate();
  const quizSession = useLearningStore((s) => s.quizSession)!;
  const answerCurrentQuiz = useLearningStore((s) => s.answerCurrentQuiz);
  const recordQuizAnswer = useProgressStore((s) => s.recordQuizAnswer);

  const currentQuizId = quizSession.quizIds[quizSession.currentIndex];
  const currentQuiz = getQuizById(currentQuizId)!;
  const existingAnswer = quizSession.answers[currentQuizId];

  const [selected, setSelected] = useState<string | undefined>(existingAnswer?.selectedOptionId);
  const [hintUsed, setHintUsed] = useState<boolean>(existingAnswer?.hintUsed ?? false);

  // 切题时重置
  useEffect(() => {
    const ans = quizSession.answers[currentQuizId];
    setSelected(ans?.selectedOptionId);
    setHintUsed(ans?.hintUsed ?? false);
  }, [currentQuizId, quizSession.answers]);

  const handleSubmit = () => {
    if (!selected) return;
    const isCorrect = selected === currentQuiz.correctOptionId;
    answerCurrentQuiz(selected, hintUsed);
    // 记录错题（答错且非课程测验的章节/最终测验才记录）
    if (!isCorrect && quizSession.type !== 'lesson-quiz') {
      recordQuizAnswer(currentQuizId, [currentQuizId], isCorrect);
    }
    // 跳转结果页
    navigate(`/quiz-result/${currentQuizId}`);
  };

  const handleExit = () => {
    if (confirm('退出后答题进度将不保留，确定要退出吗？')) {
      // 退出测验会话，不保存任何进度
      useLearningStore.getState().exitQuizSession();
      // 返回学习页面而不是后退
      navigate('/');
    }
  };

  return (
    <AppLayout showTabBar={false}>
      {/* 顶部进度 + 退出 */}
      <header className="sticky top-0 z-20 bg-canvas/95 backdrop-blur-md px-5 pt-3 pb-2">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={handleExit}
            className="w-8 h-8 flex items-center justify-center -ml-1 text-ink-light"
            aria-label="退出"
          >
            <X size={20} />
          </button>
          <div className="flex-1">
            <QuizProgress
              current={quizSession.currentIndex + 1}
              total={quizSession.quizIds.length}
            />
          </div>
        </div>
      </header>

      <div className="px-5 pb-8">
        {/* 题目卡片 */}
        <QuizCard
          index={quizSession.currentIndex}
          total={quizSession.quizIds.length}
          knowledgePoints={currentQuiz.knowledgePoints}
        >
          <h2 className="text-[16px] font-serif text-ink leading-relaxed mb-4">
            {currentQuiz.question}
          </h2>

          <div className="space-y-2.5">
            {currentQuiz.options.map((opt) => {
              let status: OptionStatus = 'default';
              if (selected === opt.id) status = 'selected';
              return (
                <QuizOption
                  key={opt.id}
                  id={opt.id}
                  text={opt.text}
                  status={status}
                  onClick={() => !existingAnswer && setSelected(opt.id)}
                />
              );
            })}
          </div>

          {/* 提示块 */}
          {!existingAnswer && (
            <HintBlock
              hint={currentQuiz.hint}
              used={hintUsed}
              onUse={() => setHintUsed(true)}
            />
          )}
        </QuizCard>

        {/* 提交按钮 */}
        <div className="mt-5">
          <Button
            block
            size="lg"
            disabled={!selected}
            onClick={handleSubmit}
          >
            提交答案
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
