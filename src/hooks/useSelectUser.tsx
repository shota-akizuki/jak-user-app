import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

//選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    //受け取ったidとusersを元に対象のuserを求める
    const { id, users, onOpen } = props;
    //findで条件に一致する要素を返す
    const targetUser = users.find((user) => user.id === id);
    //!で、undefinedの可能性はないということを伝える
    setSelectedUser(targetUser!);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
