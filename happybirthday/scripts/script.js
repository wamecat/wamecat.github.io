const buttom=document.getElementById("buttom")
const BGM=document.getElementById("BGM")
buttom.addEventListener("click",()=>{
   BGM.autoplay = true;
   BGM.loop=true;
   BGM.play();
   const getin = document.querySelectorAll('.get-in');  // 这里修改为正确的类选择器写法
   getin.forEach(function (image) {
       image.style.display = "block";
       image.style.opacity = 1;
   });

});
audio=document.getElementById("blow")
const image = document.getElementById('c4');
image.addEventListener('click', function() {
  image.src = "imags/candle40.png"
  audio.play();
  alert("许下第一个愿望")
  alert("祝老爸身体健康，精神饱满")
});

const image1 = document.getElementById('c8');
image1.addEventListener('click', function() {
    image1.src="imags/candle80.png";
    audio.play();  
    alert("许下第三个愿望")
    alert("祝老爸运气爆棚，万事胜意")
});

const image2 = document.getElementById('c1');
image2.addEventListener('click', function() {
    image2.src="imags/candle10.png";
    audio.play();  
    alert("许下第二个愿望");
    alert("祝老爸事业顺心，生活幸福")
});