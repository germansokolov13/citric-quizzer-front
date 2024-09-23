import Layout from '../../../common/components/Layout.tsx';
import CurrentQuizzes from './CurrentQuizzes.tsx';
import QuizzesList from './QuizzesList.tsx';

export default function Index() {
  return <Layout>
    <CurrentQuizzes />
    <QuizzesList />
  </Layout>;
}
