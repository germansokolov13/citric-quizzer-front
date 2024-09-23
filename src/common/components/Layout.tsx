import MainMenu from './MainMenu.tsx';

export default function Layout(props: any) {
  const {children} = props;

  return <>
    <div className="">
      <MainMenu />
    </div>
    <div className="mx-8 my-4">
      {children}
    </div>
  </>;
}
