import { closeImageDialog$, imageDialogState$, insertImage$, useCellValues, usePublisher } from '@mdxeditor/editor';
import { Button, Modal } from 'antd';
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';

export default function InsertImageDialog() {
  const initialValues = {
    url: '',
    alt: '',
    title: '',
  };

  const [imageDialogState] = useCellValues(imageDialogState$);
  const isOpen = imageDialogState.type !== 'inactive';

  const insertImage = usePublisher(insertImage$);
  const closeImageDialog = usePublisher(closeImageDialog$);

  const handleClose = () => closeImageDialog();

  const handleInsert = ({ url, alt, title }) => {
    insertImage({
      src: url,
      altText: alt,
      title: title,
    });
    handleClose();
  };

  return (
    <Modal
      title="Insert Image"
      open={isOpen}
      onCancel={handleClose}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleInsert}
      >
        {() => (
          <Form>
            <label>
              URL
              <Input name="url" />
            </label>
            <label>
              Alt
              <Input name="alt" />
            </label>
            <label>
              Title
              <Input name="title" />
            </label>

            <Button key="cancel" onClick={handleClose}>
              Cancel
            </Button>,
            <Button key="insert" type="primary" htmlType="submit">
              Insert
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};