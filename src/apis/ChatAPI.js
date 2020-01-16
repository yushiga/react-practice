import axios from 'axios';

export const chatApi = {
  subscribeToFriendStatus(friendID, handleStatusChange) {
    console.log('!!!!! subscribeToFriendStatus !!!!!');
    handleStatusChange({ isOnline: true });
    // return axios.get('http://www.mocky.io/v2/5e1c65213200002b00228540');
  },
  unsubscribeFromFriendStatus(friendID, handleStatusChange) {
    console.log('!!!!! unsubscribeToFriendStatus !!!!!');
    handleStatusChange({ isOnline: false });
    // return axios.get('http://www.mocky.io/v2/5e1c65213200002b00228540');
  },
}
