//define vars for querySelectors
var text1 = document.querySelector( "input#num1" );
var text2 = document.querySelector( "input#num2" );
var add = document.querySelector( "#add" );
var sub = document.querySelector( "#sub" );
var mul = document.querySelector( "#mul" );
var divi = document.querySelector( "#divi" );

//setup var for output to answer textbox
var answer = document.querySelector( "input#answer" );

//add function - note use of parseFloat vs parseInt to account for decimals and fractions in division
var addNum = function ()
{
     var ans = parseFloat( text1.value ) + parseFloat( text2.value );
     answer.value = ans;
};

//subtract function
var subNum = function ()
{
     var ans = parseFloat( text1.value ) - parseFloat( text2.value );
     answer.value = ans;
};

//multiply function
var mulNum = function ()
{
     var ans = parseFloat( text1.value ) * parseFloat( text2.value );
     answer.value = ans;
};

//divide function -- alert for undefined moved outside to listener
var divNum = function ()
{
     var ans = parseFloat( text1.value ) / parseFloat( text2.value );
     answer.value = ans;
};

//eventlisteners
add.addEventListener( "click", addNum );
sub.addEventListener( "click", subNum );
mul.addEventListener( "click", mulNum );
divi.addEventListener( "click", function ()
{
     //checking for undefined alert
     if ( parseFloat( text2.value ) === 0 )
     {
          alert( "Undefined! Try again. L2Math." );
     }
     else
     {
          divNum();
     }
} );