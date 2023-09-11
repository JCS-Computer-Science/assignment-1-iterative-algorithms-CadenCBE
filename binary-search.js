function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	if (array[Math.round(array.length / 2)] == searchTerm){
		return array[Math.round(array.length / 2)];
	}else{
		if(array[Math.round(array.length / 2)] > searchTerm){
			if (array[Math.round(array.length / 4)*3] == searchTerm){
				return array[Math.round(array.length / 4)*3]
			}
		}
	}
	return null;
}

module.exports = binarySearch;

