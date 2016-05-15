var gulp=require('gulp');
var tsc=require('gulp-typescript');
var del=require('del');

var SRC='./src/ts/**/*.ts';
var DEST='./src/js/';

var HOME_SRC='./*.ts';
var HOME_DEST='./';


gulp.task('compile',function(){
   
   var tsProject=('./src/ts/tsconfig.json');
   
   gulp.src(SRC).pipe(tsc(tsProject)).pipe(gulp.dest(DEST));
   gulp.src(HOME_SRC).pipe(tsc(tsProject)).pipe(gulp.dest(HOME_DEST));
  
});


gulp.task('clean',function(){
   
   del(DEST+'/*.js').then((val)=>{});
    
});