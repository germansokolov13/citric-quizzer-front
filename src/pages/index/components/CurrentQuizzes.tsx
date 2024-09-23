import { Table, Button } from 'antd';
import { useTranslation } from 'react-i18next';

const stubRow = {
  name: 'one one',
  id: 'one one',
  startedAt: new Date(),
};

const stub = [0, 1, 2].map((_, i) => ({...stubRow, key: i}));

export default function CurrentQuizzes() {
  const {t} = useTranslation();

  const columns = [
    {
      title: t('name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('started-at'),
      dataIndex: 'startedAt',
      key: 'startedAt',
    },
    {
      title: '',
      key: 'actions',
      render: () => (
        <div className="flex items-center">
          <Button className="mr-4" color="primary" variant="solid">{t('resume-quiz')}</Button>
        </div>
      ),
    },
  ];

  return <div className="mb-4">
    <h2 className="h2-title mb-4">Current quizzes</h2>
    <Table dataSource={stub} columns={columns} pagination={false} />
  </div>
};
