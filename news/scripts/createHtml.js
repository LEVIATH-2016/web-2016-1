var LEVIATH = LEVIATH || {};

(function(namespace) {

    var createHtml = function() {};

    createHtml.prototype = {

        getJson: getJson

    }

    function getJson() {

        var wrap = $(".news-wrap");
        var list = $("#news-list").html();
        var template = Handlebars.compile(list);
        var tempArray = [];

        $.getJSON("/json/news.json", function(data) {

            var value = data.news;

            for (var i = 0; i < value.length; i++) {

                var image = value[i].image;
                    title = value[i].title,
                    category = value[i].category,
                    link = value[i].link,
                    word = value[i].word,
                    id = value[i].id,
                    date = value[i].date,
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

                Handlebars.registerHelper('convert', function(pos) {
                    if (pos % 2 === 0) {
                        return 'left';
                    } else {
                        return 'right';
                    }
                });

                tempArray.push(obj);

            }

            var content = {
                news: tempArray
            }

            var html = template(content);
            wrap.html(html);

        });
    }

    namespace.createHtml = createHtml;

})(LEVIATH);
