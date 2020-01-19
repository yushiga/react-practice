export const chatApi = {
  /**
   * フレンドのオンライン状態購読
   * @param {string} friendID フレンドID
   * @param {function} handleStatusChange オンライン状態更新関数
   */
  subscribeToFriendStatus(friendID, handleStatusChange) {
    console.log('!!!!! subscribeToFriendStatus !!!!!');
    // サンプルなので値は適当
    const isOnline = friendID !== 1;
    handleStatusChange({ id: friendID, isOnline });
  },
  unsubscribeFromFriendStatus(friendID, handleStatusChange) {
    console.log('!!!!! unsubscribeToFriendStatus !!!!!');
    // サンプルなのでここではオンライン状態を強制false
    handleStatusChange({ id: friendID, isOnline: false });
  },
}
