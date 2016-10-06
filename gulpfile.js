var gulp = require('gulp'); //gulp
var sass = require("gulp-sass"); //sass用
var autoprefixer = require('gulp-autoprefixer'); //css prefixer
var browser = require("browser-sync"); //ブラウズreload
var plumber = require("gulp-plumber"); //watchの時エラー出ても実行する
var csscomb = require("gulp-csscomb"); //cssの整形
var rename = require("gulp-rename"); 


  // gulpを実行したカレントディレクトリ
  var cwd   = process.env.INIT_CWD;

  // Sassコンパイル元のディレクトリ
  
  var srcd  = cwd + '/sass/';

  // Sassコンパイル後の保存先ディレクトリ
  // コンパイルされたCSSは名前そのままで/css/ディレクトリに入る
  var destd = cwd + '/styles/';


gulp.task("test",function(){

//test用



	

});
 
gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', function() {
    gulp.watch("sass/**/*.scss",["sass"]);
    gulp.watch("**/*.scss",["sass"]);
});

gulp.task("sass", function() {
    gulp.src(["**/*.scss","!./node_modules/**"])
    .pipe(rename(function(path){
    	if(path.dirname === "sass"){
    		path.dirname = path.dirname.replace("sass","styles");
    	}else{
    		path.dirname = path.dirname.replace("/sass","/styles");
    	}
    	return path 
    }))
    	.pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest("./"))
        .pipe(browser.reload({stream:true}))
});
