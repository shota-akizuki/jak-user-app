import { memo, VFC } from "react";
import { Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box backgroundColor="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading size="lg" as="h1" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" />
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
