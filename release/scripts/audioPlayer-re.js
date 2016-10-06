$(function() {


    var album = albumList;
    var info = albumInfo;
    
    var albumName = [];
    var index = 0;

    var musicGather = $(".re-music-gather");


    var listHtml = '<li class="music-name-list">';
    listHtml += '<a href="javascript:void(0)">';
    listHtml += '<span class="music-num"></span>';
    listHtml += '<span class="music-name"></span>';
    listHtml += '<span class="music-artist"></span>';
    listHtml += '</a></li>';



    (function(){

      var firstAlbum = album.leveration01;
      setCd(firstAlbum);

    })();


    function setCd(trackList) {

        albumName = [];

        musicGather.html("");

        for (var i = 0; i < trackList.musicInfo.length; i++) {

            musicGather.append(listHtml);

            var num = $(".music-num").eq(i);
            var name = $(".music-name").eq(i);
            var artist = $(".music-artist").eq(i);

            num.text(trackList.musicInfo[i].id);
            name.text(trackList.musicInfo[i].title);
            artist.text(trackList.musicInfo[i].artist);

            albumName[i] = new Audio();
            albumName[i].preload = "none";
            albumName[i].src = trackList.musicInfo[i].src;
            albumName[i].load();
        }

        onClickMusic();

    }

    function stopMusic(){
      albumName[index].pause();
      albumName[index].currentTime = 0;
    }


    function onClickMusic() {

    var $musicList = $(".music-name-list").find("a");

      $musicList.on("click",function(){

        stopMusic();

        var $this = $(this);
        index = $musicList.index(this);

        albumName[index].play();

        return false;

      });
    }



    function onClickCover() {

        var $albumList = $(".re-lineup-works-list");

        $albumList.on("click",function() {

            stopMusic();

            var $this = $(this),
                name = $this.attr("data-album"),
                selectAlbum,
                selectInfo;

            if (name === "leveration01") {
                selectAlbum = album.leveration01;
                selectInfo = info.leveration01;
            } else if (name === "emotive_brilliance2") {
                selectAlbum = album.emotive_brilliance2;
                selectInfo = info.emotive_brilliance2;
            }

            setCd(selectAlbum);
            changeCover(selectInfo);

        });
    }

    function changeCover(obj){

        var albumTitle = $(".re-album-title");
        var albumImg = $(".re-music-area-left").find("img");
        var outer = $(".canvas-outer");
        var modalInner2 = $("#modal-inner-contents-2").find("img");
        var modalInner1 = $("#modal-inner-contents-1").find("ul");

        modalInner1.html("");

        albumTitle.text(obj.title);
        albumImg.attr("src",obj.img);
        outer.css("background-color",obj.bgColor);
        modalInner2.attr("src",obj.detail);

        console.log(obj.store.length);

        for(var i = 0; i < obj.store.length; i++){

            var store = obj.store[i];
            var html = '<li>';
            html += '<a href="' +store.link+ '" target="_blank">';
            html += store.name;
            html += '</a></li>';

            modalInner1.append(html);
        }



    }

    onClickMusic();
    onClickCover();

});
