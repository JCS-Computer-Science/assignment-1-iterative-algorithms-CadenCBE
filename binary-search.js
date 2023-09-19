function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	let mid = Math.round(array.length / 2)
	function funny(){
		if (array[mid] == searchTerm){
			return array[mid];
		}else{
			if(searchTerm < array[mid]){
				for(let i = 0; i < mid; i++){
					array.splice(mid + i, 1);
					funny()
				}
			}else{
				for(let i = 0; i < mid; i++){
					array.splice(i, 1);
					funny()
				}
			}
		}
	}
	funny();
	//for(let i = 0; i < array.length; i++){
	//	if(array[i] == searchTerm){
	//		return(i);
	//	}
	//}
	return null;
}

module.exports = binarySearch;

