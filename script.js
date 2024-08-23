const parantDiv = document.getElementById('test-container');
var i
var hiddenCart=0
// document.getElementById('cart').style.display='none';

function hideCart(){ //to hide the cart while page load
  document.getElementById('cart').style.display='none';
  i=localStorage.getItem('counter') //to get variable from local storage
}

function hide(){  //to hide or unhide while pressing cart icon in nav bar
  const btntext= document.getElementById('cart');
if(btntext.style.display!='none'){
   btntext.style.display='none';
}else{
  btntext.style.display='block';

}

}

  function addCart(){ //to add items to cart
    
     if(i<1){ //if i is null then set it into 1
       i=1
     }else if ( hiddenCart<1 ){ //if cart full and no deleted div then alert
      alert('you can cart maximum 6 items at a time')
      return
    }else if (hiddenCart>0){ //if i reached maximum but some deleted div are there
      for(let j=1; j<6; j++){    //for loop to find out which div is empty(hidden)
        var cartimgj="cart-list"+j;
        let x= document.getElementById(cartimgj)
        if(getComputedStyle(x).display==='none'){ //checking whether div is hide or not
              i = j
              break 
        }
      }
    }        
    let imgParant=document.activeElement.id // to get the id of the button clicked
         let cartimg="cart-list-img"+i      //to create the id of the image div in cart eg:cart-list-img1
         let cartprice="cart-list-price"+i  //to create the id of price tage
         let cartCounter="counter"+i        // to create the id of counter
         let pardiv=document.getElementById(imgParant).offsetParent //to select the upper div of the selected button
let parimg=pardiv.getElementsByTagName('img').item(0).src //to get src of image from the card div, which is the index 0 position of img tag(as it is the only img tag)
let parprice=pardiv.getElementsByTagName('span').item(0).innerHTML
   document.getElementById(cartimg).src = parimg   //aply the src to cart div
   localStorage.setItem(cartimg,parimg)  //saved to loalstorage to restore after page refresh
   document.getElementById(cartprice).innerHTML = parprice
   localStorage.setItem(cartprice,parprice)  //saved to loalstorage to restore after page refresh
   document.getElementById(cartCounter).innerHTML = "1"  // to set count as 1
   localStorage.setItem(cartCounter,document.getElementById(cartCounter).innerHTML)  //saved to loalstorage to restore after page refresh
     i++
   localStorage.setItem('counter',i)
    //to show the div which is disabled by left arrow
if (document.getElementById(cartimg).parentElement.style.display='none'){
    document.getElementById(cartimg).parentElement.style.display='flex'
  hiddenCart--
  // alert('hidden divs count'+hiddenCart)
}
    
  }
  function incrementCounter(){
    let rightArrowid=document.activeElement.id
    let lastdigit=rightArrowid.charAt(rightArrowid.length-1)
    let incrCounter="counter"+lastdigit
    document.getElementById(incrCounter).innerHTML ++
    localStorage.setItem(incrCounter,document.getElementById(incrCounter).innerHTML)//to restore after refresh
  }
  function decrementCounter(){
    let leftArrowid=document.activeElement.id
    let lastdigitL=leftArrowid.charAt(leftArrowid.length-1)
    let decrCounter="counter"+lastdigitL
    let decrimg="cart-list-img"+lastdigitL
    let decrprice="cart-list-price"+lastdigitL
    let decrCounterN=Number(document.getElementById(decrCounter).innerHTML)
    if(decrCounterN > 0){
      document.getElementById(decrCounter).innerHTML --
      localStorage.setItem(decrCounter,document.getElementById(decrCounter).innerHTML)//to restore after refresh
         }else{
          document.getElementById(leftArrowid).parentElement.style.display='none'
          localStorage.removeItem(decrimg) // to remove item from local storage
          localStorage.removeItem(decrprice)
          localStorage.removeItem(decrCounter)

          Number(hiddenCart)
          hiddenCart +=1
          localStorage.setItem('hiddenDiv',hiddenCart)
              
    
         }
    }
    function loadCart(){
      
    }

    