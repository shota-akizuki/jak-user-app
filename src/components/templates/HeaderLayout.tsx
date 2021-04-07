import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

//タグで囲った要素の型の定義
type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
