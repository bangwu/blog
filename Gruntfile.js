/**
 * Created by wubang on 3/5/15.
 */
module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            //build: {
            //    src: 'src/<%=pkg.name %>.js',
            //    dest: 'build/<%= pkg.name %>.min.js'
            //},
            static_mappings:{
                files: [
                    {
                        src: './bower_components/jquery/dist/jquery.js',
                        dest: './app/assets/javascripts/jquery.min.js'
                    }
                ]
            }
        },
        concat_css: {
            all: {
                src: ["./bower_components/bootstrap/dist/css/bootstrap.css"],
                dest: "./app/assets/stylesheets/bootstrap.css"
            }
        }
    });

    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concat-css');

    // 默认任务
    grunt.registerTask('default', ['uglify','concat_css']);
}