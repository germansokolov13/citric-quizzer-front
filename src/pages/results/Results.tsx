import Layout from '../../common/components/Layout.tsx';
import { Button, Table } from 'antd';
import { FaEye } from 'react-icons/fa';

const stub = [];

export default function Results() {
  const columns = [
    {
      title: 'quizName',
      dataIndex: 'quizName',
      key: 'quizName',
    },
    {
      title: 'userName',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'finished At',
      dataIndex: 'finishedAt',
      key: 'finishedAt',
    },
    {
      title: '',
      key: 'actions',
      render: () => (
        <div className="flex items-center">
          <Button type="primary" shape="circle" icon={<FaEye />} />
        </div>
      ),
    },
  ];

  return <Layout>
    <h1 className="h1-title mb-4">Results List</h1>
    <Table dataSource={stub} columns={columns} pagination={{ pageSize: 50 }} />
  </Layout>;
}
