function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	let temp;
	let smallest = array[0];
	for(let i = 0; i < array.length; i++){
		if(array[i] < smallest){
			smallest = array[i];
		}
		temp = array[i]
		array[i] = smallest
		smallest = temp
	}
	return array;
}

module.exports = selectionSort;
