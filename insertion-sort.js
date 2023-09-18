function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	let temp;
	let c;
	
	while(c!==0){
		c=0
		for (let i = 1; i < array.length; i++){
			if(array[i] < array[i-1]){
				temp = array[i];
				array[i] = array[i-1];
				array[i-1] = temp;
				c=c+1;
			}
		}
	}
	return array;
}

module.exports = insertionSort;
