import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux'
import {store} from './store.ts';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.json';
import Index from './pages/index/components/Index.tsx';
import Results from './pages/results/Results.tsx';
import Settings from './pages/settings/Settings.tsx';
import AntdConfigProvider from './common/components/AntdConfigProvider.tsx';
import AnswerQuestion from './pages/answer-question/AnswerQuestion.tsx';
import EditQuiz from './pages/edit-quiz/EditQuiz.tsx';

i18next.use(initReactI18next).init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
        en: {
            translation: en,
        },
    },
    // if you see an error like: 'Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz'
    // set returnNull to false (and also in the i18next.d.ts options)
    // returnNull: false,
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/results',
        element: <Results />,
    },
    {
        path: '/settings',
        element: <Settings />,
    },
    {
        path: '/answer-question',
        element: <AnswerQuestion />,
    },
    {
        path: '/edit-quiz',
        element: <EditQuiz />,
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <AntdConfigProvider>
              <RouterProvider router={router} />
          </AntdConfigProvider>
      </Provider>
  </StrictMode>,
)
