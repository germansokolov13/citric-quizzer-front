import Layout from '../../common/components/Layout.tsx';
import Markdown from 'react-markdown'
import { Formik } from 'formik';
import { Form, Radio, Checkbox, Input } from 'formik-antd';
import { Button } from 'antd';
import styled from 'styled-components';
import { questionStub } from '../../stubs.ts';

const AnswersGroupStyled = styled.div`
  > div {
      display: flex;
      flex-direction: column;
      > label {
          margin-bottom: 1rem;
          > :first-child {
              margin-right: 0.5rem;
          }
      }
  }
`;

const quizStub = {
  id: 30,
  name: 'Capitals of Europe',
}

export default function AnswerQuestion() {
  const quiz = quizStub;
  const question = questionStub;

  const OptionComponent = question.isMultipleChoice ? Checkbox.Group : Radio.Group;

  return <Layout>
    <div>
      <h1 className="h1-title mb-4">{quiz.name}</h1>
      <h2 className="h2-title mb-4">Question #{question.questionNumber}</h2>
      <div className="mb-8">
        <Markdown>{question.content}</Markdown>
      </div>
      <div>
        <Formik
          initialValues={{ answer: '' }}
          onSubmit={(values) => {
            console.log('Form values:', values);
          }}
        >
          {() => (
            <Form>
              <AnswersGroupStyled>
                {!question.isFreeText && OptionComponent({
                  name: 'answer',
                  options: question.answers.map((answer, index) => ({
                    label: (
                      <div>
                        <Markdown>{answer.content}</Markdown>
                      </div>
                    ),
                    value: index.toString(),
                  })),
                })}
                {question.isFreeText && (
                  <Input.TextArea name="answer" />
                )}
              </AnswersGroupStyled>

              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </Layout>;
}
