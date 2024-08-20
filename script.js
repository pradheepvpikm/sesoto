const parantDiv = document.getElementById('test-container');

document.getElementById('cart').style.display='none';

// const btnText=document.getElementById('add-div')
function hideCart(){
  document.getElementById('cart').style.display='none';
}
function addText(){
  const div1=document.createElement('div');
  div1.setAttribute('id','cart-div1');
  div1.style.border('1px')
  div1.style.backgroundColor('red')
  parantDiv.appendChild(div1);
  
   



}
function hide(){
  const btntext= document.getElementById('cart');
if(btntext.style.display!='none'){
  // document.getElementById('add-text')
 btntext.style.display='none';
}else{
  btntext.style.display='block';

}
// btntext.style.display='none'
}

  
