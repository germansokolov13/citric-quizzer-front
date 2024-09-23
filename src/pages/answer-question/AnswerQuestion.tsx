import Layout from '../../common/components/Layout.tsx';
import Markdown from 'react-markdown'
import { Formik } from 'formik';
import { Form, Radio, Checkbox, Input } from 'formik-antd';
import { Button } from 'antd';
import styled from 'styled-components';

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

const lorem = `Lorem ipsum dolor sit amet, *consectetur* adipiscing elit.

+ Sed non risus.
+ Sed non risus.
+ Sed non risus.
+ Sed non risus.

Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.`;

const questionStub = {
  id: 42,
  questionNumber: 15,
  content: 'What is the *capital* of France?',
  isMultipleChoice: true,
  isFreeText: false,
  answers: [
    { content: 'Paris' },
    { content: '*London*' },
    { content: lorem },
    { content: 'Madrid'},
  ],
};

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
