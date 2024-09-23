import { ConfigProvider, theme } from 'antd';

export default function AntdConfigProvider({ children }) {
  return <>
    <ConfigProvider
      theme={{
        algorithm: theme.compactAlgorithm
      }}
    >
      {children}
    </ConfigProvider>
  </>
}