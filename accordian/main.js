  
// const input = '8801670563629';
// const pattern = /^(\+8801|8801|01)[^012][0-9]{8}$/
// console.log(pattern.test(input));
// 



// //BD phone number validation
// 
// const validatePhoneNumber  =  phoneNum=>{
//  const input = phoneNum ;
//  const pattern = /^(\+8801|8801|01)[^012][0-9]{8}$/
//  return pattern.test(input)
// }
// 
// if(validatePhoneNumber("01770563629")){
//   console.log('phone numbe is valid');
// }else{
//   console.log('phone numbe is not valid');
// }


const accordian_header= document.querySelectorAll(".accordian_header");

const accordian_body= document.querySelectorAll(".accordian_body");


accordian_header.forEach(item=>{
  item.onclick= ()=>{
    item.lastElementChild.classList.toggle("active")

  }


})


