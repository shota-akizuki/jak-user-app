import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/button";

// プロパティ名?でオプショナルにできる
type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  //オプショナルなpropsには初期値を渡しておく
  const { children, onClick, loading = false, disabled = false } = props;
  return (
    <Button
      onClick={onClick}
      bg="teal.400"
      color="white"
      isLoading={loading}
      disabled={disabled || loading}
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Button>
  );
});
