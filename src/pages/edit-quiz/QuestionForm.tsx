import { questionStub } from '../../stubs.ts';
import Layout from '../../common/components/Layout.tsx';
import { Checkbox, Form, InputNumber } from 'formik-antd';
import { Button, Divider } from 'antd';
import { FieldArray, Formik } from 'formik';
import { FaPlus, FaMinus } from 'react-icons/fa';
import MarkdownEditor from '../../common/components/markdown-editor/MarkdownEditor.tsx';

export default function QuestionForm() {
  const question = questionStub;

  const initialValues = {
    questionNumber: question.questionNumber,
    isMultipleChoice: question.isMultipleChoice,
    isFreeText: question.isFreeText,
    content: question.content,
    answers: question.answers.map((answer) => ({
      content: answer.content,
      isCorrect: false
    })),
  };

  const answerInitialValues = {
    content: '',
    isCorrect: false
  };

  return <Layout>
    <div>
      <h1 className="h1-title mb-4">Edit question</h1>

      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log('Form values:', values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="flex flex-col gap-4 mb-4">
                <label className="flex flex-col">
                  Question Number
                  <InputNumber name="questionNumber" min="1" />
                </label>
                <div>
                  Content
                  <MarkdownEditor
                    value={values.content}
                    setValue={(value) => {
                      setFieldValue('content', value);
                    }}
                  />
                </div>
                <Checkbox name="isFreeText">Free Text</Checkbox>
                <Checkbox name="isMultipleChoice">Multiple Choice</Checkbox>
                <Divider className="m-0" />
              </div>
              <div className="flex flex-col gap-4 mb-4">
                <h2 className="h2-title">Answer Variants</h2>

                {values.answers.map((_, index) => (
                  <div key={index}>
                    <h3 className="h3-title">#{index + 1}</h3>
                    <Checkbox name={`answers[${index}].isCorrect`}>Correct</Checkbox>
                    <div>
                      <MarkdownEditor
                        value={values.answers[index].content}
                        setValue={(value) => {
                          setFieldValue(`answers[${index}].content`, value);
                        }}
                      />
                    </div>
                  </div>
                ))}

                <div className="flex flex-row gap-2">
                  <FieldArray name="answers">
                    {({ push, pop }) => (
                      <>
                        <Button
                          type="default"
                          variant="solid"
                          shape="circle"
                          color="danger"
                          icon={<FaMinus />}
                          onClick={() => pop()}
                        />
                        <Button
                          type="primary"
                          shape="circle"
                          icon={<FaPlus />}
                          onClick={() => push(answerInitialValues)}
                        />
                      </>
                    )}
                  </FieldArray>
                </div>
              </div>

              <Divider className="my-4" />

              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </Layout>
}
