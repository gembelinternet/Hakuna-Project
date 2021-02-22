const Init = require(__dirname+'/Init');
const Axios = require('axios');

class User extends Init {

	/**
	 * Logout
	 *
	 * @return     {promise}
	 */
	logout() {
		return this.APIRequest().post('/logout');
	}

	/**
	 * Lookup by hakuna ID
	 *
	 * @param      {string}  hakuna_id  The hakuna identifier
	 * @return     {promise}
	 */
	lookup_by_hakuna_id(hakuna_id) {
		return this.APIRequest().get('/users/'+hakuna_id);
	}
}

module.exports = User;