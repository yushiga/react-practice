import { useState, useEffect } from 'react';
import { chatApi } from '../apis/ChatAPI';

export const useFriendStatus = (friendID) => {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    const handleStatusChange = (status) => {
      console.log('!!!!! handleStatusChange !!!!!');
      return setIsOnline(status.isOnline);
    }

    chatApi.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      chatApi.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
