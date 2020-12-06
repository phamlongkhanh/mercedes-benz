document.getElementById('btnReadMore').addEventListener('click',function(){
  var x = document.querySelectorAll(".categoryItemHiden");
  console.log(x)
    for(var i = 0; i < x.length; i++){
       x[i].style.display = "block";
       x[i].style.transition = "all .5s";
       console.log(x[i])
    }
    document.getElementById("btnReadMore").style.display = "none"
});