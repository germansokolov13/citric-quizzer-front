import { Table, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaPencilAlt } from 'react-icons/fa';

enum ListItemType {
  Item = 'item',
  Folder = 'folder',
}

const stubRow = {
  name: 'one one',
  id: 'one one',
  type: ListItemType.Item,
  startedAt: new Date(),
};

const stubFolder = {
  name: 'many things!!',
  id: 'one one',
  type: ListItemType.Folder,
};

const stub = [
  ...([0, 1, 2].map((_, i) => ({...stubFolder, key: i}))),
  ...([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => ({...stubRow, key: i + 3}))),
];

export default function QuizzesList() {
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
      render: (_, row) => (
        <div className="flex items-center">
          {row.type === ListItemType.Folder && <>
            <Button className="mr-4" color="primary" variant="outlined">{t('open-folder')}</Button>
          </>}
          {row.type === ListItemType.Item && <>
            <Button className="mr-4" color="primary" variant="outlined">{t('start-quiz')}</Button>
          </>}
          <Button type="primary" shape="circle" icon={<FaPencilAlt />} />
        </div>
      ),
    },
  ];

  return <>
    <h2 className="h2-title mb-4">Quizzes List</h2>
    <Table dataSource={stub} columns={columns} pagination={{ pageSize: 50 }} />
  </>
};
