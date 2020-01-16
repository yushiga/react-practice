import React from 'react';
import FriendListItem from './components/FriendListItem';
import FriendStatus from './components/FriendStatus';

const App = () => {
  return (
    <div>
      <FriendListItem friend={ {id: 1, name: 'tom'} } />
      <FriendStatus friend={ {id: 1} } />
    </div>
  );
}

export default App;
