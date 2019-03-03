function ajax(){
var recieve = JSON.stringify({img:"aaa",region:{img02:"bbb"}});
var obj = $.parseJSON(recieve);
var logoName = obj.region.img02;
var imgList = $('.logos');
var after = ".jpg";
var container = $('#wrap');
//戻り値があればコンテンツ追加
if (obj) {
  sessionStorage.logoName = recieve; //Storageに保存
  for (var i = 0; i < imgList.length; i++) {
    imgList[i].src =logoName+after;
    console.log(imgList[i].src);
    console.log(sessionStorage.getItem('logoName'));
  }
}else{//戻り値なければエラー画面へ遷移

}
}
//モーダル内src書き換え ajax関数内に書く
$('.logos').on("click",function(){
  var refSrc = $(this).attr('src');
  $('#modal img').attr('src',refSrc);//logoかiconかを確認しておく
});
