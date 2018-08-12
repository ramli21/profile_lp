var gulp = require("gulp"),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	browserSync = require("browser-sync"),
	webpack = require("webpack-stream");

gulp.task("sass", function() {
	return gulp.src('./resources/assets/sass/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('./public/assets/css'))
})

gulp.task("script", function() {
	return gulp.src("./resources/assets/js/**/*.js")
		.pipe(webpack(require("./webpack.config.js")))
		.pipe(gulp.dest("./public/assets/js"));
})

gulp.task("serve", function() {
	browserSync.init({
		server: {
			baseDir: "./public/"
		}
	})

	gulp.watch("./resources/assets/sass/**/*.scss", ["script"]);
	gulp.watch("./resources/assets/js/**/*.js", ["script"]);
	gulp.watch("./public/assets/js/bundle.js").on('change', browserSync.reload);
	gulp.watch("./public/*.html").on('change', browserSync.reload);
})

