// 路由路径常量
export const ROUTES = {
  TODAY: '/',
  SUBJECT: '/subject/:subjectId',
  READING: '/reading/:lessonId',
  QUIZ_LESSON: '/quiz/lesson/:lessonId',
  QUIZ_CHAPTER: '/quiz/chapter/:chapterId',
  QUIZ_FINAL: '/quiz/final/:subjectId',
  QUIZ_RESULT: '/quiz-result/:quizId',
  CHAPTER_RESULT: '/chapter-result/:chapterId',
  ME: '/me',
  ACTIVATE: '/activate',
  KNOWLEDGE_GRAPH: '/knowledge-graph',
  KNOWLEDGE_GRAPH_SUBJECT: '/knowledge-graph/:subjectId',
  REVIEW: '/review',
  ACHIEVEMENTS: '/achievements',
} as const;

// 路径构建辅助函数
export const to = {
  subject: (id: string) => `/subject/${id}`,
  reading: (lessonId: string) => `/reading/${lessonId}`,
  knowledgeGraphSubject: (id: string) => `/knowledge-graph/${id}`,
  knowledgeGraph: () => '/knowledge-graph',
  quizLesson: (lessonId: string) => `/quiz/lesson/${lessonId}`,
  quizChapter: (chapterId: string) => `/quiz/chapter/${chapterId}`,
  quizFinal: (subjectId: string) => `/quiz/final/${subjectId}`,
  quizResult: (quizId: string) => `/quiz-result/${quizId}`,
  chapterResult: (chapterId: string) => `/chapter-result/${chapterId}`,
  me: () => '/me',
  activate: () => '/activate',
  review: (type?: string) => type ? `/review?type=${type}` : '/review',
  achievements: () => '/achievements',
};
