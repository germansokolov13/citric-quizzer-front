import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  CodeToggle,
  CreateLink,
  linkDialogPlugin,
  imagePlugin,
  InsertImage,
  InsertThematicBreak, ListsToggle, linkPlugin,
} from '@mdxeditor/editor';
import { useDebouncedCallback } from 'use-debounce';
import InsertImageDialog from './InsertImageDialog.tsx';

const DEBOUNCE_DELAY = 200;

export default function MarkdownEditor({ value, setValue }) {
  const setValueDebounced = useDebouncedCallback(
    (value) => setValue(value),
    DEBOUNCE_DELAY
  );

  return <>
    <MDXEditor
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin({
          ImageDialog: InsertImageDialog,
        }),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <BoldItalicUnderlineToggles options={['Bold', 'Italic']} />
              <CodeToggle />
              <CreateLink />
              <InsertImage />
              <InsertThematicBreak />
              <ListsToggle options={['bullet', 'number']} />
            </>
          )
        })
      ]}
      markdown={value}
      onChange={(value) => {
        setValueDebounced(value);
      }}
    />
  </>
}
