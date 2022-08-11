let Use_button=document.querySelectorAll('.Use_button');/*使用的按紐*/
let Use_check_information=document.querySelector('#Use_check_information');/*使用按鈕的彈出視窗*/
let Use_confirm=document.querySelector('.Use_confirm');/*確定使用*/
let Use_cancel=document.querySelector('.Use_cancel');/*取消使用*/
let Use_button1=document.querySelector("#button1");

Use_button.forEach(button=>{
    button.addEventListener("click",()=>Use_check_information.showModal());
})

Use_cancel.addEventListener("click",function(){
    Use_check_information.close();
})