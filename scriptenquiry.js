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
  }
}
}
function clearcart(){
  
i=1
localStorage.clear()
}
  
    
    
  
  
