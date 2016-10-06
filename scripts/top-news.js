var LEVIATH = LEVIATH || {};

(function(namespace){

  var topNewsLatest = function(){};

  topNewsLatest.prototype.getjson = function(){
    var wrap = $(".latest-news");
    var list = $("#news-list-latest").html();
    var template = Handlebars.compile(list);
    var tempArray = [];

    $.getJSON("/json/news.json", function(data) {

      var value = data.news[0];

      var image = value.image;
      title = value.title,
      category = value.category,
      link = value.link,
      word = value.word,
      id = value.id,
      date = value.date,
      dateShow = date.replace(/-/g, ".");

      var obj = {};

      obj.image = image,
      obj.title = title;
      obj.category = category;
      obj.link = link;
      obj.word = word;
      obj.id = id;
      obj.date = date;
      obj.dateShow = dateShow;

      var html = template(obj);
      wrap.html(html);

    });
  }



  namespace.topNewsLatest = topNewsLatest;

})(LEVIATH);

$(function(){

var test = new LEVIATH.topNewsLatest();

test.getjson();
});