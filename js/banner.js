var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;
var imagemBanner = document.querySelector('#bannerDestaque');
function trocaBanner(){
    bannerAtual = (bannerAtual+1) % 2;
    imagemBanner.src = banners[bannerAtual]; 
    }
var timer = setInterval(trocaBanner, 4000);
var x = 0;

imagemBanner.onclick = function () {
    if(x==0) { 
        clearInterval(timer);
        
        alert('hm...');
        x=1
        }
    else{
        timer = setInterval(trocaBanner, 4000);
        alert('dois...');
        x=0;
    }
}