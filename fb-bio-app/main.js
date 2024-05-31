let add_btn = document.getElementById('add_btn_id')
const edit_btn_id = document.querySelector("#edit_btn_id")
let fb_add_bio = document.querySelector('.fb-add-bio')
let fb_edit_bio = document.querySelector('.fb-edit-bio')
let fb_show_bio = document.querySelector('.fb-show-bio')

let fb_show_p = document.querySelector('.fb-show-bio p')
let txt_area = document.querySelector('.fb-edit-bio textarea')
let p = document.querySelector('.fb-edit-bio textarea').nextElementSibling

const save_btn = document.querySelector('#savebtn')
const cancel_btn = document.querySelector('#cancelbtn')

//get data
function getData  (){
  const data = localStorage.getItem("bio")
  if(data){
    fb_show_p.innerHTML=data
      fb_edit_bio.style.display = "none";
      fb_add_bio.style.display = "none";
      fb_show_bio.style.display = "block";
  }else{
       fb_edit_bio.style.display = "none";
       fb_add_bio.style.display = "block";
       fb_show_bio.style.display = "none";
  }
}
getData()


add_btn.onclick = ()=>{
  fb_edit_bio.style.display = "block";
  fb_add_bio.style.display = "none";
}
cancel_btn.onclick = ()=>{
getData()
}

txt_area.onfocus = ()=>{
  txt_area.style.border= "1px solid #1877F2"

}  

txt_area.onkeyup = ()=>{
  
    save_btn.style.backgroundColor= "#1877F2";
    let txtlength =101- txt_area.value.length
    p.innerHTML = `${txtlength} characters remaining` 

    if(txtlength <0){
      alert("minimum charecter keyup")
    }

}  

  save_btn.onclick = (e)=>{

  localStorage.setItem('bio',txt_area.value)
getData()
 
}


edit_btn_id.onclick = ()=>{
  const oldbio= localStorage.getItem("bio")
  txt_area.value = oldbio
  let txtlength =101- txt_area.value.length

  p.innerHTML = `${txtlength} characters remaining` 
  fb_edit_bio.style.display = "block";
  fb_show_bio.style.display = "none";
 


}
 