import { useState } from 'react';
import { Button, Table } from 'antd';
import { blue } from '@ant-design/colors';
import { FaPencilAlt, FaTrash, FaGripVertical } from 'react-icons/fa';
import Markdown from 'react-markdown';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { lorem, questionStub } from '../../stubs.ts';

const questionsStub = new Array(40)
  .fill(null)
  .map((_, i) =>
    ({
      ...questionStub,
      id: i + 15,
      questionNumber: i + 1,
      content: (i % 3 === 0) ? lorem : questionStub.content
    })
  );

export function SortableGrip({ id }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="cursor-move" ref={setNodeRef} style={style } {...attributes} {...listeners}>
      <div style={{ padding: '8px 0 9px' }}>
        <div className="h-8 flex items-center">
          <FaGripVertical style={{ color: blue.primary }} />
        </div>
      </div>
    </div>
  );
}

export default function EditQuestions() {
  const questionsLoaded = questionsStub;
  const [questions, setQuestions] = useState(questionsLoaded);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const {active, over} = event;
    if (active.id !== over.id) {
      setQuestions((items) => {
        const oldIndex = active.data.current.sortable.index;
        const newIndex = over.data.current.sortable.index;
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const columns = [
    {
      dataIndex: 'questionNumber',
      key: 'questionNumber',
      render: (value) => (
        <span className="font-bold">#{value}</span>
      )
    },
    {
      dataIndex: 'content',
      key: 'content',
      ellipsis: true,
      render: (value) => (
        <Markdown className="h-8">{value}</Markdown>
      )
    },
    {
      key: 'actions',
      render: () => (
        <div className="flex items-center gap-2">
          <Button type="primary" shape="circle" icon={<FaPencilAlt />} />
          <Button type="default" variant="solid" shape="circle" color="danger" icon={<FaTrash />} />
        </div>
      ),
    },
  ];

  return <div className="mt-2 max-w-full">
    <h1 className="h1-title mb-2">Questions list</h1>

    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={questions}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-row gap-4">
          <div className="w-32 z-10">
            {questions.map((question) => <SortableGrip key={question.id} id={question.id} />)}
          </div>
          <div className="grow">
            <Table
              rowKey="id"
              className="max-w-full overflow-hidden"
              dataSource={questions}
              columns={columns}
              pagination={{ pageSize: 50 }}
              showHeader={false}
            />
          </div>
        </div>
      </SortableContext>
    </DndContext>
  </div>
}
