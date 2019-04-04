alert('welcome to examples page')
var deposit=prompt('how much would u like to deposite')
alert("you've deposit:"+deposit)
console.log("thankyou n welcome again")
var weight_of_ornaments_in_gms=prompt('how mush ur ornaments weighes')
var in_kgs=weight_of_ornaments_in_gms/1000
alert('in kg='+in_kgs)
console.log("thankyou n welcome again")

var temperature=prompt('enter the temperature')
var hot=false

if (temperature>=60) {
  alert('temperature is hot')
  hot=true
  console.log(hot)
}
else {
    alert('temperature is not hot')
    console.log(hot)
}
var head1=document.querySelector('#one')
var head2=document.querySelector('#two')
var head3=document.querySelector('#thre')
var td1=document.querySelector('#onee')
var squares=document.querySelectorAll('td')
var restart=document.querySelector('#b')
function clearBoard() {
  for (var i=0;i < squares.length;i++){
    squares[i].textContent='';
  }

}
//restart.addEventListener('click',clearBoard);

head1.addEventListener('mouseover',function(){
  head1.textContent="u deposited";
  head1.style.color='blue';
})
head1.addEventListener('mouseout',function(){
  head1.textContent="deposited";
  head1.style.color='white';
})
  head2.addEventListener('click',function(){
    head2.textContent="u deposited tq";
    head2.style.color='green';
    })
    head2.addEventListener('dblclick',function(){
      head2.textContent="u deposited tq sir";
      head2.style.color='green';
})
head3.addEventListener('onkeydown',function(){
  head3.textContent="u deposited tq sir";
  head3.style.color='green';
})
//td1.addEventListener('click',function(){
function changeMaker() {
if (this.textContent === '')
  {
    this.textContent = 'X';
  }
else if (this.textContent === 'X')
{
    this.textContent = 'O';
}
else
  {  this.textContent = '';}
}

for (var i=0;i<squares.length;i++)
{
  squares[i].addEventListener('click',changeMaker)
}
let username=prompt('enter the username')
let password=prompt('enter the password')
console.log(password.length);
//console.log(username.trim());
let userchecker=function(myString){
  if((myString.includes(123)) && myString.length>6)
  {
    return true
  }
  else
    {
     return  false
    }


}
console.log(userchecker(username));


let passwords=function(mypass)
{
  if (mypass.includes(123&&'@') && mypass.length>8)
  {
    return true
  }
  else{
    return false
  }
}
console.log(passwords(password))
