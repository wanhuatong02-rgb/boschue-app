import { create } from 'zustand';
import type { QuizSession, QuizAnswer, QuizSessionResult, QuizType, KnowledgePointStat } from '@/types';
import { getQuizById } from '@/data';

// 学习会话状态（非持久化）
interface LearningStore {
  currentLessonId: string | null;
  /** 当前是否处于复习模式（区别于首次学习） */
  isReviewMode: boolean;
  quizSession: QuizSession | null;
  lastSessionResult: QuizSessionResult | null;

  startLesson: (lessonId: string, isReview?: boolean) => void;
  exitLesson: () => void;

  startQuizSession: (type: QuizType, refId: string, quizIds: string[]) => void;
  answerCurrentQuiz: (selectedOptionId: string, hintUsed: boolean) => QuizAnswer | null;
  goToNextQuiz: () => boolean;
  endQuizSession: () => QuizSessionResult | null;
  exitQuizSession: () => void;
  clearLastSessionResult: () => void;
}

export const useLearningStore = create<LearningStore>((set, get) => ({
  currentLessonId: null,
  isReviewMode: false,
  quizSession: null,
  lastSessionResult: null,

  startLesson: (lessonId, isReview = false) => {
    set({ currentLessonId: lessonId, isReviewMode: isReview });
  },

  exitLesson: () => {
    set({ currentLessonId: null, isReviewMode: false });
  },

  startQuizSession: (type, refId, quizIds) => {
    set({
      quizSession: {
        type,
        refId,
        quizIds,
        currentIndex: 0,
        answers: {},
        startedAt: Date.now(),
      },
      lastSessionResult: null,
    });
  },

  answerCurrentQuiz: (selectedOptionId, hintUsed) => {
    const session = get().quizSession;
    if (!session) return null;
    const quizId = session.quizIds[session.currentIndex];
    const quiz = getQuizById(quizId);
    if (!quiz) return null;
    const answer: QuizAnswer = {
      quizId,
      selectedOptionId,
      isCorrect: selectedOptionId === quiz.correctOptionId,
      hintUsed,
      answeredAt: Date.now(),
    };
    set({
      quizSession: {
        ...session,
        answers: { ...session.answers, [quizId]: answer },
      },
    });
    return answer;
  },

  goToNextQuiz: () => {
    const session = get().quizSession;
    if (!session) return false;
    const nextIndex = session.currentIndex + 1;
    if (nextIndex >= session.quizIds.length) return false;
    set({ quizSession: { ...session, currentIndex: nextIndex } });
    return true;
  },

  endQuizSession: () => {
    const session = get().quizSession;
    if (!session) return null;
    const answers = Object.values(session.answers);
    const total = session.quizIds.length;
    const correct = answers.filter((a) => a.isCorrect).length;
    const accuracy = total > 0 ? (correct / total) * 100 : 0;
    const durationSec = Math.round((Date.now() - session.startedAt) / 1000);

    // 按知识点聚合
    const pointMap = new Map<string, { total: number; correct: number }>();
    for (const answer of answers) {
      const quiz = getQuizById(answer.quizId);
      if (!quiz) continue;
      for (const point of quiz.knowledgePoints) {
        const prev = pointMap.get(point) ?? { total: 0, correct: 0 };
        pointMap.set(point, {
          total: prev.total + 1,
          correct: prev.correct + (answer.isCorrect ? 1 : 0),
        });
      }
    }
    const knowledgePointStats: KnowledgePointStat[] = Array.from(pointMap.entries()).map(
      ([point, stat]) => ({
        point,
        total: stat.total,
        correct: stat.correct,
        mastery: stat.total > 0 ? (stat.correct / stat.total) * 100 : 0,
      }),
    );

    const result: QuizSessionResult = {
      type: session.type,
      refId: session.refId,
      total,
      correct,
      accuracy,
      durationSec,
      answers,
      knowledgePointStats,
    };
    set({ lastSessionResult: result, quizSession: null });
    return result;
  },

  exitQuizSession: () => {
    set({ quizSession: null });
  },

  clearLastSessionResult: () => {
    set({ lastSessionResult: null });
  },
}));
