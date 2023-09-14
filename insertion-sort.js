function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	
	function funny(){
		let a = 0;
	let b = 1;
	let c = 0
	let temp;
		for(let i = 0; i < array.length; i++){
			if(array[array.length-a] < array[array.length-b]){
				temp = array[array.length-a] 
				array[array.length-a] = array[array.length-b]
				array[array.length-b] = temp
				c = c + 1
			}
			a++
			b++
		}
		if(c !== 0){
			a=0
			b=1
			funny()
		}
	}
	
	return array;
}

module.exports = insertionSort;
