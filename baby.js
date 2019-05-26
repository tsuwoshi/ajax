$(function(){
  var hash = location.hash;
  if (hash) {
    var pat = hash.replace(/#/,"");
    console.log('yes',hash,pat)
    //papa
    $.ajax({
      type: 'GET',
      url: 'add url',
      dataType: 'json',
      success: function(json){
        var len = json.feel01.length;
        var words = [];
        var pageUrl = '';
        for(var i=0; i < len; i++){
            words.push(json.feel01[i]);
          }
          //console.log('result '+words[pat].message);
          //pageUrl = 'url'+'#'+pat;
          //console.log(pageUrl);
          addUrl(pat,words);
      }
    });
  }else{
  //mama
  $.ajax({
    type: 'GET',
    url: 'add url',
    dataType: 'json',
    success: function(json){
      var len = json.feel01.length;
      var words = [];
      var pageUrl = '';
      for(var i=0; i < len; i++){
          words.push(json.feel01[i]);
        }
        var num = Math.floor(words.length*Math.random());
        //console.log('result '+words[num].message);
        //pageUrl = 'url'+'#'+num;
        //console.log(pageUrl);
        addUrl(num,words);
    }
  });
  }
});
 function addUrl(param,words){
   console.log('result '+words[param].message);
   var pageUrl = 'url'+'#'+param;
   console.log(pageUrl);
   //return pageUrl;
 }
