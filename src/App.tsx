import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styled from "styled-components";
import {useSelector} from "react-redux";
import { incremented, interesting, selectCount, useAppDispatch } from "./store.ts";
import {useTranslation} from 'react-i18next';
import Layout from './common/components/Layout.tsx';

const Xa = styled.div`
    background-color: red;
`;

function App() {
  const [count, setCount] = useState(0);
  const also = useSelector(selectCount)
  const dispatch = useAppDispatch();

  const {t} = useTranslation();

  return (
    <Layout>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-16">
            <Xa>asdas</Xa>
            <Xa>asdas</Xa>
            <Xa>{t('hello')}</Xa>
            <Xa>asdas</Xa>
            <Xa>asdas</Xa>
            <Xa>asdas</Xa>
            <Xa>asdas</Xa>
            <Xa>asdas</Xa>
        </div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} also {also}
        </button>
      <button onClick={() => dispatch(incremented())}>ALSO</button>
      <button onClick={() => dispatch(interesting(3))}>OOOO</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Layout>
  )
}

export default App
