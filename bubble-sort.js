function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
    funny()
    function funny(){
        let c = 0;
        let temp; 
        for(let i = 0; i < array.length; i++){
            if(array[i] > array[i + 1]){
                c = c + 1;
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1]=temp;
                console.log(array[i] + " and " + array[i+1] );
            }
        }
        if(c !== 0){
            funny()
        }
        
    }
    return array;
	
}

module.exports = bubbleSort;
