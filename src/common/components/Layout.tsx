import MainMenu from './MainMenu.tsx';

export default function Layout(props: any) {
  const {children} = props;

  return <>
    <div>
      <MainMenu />
    </div>
    <div>
      {children}
    </div>
  </>;
}
