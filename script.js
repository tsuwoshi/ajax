function ajax(){
var recieve = JSON.stringify({img:"aaa",region:{img02:"bbb"}});
var obj = $.parseJSON(recieve);
var logoName = obj.region.img02;
var imgList = $('.logos');
var after = ".jpg";
var container = $('#wrap');
//戻り値があればコンテンツ追加
if (obj) {
  sessionStorage.logoName = recieve;
  for (var i = 0; i < imgList.length; i++) {
    imgList[i].src =logoName+after;
    console.log(imgList[i].src);
    //要素生成
    container.append('<div>');
    console.log(sessionStorage.getItem('logoName'));
  }
}else{//戻り値なければエラー画面へ遷移

}
}
