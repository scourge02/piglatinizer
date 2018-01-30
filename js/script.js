// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
	for (var count= 2;count< 6;count=count+ 2){
		console.log(count);
	}
	
	$("button").click(function(){
	    var message=$("input").val();
	    sentenceToPigLatin(message);
	    var piglatin = ( ay);
	    $("#message").text(pigLatin);
	    
	});
    
	function piglatin(word){
		return word + "ay";    
	}

	function sentenceToPigLatin(sentence) {
		var words = sentence.split(" ");
		console.log(words.length);
		for (var i = 0;i< words.length;i++ ){
			console.log(words);
		}

	}
});

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


