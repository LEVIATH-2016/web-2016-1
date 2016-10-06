$(function() {



//コンストラクタ
    var Player = function(cdInfo){

        //コンストラクタで設定しているからインスタンス化しているのは、全部同じ曲が再生されるのでインスタンス化時に曲を登録するようにする。
        //それかロードするタイミング

        this.queue = new createjs.LoadQueue(true);
        this.queue.installPlugin(createjs.Sound);

        // this.queue.removeAll();

        this.queue.close();

        this.manifest = cdInfo;

//クリックした時点ではちゃんと値は渡ってる
// console.log(this.manifest);


        this.queue.loadManifest(this.manifest,false);




        //並列で読み込める(並列で読み込むから順番は担保されない)

        // this.queue.setMaxConnections(6);

    };



//曲情報
    var info = [{
            id: 'sound01',
            src: 'music/hard.mp3',
            title : 'Hello',
            artist : 'feat.(謎の人物K)'
        },{
            id: 'sound02',
            src: 'music/bibu.mp3',
            title : 'バイブレーション',
            artist : 'nowisee'
        },{
            id: 'sound03',
            src: 'music/air.mp3',
            title : 'air',
            artist : 'nowisee'
        },{
            id: 'sound04',
            src: 'music/stargazer.mp3',
            title : 'air',
            artist : 'nowisee'
        },{
            id: 'sound05',
            src: 'music/by-your-side.mp3',
            title : 'air',
            artist : 'nowisee'
        },{
            id: 'sound06',
            src: 'music/spherelight.mp3',
            title : 'air',
            artist : 'nowisee'
        }

    ];


    var remi = [{
            id: 'sound01',
            src: 'music/spherelight.mp3',
            title : 'Hello',
            artist : 'feat.(謎の人物K)'
        },{
            id: 'sound02',
            src: 'music/by-your-side.mp3',
            title : 'バイブレーション',
            artist : 'nowisee'
        },{
            id: 'sound03',
            src: 'music/air.mp3',
            title : 'air',
            artist : 'nowisee'
        },{
            id: 'sound04',
            src: 'music/stargazer.mp3',
            title : 'air',
            artist : 'nowisee'
        },{
            id: 'sound05',
            src: 'music/bibu.mp3',
            title : 'air',
            artist : 'nowisee'
        },{
            id: 'sound06',
            src: 'music/hard.mp3',
            title : 'air',
            artist : 'nowisee'
        }

    ];
//インスタンスは動的に作りたい
(function(){


//private変数
    
    var nowCd = new Player(info),
        $musicList = $(".music-name-list").find("a"),
        $set = $("#set"),
        $start = $("#start"),
        $stop = $("#stop"),
        $albumList = $(".re-lineup-works-list"),
        nowMusic = 0,
        interval = 0;

    var music = [],
        loopCount = 0;

    $albumList.eq(0).on("click",function(e){

        var $this = $(this),
            index = $albumList.index(this),
            album = $this.attr("data-album");

            
     nowCd.queue.load();


        
nowCd = new Player(info);
   


    console.log(nowCd.manifest[0]);
        

    });

    $albumList.eq(1).on("click",function(e){

        var $this = $(this),
            index = $albumList.index(this),
            album = $this.attr("data-album");

            
nowCd.queue.load();

        nowCd = new Player(remi);

        


    console.log(nowCd.manifest[0]);
        

    });




    nowCd.init = function(){
        nowCd.addEvnet();
        nowCd.playMusic();
        nowCd.stopMusic();
    }


    nowCd.dom = function(){

        var obj = {
            len : nowCd.manifest.length
        }

        return obj;

    }

    nowCd.addEvnet = function(e){

        this.queue.on('fileload',this.handleFileLoad);
        this.queue.on('loaded',this.handleFileComplete);
        this.queue.on('progress',this.handleProgress);

    }

    nowCd.handleFileLoad = function(event){




        if(music[loopCount] == undefined){


            music[loopCount] = createjs.Sound.createInstance(event.item.id);

            //怪しい
console.log(music[loopCount]);


          loopCount++;

        }

        

    }


    nowCd.handleFileComplete = function(e){
        // console.log(nowCd.dom());

        console.log(e);
    }

    nowCd.handleProgress = function(event){

        //並列で読み込むとうまく動かない？？
        //一回読み込んだらこの関数を破棄してprogressを０にしたい

        //数字がでないやつなら大丈夫かも
        

        if(event.progress == 1){


        }

    }

    nowCd.playMusic = function(){

        $musicList.on("click",function(e){

            clearTimeout(interval);
            music[nowMusic].stop();

            var $this = $(this);
                nowMusic = $('.music-name-list').find("a").index(this);

            

            e.preventDefault();


            // nowCd.duration(nowMusic);

            music[nowMusic].play();
        });
    }



    nowCd.stopMusic = function(){


        $stop.on("click",function(){

            // pause中にボタンが押されたなら再開し、pauseでないときに押されたらpauseする

            // music[nowMusic].paused ? music[nowMusic].paused = false : music[nowMusic].paused = true;

            music[nowMusic].stop();

            //ひとつ前の曲をstopさせる

        });
            
    }

    // nowCd.duration = function(now){

        

    //     var m,
    //         s;

    //     interval = setInterval(function(){

    //         //曲の長さの取得(setPositionで任意の所から再生可能)

    //         var dura = Math.floor(music[now].getPosition() / 1000);
    //         m = dura % 3600 / 60 | 0;
    //         s = dura % 60;

    //         var test = m + "分 :" + s + "秒";

            
    //     },100);


    // }

    // nowCd.getTime = function(now){

    //     var rem = (100 - music[now].getPosition);

    // }



nowCd.init();


}());



});
