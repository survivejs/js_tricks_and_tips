var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
    return connect['static'](path.resolve(point));
};

module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 4000,
                    base: '.'
                }
            },
            livereload: {
                options: {
                    port: 9001,
                    middleware: function(connect, options) {
                        return [lrSnippet, folderMount(connect, '.')];
                    }
                }
            }
        },
        regarde: {
            css: {
                files: 'stylesheets/**/*.css',
                tasks: ['refresh']
            },
            js: {
                files: 'js/**/*.js',
                tasks: ['refresh']
            },
            html: {
                files: '*.html',
                tasks: ['refresh']
            }
        },
        shell: {
            build: {
                command: './scripts/build.sh'
            }
        }
    });

    grunt.registerTask('refresh', ['shell:build']);
    grunt.registerTask('default', ['refresh', 'connect:server', 'livereload-start', 'regarde']);

    ['grunt-shell',
     'grunt-regarde',
     'grunt-contrib-connect',
     'grunt-contrib-livereload'].forEach(grunt.loadNpmTasks);
};
