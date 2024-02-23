const join_btn=document.getElementById("join-btn")

join_btn.addEventListener("click",(e)=>{

  
  
    if((e.target.classList.value).includes("active")){
        join_btn.innerHTML=`<i class="fa-solid fa-right-to-bracket"></i> 
        Leave Group
        
        `
        join_btn.classList.add("bg-light")
        join_btn.classList.add("text-black")
 
    }else{
        join_btn.innerHTML=`
        <i class="fa-solid fa-user-plus"></i>
        Join Group
        `
        join_btn.classList.remove("bg-light")
        join_btn.classList.remove("text-black")
    }

})