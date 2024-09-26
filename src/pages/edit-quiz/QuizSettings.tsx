import { Checkbox, Form, Input } from 'formik-antd';
import { Button } from 'antd';
import { Formik } from 'formik';

export default function QuizSettings({ quiz }) {
  const initialValues = {
    name: quiz.name,
    description: quiz.description,
    canGoBack: quiz.canGoBack,
    randomOrder: quiz.randomOrder,
  };

  return <div className="mt-2 max-w-full">
    <h1 className="h1-title mb-4">Quiz Settings</h1>

    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log('Form values:', values);
        }}
      >
        {() => (
          <Form>
            <div className="flex flex-col gap-4 mb-4 max-w-xl">
              <label>
                Name
                <Input name="name" />
              </label>
              <label>
                Description
                <Input.TextArea name="description" />
              </label>
              <Checkbox name="canGoBack">Can go to previous question</Checkbox>
              <Checkbox name="randomOrder">Questions in randomized order</Checkbox>
            </div>

            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  </div>;
}
