var LEVIATH = LEVIATH || {};

(function(namespace) {

    var twShare = function() {}

    twShare.prototype = {
        showWindow: showWindow,
        makeContents: makeContents,
        createWindow: createWindow
    }

    function showWindow(btn, title) {

        var that = this,
            $btn = btn,
            $title = title;

        $btn.on("click",function() {

            var $this = $(this),
                index = $btn.index(this),
                titleText = $title.eq(index).text();

            that.makeContents(titleText);

        });

    }

    function makeContents(title) {
        var url = 'https://twitter.com/share?url=' + document.URL.replace(/\#.+$/g, "") + '&text=' + encodeURI(title + " | LEVIATH");
        this.createWindow(url, "twWindow");
    }

    function createWindow(url, name) {
        window.open(url, name, 'width=700,height=600,personalbar=0,toolbar=0,scrollbars=1,resizable=1');
    }

    namespace.twShare = twShare;

//////////////////////////////////////////////////////////////////////////////////////////

    var fbShare = function() {}


    fbShare.prototype.showWindow = function(btn,title){

        var that = this,
            $btn = btn,
            $title = title;

        $btn.on("click",function() {


            var $this = $(this),
                index = $btn.index(this),
                titleText = $title.eq(index).text();

            that.makeContents(titleText);

        });

    }

    fbShare.prototype.makeContents = function(title){

      var pUrl = "&p[url]=";
      var pImages = "&p[images][0]=";
      var pTitle = "&p[title]=";
      var pSummary = "&p[summary]=";
      var pM2 = "&m2w";

      var url = 'https://www.facebook.com/sharer.php?s=100' + pUrl + encodeURIComponent(location.href) + pImages + "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-frc1/425113_276411052428693_1745927864_n.jpg" + pM2;

      this.createWindow(url, "fbWindow");

    }

    fbShare.prototype.createWindow = function(url,name){

        console.log(url)

        window.open("https://www.facebook.com/sharer.php?s=100&p[url]=http://www.c-yokohama.com/&p[summary]=テストです",name,'width=700,height=600,personalbar=0,toolbar=0,scrollbars=1,resizable=1')
    }

    namespace.fbShare = fbShare;


})(LEVIATH);
