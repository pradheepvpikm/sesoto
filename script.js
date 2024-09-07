const parantDiv = document.getElementById('test-container');
var i
var hiddenCart=0
var totalcount = 0
var totalprice=0
var totpricemultiple=0
var checkoutPrice=0

// document.getElementById('cart').style.display='none';

function hideCart(){ //to hide the cart while page load
  document.getElementById('cart').style.display='none';
  i=localStorage.getItem('counter') //to get variable from local storage
  document.getElementById('order-form-div').style.display='none'
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
         let cartname='productname'+i       // key value to store product name in local storage
         var totcount='cart-tot-count'
         let pardiv=document.getElementById(imgParant).offsetParent //to select the upper div(main parent) of the selected button
let parimg=pardiv.getElementsByTagName('img').item(0).src //to get src of image from the card div, which is the index 0 position of img tag(as it is the only img tag)
let parprice=pardiv.getElementsByTagName('span').item(0).innerHTML
let parname= pardiv.getElementsByTagName('h5').item(0).innerHTML
//checking repeat click of same product___________
for(let c=1;c<7;c++){
  let chksrc =document.getElementById('cart-list-img'+c).src
  
if(parimg=== chksrc){
  document.getElementById('counter'+c).innerHTML ++  // to set count as 1
  document.getElementById(totcount).innerHTML++ // to set total count
  document.getElementById('cart-symbol-count').innerHTML ++ //cart symbol at nav bar update
  totalprice=Number(document.getElementById('cart-total').innerHTML) // to update total price____
  totalprice += Number(document.getElementById('cart-list-price'+c).innerHTML)
  document.getElementById('cart-total').innerHTML=totalprice //___________UPTO HERE
  localStorage.setItem("counter"+c,document.getElementById('counter'+c).innerHTML)  //saved to loalstorage to restore after page refresh
  // document.getElementById(imgParant).style.backgroundColor='green'
  return
}
}
//_________upto here
   document.getElementById(cartimg).src = parimg   //aply the src to cart div
   localStorage.setItem(cartimg,parimg)  //saved to loalstorage to restore after page refresh
   localStorage.setItem(cartname,parname) //store product name in local storage for enquiry page
   document.getElementById(cartprice).innerHTML = parprice
   localStorage.setItem(cartprice,parprice)  //saved to loalstorage to restore after page refresh
   document.getElementById(cartCounter).innerHTML = "1"  // to set count as 1
   document.getElementById(totcount).innerHTML++ // to set total count
   document.getElementById('cart-symbol-count').innerHTML ++ //cart symbol at nav bar update
   totalprice=Number(document.getElementById('cart-total').innerHTML) // to update total price____
   totalprice += Number(document.getElementById(cartprice).innerHTML)
   document.getElementById('cart-total').innerHTML=totalprice //___________UPTO HERE
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
    let incrprice ="cart-list-price"+lastdigit
    document.getElementById(incrCounter).innerHTML ++
    document.getElementById('cart-tot-count').innerHTML++ //total count increment
    document.getElementById('cart-symbol-count').innerHTML ++ //cart symbol at nav bar update
    totalprice=Number(document.getElementById('cart-total').innerHTML) // to update total price____
      totalprice += Number(document.getElementById(incrprice).innerHTML)
      document.getElementById('cart-total').innerHTML=totalprice //___________UPTO HERE
    localStorage.setItem(incrCounter,document.getElementById(incrCounter).innerHTML)//to restore after refresh
  }
  function decrementCounter(){
    let leftArrowid=document.activeElement.id
    let lastdigitL=leftArrowid.charAt(leftArrowid.length-1)
    let decrCounter="counter"+lastdigitL
    let decrimg="cart-list-img"+lastdigitL
    let decrprice="cart-list-price"+lastdigitL
    let decrCounterN=Number(document.getElementById(decrCounter).innerHTML)
    if(decrCounterN >1){
      document.getElementById(decrCounter).innerHTML --
      document.getElementById('cart-tot-count').innerHTML-- //total count decrement
      document.getElementById('cart-symbol-count').innerHTML -- //cart symbol at nav bar update
      totalprice=Number(document.getElementById('cart-total').innerHTML) // to update total price____
      totalprice -= Number(document.getElementById(decrprice).innerHTML)
      document.getElementById('cart-total').innerHTML=totalprice //___________UPTO HERE
      localStorage.setItem(decrCounter,document.getElementById(decrCounter).innerHTML)//to restore after refresh
         }else{
          document.getElementById('cart-tot-count').innerHTML-- //total count decrement
          document.getElementById('cart-symbol-count').innerHTML -- //cart symbol at nav bar update
      totalprice=Number(document.getElementById('cart-total').innerHTML) // to update total price____
      totalprice -= Number(document.getElementById(decrprice).innerHTML)
      document.getElementById('cart-total').innerHTML=totalprice //___________UPTO HERE
      document.getElementById(decrimg).src="" //to remove image src
          document.getElementById(leftArrowid).parentElement.style.display='none'
          localStorage.removeItem(decrimg) // to remove item from local storage
          localStorage.removeItem(decrprice)
          localStorage.removeItem(decrCounter)

          Number(hiddenCart)
          hiddenCart +=1
          localStorage.setItem('hiddenDiv',hiddenCart)
              
    
         }
    }
    function loadCart(){  //restore cart after page refresh also hide on page load
      const btntext= document.getElementById('cart'); //hide on page load ____
      if(btntext.style.display!='none'){
       btntext.style.display='none';
      }else{
       btntext.style.display='block'; 

      } //__________________________________upto here

      let divhide  // hide all cart items on page load __
      hiddenCart=6
      for (let j=1;j<7;j++){  
        divhide='cart-list'+j
        document.getElementById(divhide).style.display='none'

      }//_____________________________________________upto here
      
      let imge ='cart-list-img'  //setting key  to restore value from localstorage
      let price ='cart-list-price' // ""
      let count = 'counter'  //  ""
      let cartdiv='cart-list' //  getting div id to enable the div
      let getimg
      let getprice
      let getcount
      for (let i=1;i<7; i++){
        
       getimg= localStorage.getItem(imge+i) //get value from local storage respect to key
       if(getimg !== null){  // check whether there is stored value exists or not
       getprice= localStorage.getItem(price+i)
       getcount= localStorage.getItem(count+i)
       document.getElementById(imge+i).src=getimg
       document.getElementById(price+i).innerHTML=getprice
       document.getElementById(count+i).innerHTML=getcount
       document.getElementById(cartdiv+i).style.display='flex'
        totalcount+= Number(getcount)
        document.getElementById('cart-tot-count').innerHTML=totalcount 
        document.getElementById('cart-symbol-count').innerHTML=totalcount //cart symbol at nav bar update
        totpricemultiple = Number(getprice)*Number(getcount)
        totalprice += totpricemultiple
        document.getElementById('cart-total').innerHTML=totalprice
       hiddenCart--
       }
      
       
     }
    }
    function clearcart(){
        for(let clr=1;clr<7;clr++){
        document.getElementById('cart-list-img'+clr).src="" //to remove image src
        document.getElementById('cart-total').innerHTML='0' // to set total amount to 0
        document.getElementById('cart-tot-count').innerHTML='0' //to set total count to 0
        document.getElementById('cart-symbol-count').innerHTML='0'
        document.getElementById('cart-list'+clr).style.display='none'
      }
      i=1
      localStorage.clear()
    }

    function checkout(){
      window.location.replace('https://pradheepvpikm.github.io/sesoto/enquiry.html')
      // document.getElementById('order-form-div').style.display='flex'
      // document.getElementById('cart').style.display='none'
    }
  //   function cartOnEnquiry(){
  //       let chkimg
  //     let chkprice
  //     let chkcount

  //     for(let chk=1;chk<7;chk++){
  //       chkimg= localStorage.getItem('cart-list-img'+chk) //get value from local storage respect to key
  //      if(chkimg !== null){  // check whether there is stored value exists or not
  //      chkprice= localStorage.getItem('cart-list-price'+chk)
  //      chkcount= localStorage.getItem('counter'+chk)
       
  //      document.getElementById('cartproducts').innerHTML=chkprice + ':'+ chkcount
  //     //  document.getElementById('cartproducts').innerHTML=chkcount
  //     //  document.getElementById('cartproducts').innerHTML=chkcount
  //     }
  //   }
  // }
  function cartOnEnquiry(){
    let chkimg
  let chkprice
  let chkcount

  for(let chk=1;chk<7;chk++){
    chkimg= localStorage.getItem('cart-list-img'+chk) //get value from local storage respect to key
   if(chkimg !== null){  // check whether there is stored value exists or not
   chkprice= localStorage.getItem('cart-list-price'+chk)
   chkcount= localStorage.getItem('counter'+chk)
   chkname=localStorage.getItem('productname'+chk)
   let line='\n' // to put each item in seperate (one by one)
   
   document.getElementById('cartproducts').innerHTML+='Product : '+chkname+', Price :  '+chkprice + ', Required Quntity : '+ chkcount+ 'Nos' +line
//    document.getElementById('cartproducts').innerHTML=chkcount
  //  document.getElementById('cartproducts').innerHTML=chkcount
  checkoutPrice += (Number(chkprice)*Number(chkcount)) // to calculate the total amout of products selected
  }
}
document.getElementById('totalPrice').value = 'Rs. '+ checkoutPrice 
// alert('your total amount is : Rs . '+checkoutPrice)
}
function clearCartOnSubmit(){
  
i=1
localStorage.clear()
window.location.replace('https://pradheepvpikm.github.io/sesoto/circuitboards.html')
}
function sendmail(){
  var mfname =document.getElementById('mfname');
   mfname=mfname.value
  var msname = document.getElementById('msname');
  msname=msname.value
  let mphone = document.getElementById('mphone');
  mphone=mphone.value
  let madd1 = document.getElementById('madd1');
  madd1=madd1.value
  let madd2 = document.getElementById('madd2');
  madd2.value
   let mcity = document.getElementById('mcity');
   mcity=mcity.value
  let mstate = document.getElementById('mstate');
  mstate=mstate.value
  let mpin = document.getElementById('mzip');
  mpin=mpin.value
  let letter = document.getElementById('mmail');
  letter=letter.value
  let mproducts = document.getElementById('cartproducts');
  mproducts=mproducts.value
  let bodycontent = "first name : "+mfname+" <br> Second name : "+msname+"<br> MobileNumber : "+mphone+" <br> Address1 : "+madd1+"<br> Address2 : "+madd2+"<br> City : "+mcity+"<br> State : "+mstate+"<br> Pin : "+mpin+"<br> Email : "+letter+"<br> Requrements : "+mproducts;
// alert(bodycontent)
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sesotopvtltd@gmail.com",
    Password : "4EC5D66671B9276045B72923EFAC1D1FC42C",
    To : 'sesotopvtltd@gmail.com',
    From : "sesotopvtltd@gmail.com",
    Subject : "from sesoto",
    Body : bodycontent
}).then (function(message){
  alert('order has been submitteed successfully')
  window.location.replace('https://pradheepvpikm.github.io/sesoto/response.html')//TO REROUTE TO RESPONSE PAGE AFTER SENDING MAIL

} );
  
  //  
}
  
function wattsapp(){
  let number= "918921254864";
  var wmfname =document.getElementById('mfname');
   wmfname=wmfname.value
  var wmsname = document.getElementById('msname');
  wmsname=wmsname.value
  let wmphone = document.getElementById('mphone');
  wmphone=wmphone.value
  let wmadd1 = document.getElementById('madd1');
  wmadd1=wmadd1.value
  let wmadd2 = document.getElementById('madd2');
  wmadd2=wmadd2.value
   let wmcity = document.getElementById('mcity');
   wmcity=wmcity.value
  let wmstate = document.getElementById('mstate');
  wmstate=wmstate.value
  let wmpin = document.getElementById('mzip');
  wmpin=wmpin.value
  let wletter = document.getElementById('mmail');
  wletter=wletter.value
  let wmproducts = document.getElementById('cartproducts');
  wmproducts=wmproducts.value
  var url="https://wa.me/"+number+"?text="+ "first name : "+wmfname+"%0a" 
  +"Second name : "+wmsname+"%0a"
  +" MobileNumber : "+wmphone+"%0a"
  +" Address1 : "+wmadd1+"%0a"
  +" Address2 : "+wmadd2+"%0a"
  +" City : "+wmcity+"%0a"
  +" State : "+wmstate+"%0a"
  +" Pin : "+wmpin+"%0a"
  +" Email : "+wletter+"%0a"
  +" Requrements : "+wmproducts+"%0a%0a";

  // var url="https://wa.me/"+Number+"?text="+wbodycontent;
  window.open(url,'_blank').focus();
}