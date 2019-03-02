function ajax(){
var recieve = JSON.stringify({img:"aaa",region:{img02:"bbb"}});
var obj = $.parseJSON(recieve);
var logoName = obj.region.img02;
var imgList = $('.logos');
var after = ".jpg";
//戻り値があればコンテンツ追加
if (obj) {
  for (var i = 0; i < imgList.length; i++) {
    imgList[i].src =logoName+after;
    console.log(imgList[i].src);
    imgList.parents().removeClass('hide');
  }
}else{//戻り値なければエラー画面へ遷移

}
}
