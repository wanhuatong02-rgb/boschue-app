import { useNavigate, useParams } from 'react-router-dom';
import { Check, X, ArrowRight, BookOpen, ArrowLeft } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useLearningStore } from '@/store/learningStore';
import { useProgressStore } from '@/store/progressStore';
import { getQuizById, getLessonById } from '@/data';
import { getSubjectConfig } from '@/config/subjects';
import type { QuizType } from '@/types';

export default function QuizResultPage() {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const quiz = quizId ? getQuizById(quizId) : undefined;

  const quizSession = useLearningStore((s) => s.quizSession);
  const isReviewMode = useLearningStore((s) => s.isReviewMode);
  const goToNextQuiz = useLearningStore((s) => s.goToNextQuiz);
  const endQuizSession = useLearningStore((s) => s.endQuizSession);
  const startQuizSession = useLearningStore((s) => s.startQuizSession);
  const markLessonCompleted = useProgressStore((s) => s.markLessonCompleted);
  const markLessonReviewed = useProgressStore((s) => s.markLessonReviewed);
  const updateStreak = useProgressStore((s) => s.updateStreak);
  const checkAndUnlockAchievements = useProgressStore((s) => s.checkAndUnlockAchievements);
  const recordChapterQuizResult = useProgressStore((s) => s.recordChapterQuizResult);
  const recordFinalQuizResult = useProgressStore((s) => s.recordFinalQuizResult);

  if (!quiz || !quizSession) {
    return (
      <AppLayout showTabBar={false}>
        <div className="p-5 text-center text-ink-light">会话已过期</div>
      </AppLayout>
    );
  }

  const answer = quizId ? quizSession.answers[quizId] : undefined;
  if (!answer) {
    navigate(-1);
    return null;
  }

  const isCorrect = answer.isCorrect;
  const correctOption = quiz.options.find((o) => o.id === quiz.correctOptionId);
  const selectedOption = quiz.options.find((o) => o.id === answer.selectedOptionId);
  const subjectConfig = getSubjectConfig(quiz.subjectId);
  const color = subjectConfig?.color ?? '#7AAEC0';

  const hasNext = quizSession.currentIndex < quizSession.quizIds.length - 1;

  const handleNext = () => {
    if (!quizSession) return;
    if (hasNext) {
      if (isCorrect) {
        // 只有在答对的情况下才继续下一题
        goToNextQuiz();
        // 跳回 QuizPage 渲染下一题（URL 仍指向原 refId）
        const backRoute =
          quizSession.type === 'lesson-quiz'
            ? `/quiz/lesson/${quizSession.refId}`
            : quizSession.type === 'chapter-quiz'
              ? `/quiz/chapter/${quizSession.refId}`
              : `/quiz/final/${quizSession.refId}`;
        navigate(backRoute);
      } else {
        // 如果答错，则什么都不做，用户需要使用重新开始按钮
      }
      return;
    }

    // 到达最后一题时
    if (isCorrect) {
      // 如果最后一题答对，则结束测验
      const result = endQuizSession();
      if (!result) return;

      // 根据类型触发不同完成逻辑
      if (quizSession.type === 'lesson-quiz') {
        // 复习模式下记录复习，常规模式标记完成
        if (isReviewMode) {
          markLessonReviewed(quizSession.refId);
        } else {
          markLessonCompleted(quizSession.refId);
        }
        updateStreak();
        navigate('/', { replace: true });
      } else if (quizSession.type === 'chapter-quiz') {
        recordChapterQuizResult(quizSession.refId, result.accuracy);
        updateStreak();
        navigate(`/chapter-result/${quizSession.refId}`, { replace: true });
      } else if (quizSession.type === 'final-quiz') {
        recordFinalQuizResult(quizSession.refId, result.accuracy);
        updateStreak();
        navigate(`/chapter-result/final-${quizSession.refId}`, { replace: true });
      }
    } else {
      // 如果最后一题答错，也不做任何操作，用户需要重新开始整个测验
    }
  };

  const handleRestart = () => {
    // 重启测验会话，回到第一题
    const { quizSession: currentSession } = useLearningStore.getState();
    if (!currentSession) return;

    // 重新开始相同的测验
    startQuizSession(currentSession.type, currentSession.refId, currentSession.quizIds);

    // 导航到测验页面
    const route =
      currentSession.type === 'lesson-quiz'
        ? `/quiz/lesson/${currentSession.refId}`
        : currentSession.type === 'chapter-quiz'
          ? `/quiz/chapter/${currentSession.refId}`
          : `/quiz/final/${currentSession.refId}`;
    navigate(route);
  };

  const handleReturnToLesson = () => {
    // 直接返回主页（学习页面），不保存当前测验的进度
    useLearningStore.getState().exitQuizSession();
    navigate('/', { replace: true });
  };

  const lesson = quiz.type === 'lesson-quiz' ? getLessonById(quiz.refId) : null;

  return (
    <AppLayout showTabBar={false}>
      <div className="px-5 pt-6 pb-8">
        {/* 正误反馈 */}
        <div className="text-center mb-6 animate-scale-in">
          <div
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3"
            style={{
              backgroundColor: isCorrect ? '#E8F5E8' : '#F5E8E5',
              color: isCorrect ? '#7BB661' : '#D08068',
            }}
          >
            {isCorrect ? <Check size={40} strokeWidth={3} /> : <X size={40} strokeWidth={3} />}
          </div>
          <h1 className="text-[22px] font-serif font-semibold text-ink">
            {isCorrect ? '答对了！' : '再试一次吧'}
          </h1>
          <p className="text-[12px] text-ink-light mt-1">
            {isCorrect ? '继续保持' : '错误是学习的一部分'}
          </p>
        </div>

        {/* 题目回顾 */}
        <Card padding="md" className="mb-3">
          <div className="text-[11px] text-ink-light mb-1.5">
            {lesson ? lesson.title : quiz.type === 'chapter-quiz' ? '章节测验' : '通关测验'}
            {' · '}第 {quizSession.currentIndex + 1} / {quizSession.quizIds.length} 题
          </div>
          <p className="text-[14px] font-serif text-ink leading-relaxed">{quiz.question}</p>
        </Card>

        {/* 答案对比 */}
        <div className="space-y-2 mb-4">
          {!isCorrect && selectedOption && (
            <div className="p-3 rounded-card bg-psychology-light border border-psychology/30">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-psychology text-white text-[11px] font-semibold flex items-center justify-center">
                  {selectedOption.id}
                </span>
                <span className="text-[11px] text-psychology font-medium">你的答案</span>
              </div>
              <p className="text-[13px] text-ink-secondary font-serif ml-7">{selectedOption.text}</p>
            </div>
          )}
          <div className="p-3 rounded-card bg-economics-light border border-economics/30">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 rounded-full bg-economics text-white text-[11px] font-semibold flex items-center justify-center">
                {correctOption!.id}
              </span>
              <span className="text-[11px] text-economics font-medium">正确答案</span>
            </div>
            <p className="text-[13px] text-ink font-serif ml-7">{correctOption!.text}</p>
          </div>
        </div>

        {/* 解析 */}
        <Card padding="md" className="mb-5">
          <div className="flex items-center gap-1.5 mb-2" style={{ color }}>
            <BookOpen size={14} />
            <span className="text-[12px] font-semibold">解析</span>
          </div>
          <p className="text-[14px] text-ink-secondary leading-relaxed font-serif m-0">
            {quiz.explanation}
          </p>
          {quiz.knowledgePoints.length > 0 && (
            <div className="mt-3 pt-3 border-t border-accent/10 flex flex-wrap gap-1.5">
              {quiz.knowledgePoints.map((kp) => (
                <span
                  key={kp}
                  className="text-[10px] px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: `${color}1A`, color }}
                >
                  {kp}
                </span>
              ))}
            </div>
          )}
        </Card>

        {/* 下一题 / 重新答题 / 完成 */}
        <div className="space-y-3">
          {hasNext ? (
            // 如果不是最后一题
            isCorrect ? (
              // 答对了显示下一题按钮
              <Button block size="lg" onClick={handleNext}>
                <>下一题 <ArrowRight size={16} /></>
              </Button>
            ) : (
              // 答错了显示重新开始按钮
              <Button block size="lg" onClick={handleRestart}>
                从第一题重新开始
              </Button>
            )
          ) : (
            // 如果是最后一题
            isCorrect ? (
              // 最后一题答对了显示完成按钮
              <Button block size="lg" onClick={handleNext}>
                {quizSession.type === 'lesson-quiz' ? (
                  '完成本节'
                ) : quizSession.type === 'chapter-quiz' ? (
                  '查看章节结果'
                ) : (
                  '查看通关结果'
                )}
              </Button>
            ) : (
              // 最后一题答错了显示重新开始按钮
              <Button block size="lg" onClick={handleRestart}>
                从第一题重新开始
              </Button>
            )
          )}

          {/* 返回学习页面按钮 */}
          <Button
            block
            size="lg"
            variant="ghost"
            onClick={handleReturnToLesson}
          >
            <ArrowLeft size={16} className="mr-2" />
            返回主页
          </Button>
        </div>

        {!hasNext && quizSession.type === 'lesson-quiz' && (
          <p className="text-[11px] text-ink-light text-center mt-2">
            完成后将更新连击与进度
          </p>
        )}
      </div>
    </AppLayout>
  );
}
