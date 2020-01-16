import { useState, useEffect } from 'react';
import { chatApi } from '../apis/ChatAPI';

/**
 * フレンドのオンライン状態を更新するカスタムフック
 * @param {string*} friendID フレンドID
 * @return {boolean} オンライン状態(true：オンライン、false：オフライン、null：ローディング中）
 */
export const useFriendStatus = (friendID) => {
  // useState で state.isOnline の初期値 null とする
  const [isOnline, setIsOnline] = useState(null);

  // useEffect 内でフレンドのオンライン状態購読API実行
  useEffect(() => {
    // status 更新関数
    const handleStatusChange = (status) => {
      console.log('!!!!! handleStatusChange !!!!!');
      return setIsOnline(status.isOnline);
    }

    // オンライン状態購読API
    chatApi.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      // クリーンアップ時にオンライン状態購読解除API実行
      chatApi.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
