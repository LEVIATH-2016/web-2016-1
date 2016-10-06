var LEVIATH = LEVIATH || {};

(function(namespace) {

    var footerShare = function() {}

    footerShare.prototype = {
        showWindow: showWindow,
        makeContents: makeContents,
        createWindow: createWindow,
        facebookShare: facebookShare
    }

    function showWindow() {

        var that = this,
            $btn = $(".footer-tw"),
            $twText = $("#tw-text").attr("content");

        $btn.on("click",function() {

            var $this = $(this);
            that.makeContents($twText);

        });

    }

    function makeContents(title) {
        
        var url = 'https://twitter.com/share?url=' + document.URL.replace(/\#.+$/g, "") + '&text=' + encodeURI(title + " | LEVIATH");
        this.createWindow(url, "twWindow");
    }

    function createWindow(url, name) {
        window.open(url, name, 'width=700,height=600,personalbar=0,toolbar=0,scrollbars=1,resizable=1');
    }


////////////////////////////////////////////////////////////////////////



function facebookShare(url){

  var url = location.href;
  var x = screen.width/2 - 626/2;
  var y = screen.height/2 - 436/2;
  // alert(url);

  $(".footer-fb").on("click",function(){
    // $(".sharebtn-area .btn-fb a").attr("href","http://www.facebook.com/sharer/sharer.php?u= ")
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),
      '_blank',
      'width=626,height=436,left='+x+',top='+y
      ); return false;
  });
};

    namespace.footerShare = footerShare;


})(LEVIATH);

$(function(){

    var footerShare = new LEVIATH.footerShare();

    footerShare.showWindow();
    footerShare.facebookShare();

});