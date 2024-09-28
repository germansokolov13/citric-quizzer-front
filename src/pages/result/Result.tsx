import Layout from '../../common/components/Layout.tsx';
import { questionStubWithAnswers } from '../../stubs.ts';
import Markdown from 'react-markdown';
import { Checkbox, Divider } from 'antd';

const resultStub = {
  quizName: 'Capitals of Europe',
  userName: 'John Doe',
  finishedAt: new Date(),
};

function getCorrectNumber(questions) {
  return questions
    .reduce(
      (acc, question) => {
        const isCorrect = question.answers.every(answer => answer.isChosen === answer.isCorrect);
        return isCorrect ? acc + 1 : acc;
      },
      0
    );
}

export default function Result() {
  const result = resultStub;
  const questions = new Array(40).fill(null).map(() => questionStubWithAnswers);
  const correctNumber = getCorrectNumber(questions);

  return <Layout>
    <div className="flex flex-col gap-4">
      <div className="flex flex-row">
        <div className="font-bold">Quiz Name:&nbsp;</div>
        <div>{result.quizName}</div>
      </div>

      <div className="flex flex-row">
        <div className="font-bold">User:&nbsp;</div>
        <div>{result.userName}</div>
      </div>

      <div className="flex flex-row">
        <div className="font-bold">Correctly answered:&nbsp;</div>
        <div>{correctNumber} / {questions.length}</div>
      </div>

      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <div>Question #{question.questionNumber}</div>
          <div>Correct: {question.answers.every(answer => answer.isChosen === answer.isCorrect) ? '✅ Yes' : '❌ No'}</div>
          <div className="mb-8">
            <Markdown>{question.content}</Markdown>
          </div>
          <div>
            {question.answers.map((answer, answerIndex) => (
              <div className="mb-4" key={answerIndex}>
                <Checkbox checked={answer.isChosen} disabled />

                <div>
                  {answer.isCorrect && answer.isChosen
                    && <div style={{color: 'green'}}>✅ Correct</div>}
                  {answer.isCorrect && !answer.isChosen
                    && <div style={{color: 'red'}}>❌ Correct</div>}
                  {!answer.isCorrect && answer.isChosen
                    && <div style={{color: 'red'}}>❌ Incorrect</div>}
                </div>

                <div>
                  <Markdown>{answer.content}</Markdown>
                </div>
              </div>
            ))}
          </div>
          {questionIndex < questions.length && <Divider />}
        </div>
      ))}
    </div>
  </Layout>
}