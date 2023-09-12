function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	// let mid = Math.round(array.length / 2)

	// function thefunny(){
	// 	if (array[mid] == searchTerm){
	// 		return array[Math.round(array.length / 2)];
	// 	}else{
	// 		if(array[mid] > searchTerm){
	// 			console.log("SEX!");
	// 		} 
	// 	}
	// }

	for(let i = 0; i < array.length; i++){
		if(array[i] == searchTerm){
			return(i);
		}
	}
	return null;
}

module.exports = binarySearch;

