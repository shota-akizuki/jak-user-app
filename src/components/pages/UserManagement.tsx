/* eslint-disable react-hooks/exhaustive-deps */

import { Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { Spinner } from "@chakra-ui/spinner";
import {} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/react";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";

export const UserManagement: VFC = memo(() => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  console.log(selectedUser);
  useEffect(() => getUsers(), []);
  //propsとして渡す関数は毎回再生成するとレンダリングの効率が悪いのでuseCallbackでmemo化する
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => {
            return (
              <WrapItem mx="auto" key={user.id}>
                <UserCard
                  id={user.id}
                  onClick={onClickUser}
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                ></UserCard>
              </WrapItem>
            );
          })}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
