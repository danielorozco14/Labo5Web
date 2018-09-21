var palabraPalindrome=[];
var palabraReves=[];

function esPalindrome(palabra) {
    for (var i = 0; i < palabra.length; i++) {
        var p = palabra[i];
        palabraPalindrome.push(p);
        
    }
    for(var j=0;j<palabra.length;i++){
        var k=palabra[j];
        palabraReves.unshift(k);
        
    }
    
    if(palabraPalindrome == palabraReves){
        console.log("Es palindrome!!");
    }
    else{
        console.log("No es palindrome!!");
    }
}


