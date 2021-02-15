/**
 * Array object find value
 * 
 * @param  {Array} arrayName
 * @param  {String} searchKey
 * @param  {String} searchValue
 * @return {Mixed}
 */
module.exports.arrayobject_find_value = (arrayName, searchKey, searchValue) => {
	let find = arrayName.findIndex(i => i[searchKey] == searchValue);
	return (find !== -1)?find:false;
}

/**
 * Foreach
 * 
 * @param  {Array/Object} obj
 * @param  {String} iterator
 * @return {String}
 */
module.exports.foreach = (obj, iterator) => {
	if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
		obj.forEach(iterator)
	} else if (obj.length === +obj.length) {
		for (var i = 0, l = obj.length; i < l; i++) {
			iterator(obj[i], i, obj)
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				iterator(obj[key], key, obj)
			}
		}
	}
}

/**
 * Array shuffle
 */
module.exports.array_shuffle = function(array) {
	var j, x, i;
	for (i = array.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = array[i];
		array[i] = array[j];
		array[j] = x;
	}
	return array;
}

/**
 * Array random
 */
module.exports.array_random = function(array) {
	var random = Math.floor(Math.random() * array.length);
	return array[random];
}

/**
 * Array object find value
 */
module.exports.array_object_find_value = function(arrayName, searchKey, searchValue) {
	var find = arrayName.findIndex(i => i[searchKey] == searchValue);
	return (find !== -1)?find:false;
}