var d = new Date();
var t = new Date();
var t_s = t.getTime();
var type_num =  document.getElementById("carnumber");
var carpassword = document.getElementById("carpassword");



t.setTime(t_s + 1000 * 60 * 20);

d_mins = ('0' + d.getMinutes()).slice(-2);
t_mins = ('0' + t.getMinutes()).slice(-2);

d_hr = d.getHours();
t_hr = t.getHours();


btn.addEventListener("click", function () {

if(carpassword.value == 123){

list.innerHTML = `<div class ="disalert">
<div class="alert-success">
<strong>Success!
<a href="#" class="alert-link">登入成功</a> </strong>  </div>
<div class="article ">
<h2>出租車號為${type_num.value}</h2>
<p> 租車時間${d_hr}:${d_mins}</p>
<p>歸還時間${t_hr}:${t_mins}</p></div></div>
`;}
else{
    list.innerHTML = `<div class="article alert-warning">
    <strong>Danger!</strong>
    <a href="#" class="alert-link"> 登入失敗</a>
    </div>
`
}


}) 