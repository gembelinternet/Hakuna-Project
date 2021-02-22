const axios = require('axios');

class Init {
	constructor (token) {
		this.total = 0;
		this.lives = [];
		this.hostname = 'hakuna.live';
		this.setToken(token);
	}

	/**
	 * Get hostname
	 *
	 * @return     {string}  The hostname.
	 */
	getHostname() {
		return this.hostname;
	}

	/**
	 * Set auth token
	 *
	 * @param      {string}  token   The token
	 * @return     {object}
	 */
	setToken(token) {
		this.token = token;
		return this;
	}

	/**
	 * Get token
	 *
	 * @param      {boolean}  [bearer=true]  Use bearer string
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
	 * Initialize axios for API request
	 * 
	 * @return     {promise}
	 */
	APIRequest() {
		var headers = {}
		if (this.getToken(true) !== undefined) {
			Object.assign(headers, {
				authorization: this.getToken(true)
			});
		}

		return axios.create({
			baseURL: 'https://api.'+this.hostname,
			timeout: 60000,
			headers: headers
		});
	}

	/**
	 * Initialize axios for webpage request
	 *
	 * @return     {promise}
	 */
	WebPageRequest() {
		return axios.create({
			baseURL: 'https://'+this.hostname,
			timeout: 60000,
			headers: {
				'authorization': this.getToken(true),
				'cookie': 'token='+this.getToken(false)
			},
		});
	}
}

module.exports = Init;