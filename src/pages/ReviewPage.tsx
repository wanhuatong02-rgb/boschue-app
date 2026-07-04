import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, RefreshCw, BookOpen, Target, CheckCircle, XCircle } from 'lucide-react';
import { useMemo } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import SubjectIcon from '@/components/subject/SubjectIcon';
import { useProgressStore } from '@/store/progressStore';
import { useLearningStore } from '@/store/learningStore';
import { getSubjectConfig } from '@/config/subjects';
import { getLessonById } from '@/data';
import { to } from '@/config/routes';

export default function ReviewPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const reviewType = searchParams.get('type') ?? 'spaced';
  const startLesson = useLearningStore((s) => s.startLesson);

  const getLessonsForReview = useProgressStore((s) => s.getLessonsForReview);
  const getWrongQuizzes = useProgressStore((s) => s.getWrongQuizzes);
  const clearWrongQuiz = useProgressStore((s) => s.clearWrongQuiz);

  const lessonsForReview = getLessonsForReview(0);
  const wrongQuizzes = getWrongQuizzes();

  const title = reviewType === 'wrong' ? '错题重练' : '复习课程';
  const Icon = reviewType === 'wrong' ? Target : RefreshCw;
  const color = reviewType === 'wrong' ? '#D08068' : '#7AAEC0';

  // 进入复习模式并跳转阅读页
  const handleReviewLesson = (lessonId: string) => {
    startLesson(lessonId, true); // 标记为复习模式
    navigate(to.reading(lessonId));
  };

  return (
    <AppLayout>
      <header className="px-5 pt-6 pb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1.5 -ml-1.5 rounded-full hover:bg-canvas transition-colors">
            <ArrowLeft size={20} color="#5A5A5A" />
          </button>
          <div className="flex items-center gap-2">
            <Icon size={20} color={color} />
            <h1 className="text-[18px] font-serif font-semibold text-ink">{title}</h1>
          </div>
        </div>
      </header>

      <div className="px-5 pb-8 space-y-4">
        {/* Tab 切换 */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => navigate(to.review('spaced'))}
            className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-colors ${
              reviewType === 'spaced'
                ? 'bg-accent text-white'
                : 'bg-canvas text-ink-secondary hover:bg-accent/10'
            }`}
          >
            <RefreshCw size={12} className="inline mr-1" />间隔复习
          </button>
          <button
            onClick={() => navigate(to.review('wrong'))}
            className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-colors ${
              reviewType === 'wrong'
                ? 'bg-psychology text-white'
                : 'bg-canvas text-ink-secondary hover:bg-psychology/10'
            }`}
          >
            <Target size={12} className="inline mr-1" />错题重练 ({wrongQuizzes.length})
          </button>
        </div>

        {reviewType === 'spaced' ? (
          // 间隔复习列表
          lessonsForReview.length > 0 ? (
            <div className="space-y-2.5">
              <p className="text-[12px] text-ink-light mb-2">
                根据艾宾浩斯遗忘曲线，以下课程已达到复习时机：
              </p>
              {lessonsForReview.map((lesson) => {
                const subjectConfig = getSubjectConfig(lesson.subjectId);
                const lessonDetail = getLessonById(lesson.id);
                return (
                  <Card key={lesson.id} padding="md" className="hover:shadow-card-hover transition-shadow">
                    <button
                      className="w-full flex items-center gap-3"
                      onClick={() => handleReviewLesson(lesson.id)}
                    >
                      <SubjectIcon subjectId={lesson.subjectId} size={36} />
                      <div className="flex-1 text-left">
                        <div className="text-[13px] font-medium text-ink">{lesson.title}</div>
                        <div className="text-[11px] text-ink-light mt-0.5">
                          {subjectConfig?.name} · {lessonDetail?.estimatedMinutes ?? 12} 分钟
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-psychology">
                        <RefreshCw size={12} />
                        <span>复习</span>
                      </div>
                    </button>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card padding="lg" className="text-center">
              <RefreshCw size={32} color="#7AAEC0" className="mx-auto mb-2" />
              <div className="text-[14px] text-ink-secondary mb-1">暂无需要复习的课程</div>
              <div className="text-[12px] text-ink-light">完成课程后，系统会根据记忆曲线安排复习</div>
            </Card>
          )
        ) : (
          // 错题重练列表
          wrongQuizzes.length > 0 ? (
            <div className="space-y-2.5">
              <p className="text-[12px] text-ink-light mb-2">
                以下是答错的题目，整理后方便集中重练：
              </p>
              {wrongQuizzes.map((quiz) => {
                const subjectConfig = getSubjectConfig(quiz.subjectId);
                return (
                  <Card key={quiz.id} padding="md" className="hover:shadow-card-hover transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-psychology/10 flex items-center justify-center mt-0.5">
                        <XCircle size={18} color="#D08068" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-[13px] font-medium text-ink mb-1">{quiz.question}</div>
                        <div className="text-[11px] text-ink-light">
                          {subjectConfig?.name} · 知识点：{quiz.knowledgePoints.join('、')}
                        </div>
                        <div className="mt-2 space-y-1.5">
                          {quiz.options.map((opt) => (
                            <div
                              key={opt.id}
                              className={`text-[12px] px-2 py-1 rounded ${
                                opt.id === quiz.correctOptionId
                                  ? 'bg-success/10 text-success'
                                  : 'bg-error/5 text-ink-secondary'
                              }`}
                            >
                              {opt.id}. {opt.text}
                            </div>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          clearWrongQuiz(quiz.id);
                        }}
                        className="p-1.5 rounded-full hover:bg-canvas transition-colors"
                        title="已掌握，从列表移除"
                      >
                        <CheckCircle size={16} color="#7BB661" />
                      </button>
                    </div>
                  </Card>
                );
              })}
              <Card padding="md" className="bg-accent/5 border border-accent/20">
                <div className="flex items-start gap-3">
                  <BookOpen size={20} color="#7AAEC0" className="mt-0.5" />
                  <div>
                    <div className="text-[13px] font-medium text-ink">建议学习步骤</div>
                    <ol className="text-[12px] text-ink-secondary mt-1.5 space-y-1 list-decimal list-inside">
                      <li>先回顾相关课程的知识点</li>
                      <li>理解正确答案的解析</li>
                      <li>点击绿色 ✓ 标记为"已掌握"</li>
                    </ol>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <Card padding="lg" className="text-center">
              <Target size={32} color="#7BB661" className="mx-auto mb-2" />
              <div className="text-[14px] text-ink-secondary mb-1">暂无错题记录</div>
              <div className="text-[12px] text-ink-light">继续保持，答题正确后会自动记录错题</div>
            </Card>
          )
        )}
      </div>
    </AppLayout>
  );
}
