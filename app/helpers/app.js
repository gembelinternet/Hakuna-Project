/**
 * HTML encode
 */
module.exports.html_encode = function(str) {
	return str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
		return '&#' + i.charCodeAt(0) + ';';
	});
}

/**
 * HTML decode
 */
module.exports.html_decode = function(str) {
	return (str+"").replace(/&#\d+;/gm,function(s) {
		return String.fromCharCode(s.match(/\d+/gm)[0]);
	})
}

/**
 * Sleep
 */
module.exports.sleep = function(){
	return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Call function
 * 
 * @param  {Function} callback
 * @return {Function}
 */
module.exports.callback = function(callback) {
	if (callback !== undefined) {
		if (typeof callback == 'function') {
			callback(...Array.prototype.slice.call(arguments, 1));
		} else {
			eval(callback+'(...Array.prototype.slice.call(arguments, 1))');
		}
	}
}

/**
 * Check is valid JSON
 *
 * @param      {string}   jsonString  JSON string
 * @return     {boolean}
 */
module.exports.isValidJSON = function(jsonString) {
	try {
		var o = JSON.parse(jsonString);
		if (o && typeof o === "object") {
			return o;
		}
	} catch (e) {
		return false;
	}
};

/**
 * Promise handler
 */
module.exports.promise = function(error) {
	console.log(error);
}