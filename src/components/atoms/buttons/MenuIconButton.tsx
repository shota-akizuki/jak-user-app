import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  //引数なしのただの関数の型
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      onClick={onOpen}
      size="sm"
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      variant="unstyled"
      display={{ base: "bl ock", md: "none" }}
    />
  );
});
