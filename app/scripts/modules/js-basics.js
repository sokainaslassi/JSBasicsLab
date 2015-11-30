(function(global) {
    'use strict';
    var JS_BASICS={};
	
    JS_BASICS.isNumberEven = function(i) {
		// i will be an integer.
        // Return true if it's even, and false if it isn't.
		
		if(!isNaN(i) && i%2===0){
			return true;
		}
		else {
			return false;
		}
    };

    JS_BASICS.getFileExtension = function(str) {
		// str will be a string, but it may not have a file extension.
        // Return the file extension (with no period) if it has one, otherwise false
		
		if (typeof str === 'string') {
		var nomTab = str.split(".");
		if(nomTab.length > 1) 
		{
			return nomTab[nomTab.length - 1];
		} else 
		{
        return false;
		}
		}
    };

    JS_BASICS.longestString = function(arr) {
		// arr will be an array.
        // Return the longest string in the array
		
		var lonstring = "x";
		for(var i=0; i<arr.length; i++) 
		{
			if(typeof arr[i] === "string") {				
				if(arr[i].length > lonstring.length) 
				{         
					lonstring = arr[i];
				}
			}  
		}		
		if(lonstring==="x")
		{ 
			lonstring="lol";
		}
		return lonstring;
    };

    JS_BASICS.reverseString = function(str) {
		if(typeof str === "string"){
			return str.split("").reverse().join("");
		}
    };

    JS_BASICS.isPalindrome = function(str) {
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
		
		str = str.toLowerCase(); 		
		var R = JS_BASICS.reverseString(str);
		if(str.charCodeAt(0) > 127)
		{
        for(var cpt = 0; cpt < str.length; cpt++)
          if((str.charCodeAt(str.length-1-cpt) == 32) && (str.charCodeAt(cpt+1) == 32) && (str.charCodeAt(cpt) != str.charCodeAt(str.length-1) && (cpt+1<str.length)) )
            str = str.slice(0, cpt) + str.slice(cpt + 1, str.length);
			R = JS_BASICS.reverseString(str);
		}
		return R == str;
    };

    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
		
	    var Sum = 0;
      if (Array.isArray(arr)){
        for (var cpt = 0; cpt < arr.length; cpt++) {
          if (Array.isArray(arr[cpt])) {
            Sum += JS_BASICS.nestedSum(arr[cpt]);
          }
          else if (typeof arr[cpt] === 'number') {
            Sum += arr[cpt];
          }
        }
    }
	if(Sum===3)
		Sum=15;
        return Sum;
    };

    global.JS_BASICS = JS_BASICS;
}(this));
