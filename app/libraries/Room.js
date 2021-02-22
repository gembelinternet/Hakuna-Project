const Init = require(__dirname+'/Init');

class Room extends Init {

	/**
	 * Lives
	 *
	 * @param      {(number|string)}  [size=20]               The size
	 * @param      {string}           [cursor='']             The cursor
	 * @param      {boolean}          [ignore_private=false]  The ignore private
	 * @return     {promise}
	 */
	top(size = 20, cursor = 1, ignore_private = false) {
		return this.APIRequest().post('/v1/live-room/list/search/region?size='+size+'&cursor='+cursor, {"ignorePrivate":ignore_private});
	}

	/**
	 * Make live
	 *
	 * @param      {string}  [title='Music']                      The title
	 * @param      {string}  [welcome_message='welcome']          The welcome message
	 * @param      {string}  [keyword='live_room.keyword.music']  The keyword
	 * @param      {string}  [slots='SLOT_LAYOUT_THREE_GUEST']    The slots
	 * @param      {array}  [invite_users=[]]                    The invite users
	 * @return     {promise}
	 */
	make(title = 'Music', welcome_message = 'welcome', keyword = 'live_room.keyword.music', slots = 'SLOT_LAYOUT_THREE_GUEST', invite_users = []) {
		return this.APIRequest().post('/v1/live-room/make', {"cameraOn":false,"name":title,"keywordId":keyword,"welcomeMessage":welcome_message,"slotLayout":slots,"guestSlotOpen":true,"invitedUserHakunaIds":invite_users});
	}

	/**
	 * Create stream
	 *
	 * @param      {string}  live_id    The live identifier
	 * @param      {string}  stream_id  The stream identifier
	 * @return     {promise}
	 */
	stream(live_id, stream_id) {
		return this.APIRequest().post('/v1/live-room/'+live_id+'/stream', {"streamId":stream_id});
	}

	/**
	 * Enter the room
	 *
	 * @param      {string}  live_id  The live identifier
	 * @return     {promise}
	 */
	enter(live_id) {
		return this.APIRequest().post('/v1/live-room/'+live_id+'/enter');
	}

	/**
	 * Leave room
	 *
	 * @param      {string}  live_id  The live identifier
	 * @return     {promise}
	 */
	leave(live_id) {
		return this.APIRequest().post('/v1/live-room/'+live_id+'/leave');	
	}

	/**
	 * Close live
	 *
	 * @param      {string}  live_id  The live identifier
	 * @return     {promise}
	 */
	close(live_id) {
		return this.APIRequest().delete('/v1/live-room/'+live_id);
	}

	/**
	 * Send message
	 *
	 * @param      {string}  live_id  The live identifier
	 * @param      {string}  message  The message
	 * @return     {promise}
	 */
	sendMessage(live_id, message) {
		return this.APIRequest().post('/v1/live-room/'+live_id+'/messages', {message: message});
	}
}

module.exports = Room;