import { useToast } from "@chakra-ui/toast";
import { useCallback } from "react";

type Props = {
  title: string;
  //以下のいずれかの文字列しか受け取らないという型の指定
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;
    toast({
      //プロパティ名と変数名が同じ場合はショートハンドで書ける
      title,
      status,
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  }, []);
  return { showMessage };
};
