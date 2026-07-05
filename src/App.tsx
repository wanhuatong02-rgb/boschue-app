import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ROUTES, to } from '@/config/routes';
import ActivationGuard from '@/components/guard/ActivationGuard';
import TodayPage from '@/pages/TodayPage';
import SubjectDetailPage from '@/pages/SubjectDetailPage';
import ReadingPage from '@/pages/ReadingPage';
import QuizPage from '@/pages/QuizPage';
import QuizResultPage from '@/pages/QuizResultPage';
import ChapterResultPage from '@/pages/ChapterResultPage';
import MePage from '@/pages/MePage';
import ActivatePage from '@/pages/ActivatePage';
import KnowledgeGraphPage from '@/pages/KnowledgeGraphPage';
import ReviewPage from '@/pages/ReviewPage';
import AchievementsPage from '@/pages/AchievementsPage';
import KnowledgeNodeUnlockToast from '@/components/knowledge/KnowledgeNodeUnlockToast';
import AchievementToast from '@/components/achievement/AchievementToast';
import SplashSkipButton from '@/components/SplashSkipButton';

function AppRoutes() {
  const navigate = useNavigate();

  const handleViewKnowledgeGraph = () => {
    navigate(to.knowledgeGraph());
  };

  return (
    <>
      <Routes>
        <Route path={ROUTES.ACTIVATE} element={<ActivatePage />} />
        <Route path={ROUTES.TODAY} element={<TodayPage />} />
        <Route path={ROUTES.SUBJECT} element={<SubjectDetailPage />} />
        <Route path={ROUTES.READING} element={<ReadingPage />} />
        <Route path={ROUTES.QUIZ_LESSON} element={<QuizPage />} />
        <Route path={ROUTES.QUIZ_CHAPTER} element={<QuizPage />} />
        <Route path={ROUTES.QUIZ_FINAL} element={<QuizPage />} />
        <Route path={ROUTES.QUIZ_RESULT} element={<QuizResultPage />} />
        <Route path={ROUTES.KNOWLEDGE_GRAPH} element={<KnowledgeGraphPage />} />
        <Route path={ROUTES.KNOWLEDGE_GRAPH_SUBJECT} element={<KnowledgeGraphPage />} />
        <Route path={ROUTES.CHAPTER_RESULT} element={<ChapterResultPage />} />
        <Route path={ROUTES.REVIEW} element={<ReviewPage />} />
        <Route path={ROUTES.ACHIEVEMENTS} element={<AchievementsPage />} />
        <Route path={ROUTES.ME} element={<MePage />} />
        <Route path="*" element={<Navigate to={ROUTES.TODAY} replace />} />
      </Routes>
      <KnowledgeNodeUnlockToast onViewKnowledgeGraph={handleViewKnowledgeGraph} />
      <AchievementToast />
    </>
  );
}

export default function App() {
  return (
    <>
      <ActivationGuard>
        <AppRoutes />
      </ActivationGuard>
      <SplashSkipButton />
    </>
  );
}
