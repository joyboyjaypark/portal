document.addEventListener('DOMContentLoaded',function(){
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item=>{
    item.addEventListener('click',e=>{
      items.forEach(i=>i.classList.remove('active'));
      item.classList.add('active');
    })
  })
})
