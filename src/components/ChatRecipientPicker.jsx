import React, { useState } from 'react';
import { useFriendStatus } from '../modules/friend';

const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
];

const ChatRecipientPicker = () => {
  const [recipientId, setRecipientId] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientId);

  return (
    <>
      <li style={{ color: isRecipientOnline ? 'green' : 'black' }}></li>
      <select
        value={recipientId}
        onChange={e => setRecipientId(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  )
}

export default ChatRecipientPicker;
