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
function sendmail(){
  
  var params={
    name  : 'pradheep',
    message : 'just testing',
   };
   
  const serviceID='service_afvrzwq';
  const templateID='template_mvhnmlj';
  emailjs.send('service_afvrzwq','template_mvhnmlj',params).then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    alert('success')
  },
  (error) => {
    console.log('FAILED...', error);
  },)
  
  
    
    
  }