/**
 * Created by Administrator on 2016/9/7.
 */
var gulp = require("gulp"),
   /* htmlmin=require('gulp-htmlmin'),*/
    css_min = require("gulp-minify-css"),
    imagemin = require("gulp-imagemin"),
    uglify = require("gulp-uglify"),
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//文件更名
    notify = require('gulp-notify');//提示信息

gulp.task('html', function () {

    return gulp.src('*.html')
       /* .pipe(htmlmin({collapseWhitespace: true}))*/
        .pipe(gulp.dest('./dist'))
        .pipe(notify({message: 'html task ok'}));

});
gulp.task('imgMin', function () {
    return  gulp.src('images/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({ message: 'img task ok' }));
});
// 合并、压缩、重命名css
gulp.task('css', function() {
    return gulp.src('css/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(css_min())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({ message: 'css task ok' }));
});


// 合并、压缩js文件
gulp.task('js', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'js task ok' }));
});
gulp.task('movejs', function() {
    return gulp.src('js/lib/*.js')
        .pipe(gulp.dest('dist/js/lib'))
        .pipe(notify({ message: 'js task ok' }));
});
// 默认任务
gulp.task('default', function(){
    gulp.run('imgMin', 'css', 'js', 'movejs','html');

    // 监听html文件变化
    gulp.watch('*.html', function(){
        gulp.run('html');
    });

    // Watch .css files
    gulp.watch('css/*.css', ['css']);


    // Watch .js files
    gulp.watch('js/*.js', ['js']);

    gulp.watch('js/lib/*.js',['movejs']);

    // Watch image files
    gulp.watch('images/*', ['imgMin']);
});