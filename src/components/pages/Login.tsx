import { ChangeEvent, memo, useState, VFC } from "react";
import { Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");
  const onClickLogin = () => {
    login(userId);
  };
  //e:イベントに対する型を定義
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box backgroundColor="white " w="sm" p={4} borderRadius="md" shadow="md">
        <Heading size="lg" as="h1" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            loading={loading}
            disabled={userId === ""}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
