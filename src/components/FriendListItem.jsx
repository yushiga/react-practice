import React from 'react';
import { useFriendStatus } from '../modules/friend';

/**
 * フレンドリストを表すコンポーネント
 * @param {object} props props
 */
const FriendListItem = (props) => {
  // カスタムフックを呼ぶ
  const isOnline = useFriendStatus(props.friend.id);
  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}

export default FriendListItem;
