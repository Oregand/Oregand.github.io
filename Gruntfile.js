module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '\n/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> by david\n' +
            '' +
            ' * Copyright <%= grunt.template.today("yyyy") %> oregand.github.io\n' +
            '' +
            ' */\n',
        concat: {
            'oregand.github.io': {
                src: [
                    'js/oregand.js',
                    'css/animate.css',
                    'css/animations.css',
                    'css/oregand.css',
                ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            'oregand.github.io': {
                src: ['dist/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            'oregand.github.io': {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    'dist/<%= pkg.name %>.min.css': ['dist/<%= pkg.name %>.css']
                }
            }
        },
        clean: {
            js: ["dist/*.js", "!dist/*.min.js"],
            css: ["dist/*.css", "!dist/*.min.css"]
        },
        watch: {
            css: {
                files: ['css/css/**/*.css'],
                tasks: ['css', 'cssmin']
            },
            js: {
                files: ['js/js/**/*.js'],
                tasks: ['concat', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['concat', 'uglify', 'cssmin', 'clean']);
};