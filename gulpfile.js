'use strict';
var gulp = require('gulp');


gulp.task('dist', function(){

  return gulp.src('./app/*')
		.pipe(gulp.dest('./dist/'));
});
     
