import React from 'react';
import { useFriendStatus } from '../modules/friend';

const FriendStatus = (props) => {
  const isOnline = useFriendStatus(props.friend.id);
  if (isOnline === null) {
    return 'Loading...';
  }
  return <div>{isOnline ? 'Online' : 'Offline'}</div>;
}

export default FriendStatus;
