import React from 'react';
import { useFriendStatus } from '../modules/friend';

/**
 * フレンドのオンライン状態を表すコンポーネント
 * @param {object}} props 
 */
const FriendStatus = (props) => {
  // カスタムフックを呼ぶ
  const isOnline = useFriendStatus(props.friend.id);
  if (isOnline === null) {
    return 'Loading...';
  }
  return <div>{isOnline ? 'Online' : 'Offline'}</div>;
}

export default FriendStatus;
