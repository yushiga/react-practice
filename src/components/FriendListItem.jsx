import React from 'react';
import { useFriendStatus } from '../modules/friend';

const FriendListItem = (props) => {
  const isOnline = useFriendStatus(props.friend.id);
  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}

export default FriendListItem;
