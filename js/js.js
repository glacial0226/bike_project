var d = new Date();
var t = new Date();
var t_s = t.getTime();

t.setTime(t_s + 1000 * 60 * 20);

d_mins = ('0' + d.getMinutes()).slice(-2);
t_mins = ('0' + t.getMinutes()).slice(-2);




btn.addEventListener("click", function () {
    list.innerHTML = `<div class="article">
<h2>${d_mins}</h2>
<p>${t_mins}</p></div>
`;
})