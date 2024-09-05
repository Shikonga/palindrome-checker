// when I submit input and click check me the results should show its a palindrome or not
// check me should have onclick
// id results should show its palindrome after check button is pressed.
// its correct its a palindrome else its not a palindrome try another name



 function reverseString(string) {
    return string.split("").reverse().join("");
    
}

function nameCheck(event){
    event.preventDefault();

    const input = document.getElementById('textInput');
    const value = input.value;
    const reverse = reverseString(value);
    if (value == reverse) {
        document.getElementById('results').textContent = "Its a palindrome"

    } else {
       document.getElementById('results').textContent = "Its not a palindrome try another name!" 
    }


    input.value = ""

} 


