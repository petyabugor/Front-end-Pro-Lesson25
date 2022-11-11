import gulp from "gulp";
import { path } from "./gulp/path/path.js";
          
global.app = {
    path: path,
    gulp: gulp
}
import { copy } from "./gulp/tasks/copy.js";


function watcher() {
    gulp.watch(path.watch.files, copy)
}


import babel from "gulp-babel";
const requiredFiles = ['src/**/*.js', 
                    '!js/vendors/**/*.js'];

gulp.task('babelTest', function () {
    return gulp.src(requiredFiles)
            .pipe(babel({presets: ['@babel/preset-env'] })) 
            
});


const dev = gulp.series('babelTest', copy, watcher)

gulp.task('default', dev)

