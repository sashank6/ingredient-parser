var gulp=require('gulp');
var tsc=require('gulp-typescript');
var del=require('del');

var SRC='./src/ts/**/*.ts';
var DEST='./src/js/';


gulp.task('compile',function(){
   
   var tsProject=('./src/ts/tsconfig.json');
   
   return gulp.src(SRC).pipe(tsc(tsProject)).pipe(gulp.dest(DEST));
   
    
});


gulp.task('clean',function(){
   
   del(DEST+'/*.js').then((val)=>{});
    
});