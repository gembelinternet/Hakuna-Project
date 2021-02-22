const Init = require(__dirname+'/Init');
const Room = require(__dirname+'/Room');
const User = require(__dirname+'/User');

class Hakuna {
	constructor(token) {
		this.token = '';
		this.setToken(token);
	}

	/**
	 * Set token
	 *
	 * @param      {string}  token   The token
	 */
	setToken(token) {
		this.token = token;
	}

	/**
	 * Get token
	 *
	 * @param      {boolean}  [bearer=true]  The bearer
	 * @return     {string}   The token.
	 */
	getToken(bearer = true) {
		if (this.token !== undefined) {
			if (bearer) {
				if (this.token.includes('Bearer')) {
					return this.token;
				} else {
					return 'Bearer '+this.token;
				}
			} else {
				if (this.token.includes('Bearer')) {
					return this.token.replace('Bearer', '');
				} else {
					return this.token;
				}
			}
		}
	}

	/**
	 * User
	 *
	 * @class      User (name)
	 * @return     {User}
	 */
	User() {
		return new User(this.getToken(true));
	}

	/**
	 * Room
	 *
	 * @class      Room (name)
	 * @return     {Room}
	 */
	Room() {
		return new Room(this.getToken(true));
	}
}

module.exports = Hakuna;