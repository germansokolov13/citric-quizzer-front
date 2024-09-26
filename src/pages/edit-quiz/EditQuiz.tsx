import Layout from '../../common/components/Layout.tsx';
import { Tabs } from 'antd';
import QuizSettings from './QuizSettings.tsx';
import EditQuestions from './EditQuestions.tsx';
import DeleteQuiz from './DeleteQuiz.tsx';

const quizStub = {
  id: 42,
  name: 'Capitals of Europe',
  descriptions: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  cancanGoBack: true,
  randomOrder: false,
};

export default function EditQuiz() {
  const quiz = quizStub;

  const items = [
    {
      key: 'settings',
      label: 'Settings',
      children: <QuizSettings quiz={quiz} />,
    },
    {
      key: 'questions',
      label: 'Questions',
      children: <EditQuestions />,
    },
    {
      key: 'delete',
      label: 'Delete',
      children: <DeleteQuiz quiz={quiz} />,
    },
  ];

  return <>
    <Layout>
      <h1 className="h1-title mb-4">Edit Quiz "{quiz.name}"</h1>
      <Tabs defaultActiveKey="settings" items={items} />
    </Layout>
  </>
}
