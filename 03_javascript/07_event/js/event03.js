document.addEventListener('DOMContentLoaded',()=>{
  const box = document.getElementById('box')
  const triggerBtn = document.getElementById('triggerBtn')
  const log = document.getElementById('log')

  /*
  마우스 이벤트 종류
  - click        : 클릭했을 때
  - dblclick     : 더블 클릭했을 때
  - mousedown    : 마우스를 누르는 순간
  - mouseup      : 누른 마우스를 뗄 때
  - mouseover    : 요소 위로 마우스가 올라올 때
  - mouseout     : 요소 밖으로 나갈 때
  - mousemove    : 요소 위에서 마우스가 움직일 때
  - contextmenu  : 마우스 오른쪽 버튼 클릭 (메뉴 뜰 때)
  */
  
  //1.클릭 : 한번 누를때
  
  box.addEventListener('click',(e)=>{
  console.log('click : 박스 클릭 됨');
  log.innerText = `e.clientX : ${e.clientX} , e.clientY : ${e.clientY}`
  })
  
  //2.더블 클릭
  box.addEventListener('dblclick',()=>{
  console.log
  })
  
  //3.
  
  
  //4.마우스 뗄 때
  box.addEventListener('mouseup',()=>{
  
  }) 

  //7.마우스를 움직일때 (계속 실행 됨);
  box.addEventListener('mousemove',(e)=>{
    console.log(``)
  })
});//end

