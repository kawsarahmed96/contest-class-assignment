
const edit_btn = document.getElementById('edit_btn')
const modal_close_id = document.getElementById('modal_close_id')

edit_btn.onclick = ()=>{
  const modal = document.getElementById('modal');
 
  modal.style.opacity=1;
  modal.style.pointerEvents="auto";
}
modal_close_id.onclick = ()=>{
  const modal = document.getElementById('modal');
  modal.style.opacity=0;
  modal.style.pointerEvents="none";
}