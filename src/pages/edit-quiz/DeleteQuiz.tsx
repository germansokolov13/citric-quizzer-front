import { Button } from 'antd';
import { FaTrash } from 'react-icons/fa';

export default function DeleteQuiz({ quiz }) {
  return <>
    <h1 className="h1-title mb-4">Delete Quiz {quiz.id}?</h1>
    <Button className="font-bold" type="default" variant="solid" color="danger">
      Delete Quiz <FaTrash />
    </Button>
  </>
}
