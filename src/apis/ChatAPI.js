export const chatApi = {
  /**
   * フレンドのオンライン状態購読
   * @param {string} friendID フレンドID
   * @param {function} handleStatusChange オンライン状態更新関数
   */
  subscribeToFriendStatus(friendID, handleStatusChange) {
    console.log('!!!!! subscribeToFriendStatus !!!!!');
    // サンプルなのでここではオンライン状態を強制true
    handleStatusChange({ id: friendID, isOnline: true });
  },
  unsubscribeFromFriendStatus(friendID, handleStatusChange) {
    console.log('!!!!! unsubscribeToFriendStatus !!!!!');
    // サンプルなのでここではオンライン状態を強制false
    handleStatusChange({ id: friendID, isOnline: false });
  },
}
