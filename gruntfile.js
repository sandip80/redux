module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            dev: {
                src: ['src/scripts/**/*.ts'],
                dest: 'build',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    sourceMap: false,
                    declaration: false
                }
            }
        },
        
        uglify: {
            options: {
                mangle: false
            },
            
            my_target: {
                files: {
                    'public/game.min.js': ['build/*.js', 'build/**/*.js']
                }
            }
        },

        copy: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: [
                            'assets/**'
                        ],
                        dest: 'public/'
                    },
                    {
                        src: 'src/index.html',
                        dest: 'public/index.html'
                    },
                    {
                        src: 'src/phaser/phaser.js',
                        dest: 'public/phaser.js'
                    }
                ]
            }
        },

        clean: {
            dev: ['public/**/*', 'build'],
        },

        watch: {
            scripts: {
                files: ['src/**/*'],
                tasks: ['dev'],
                options: {
                    spawn: false,
                    debounceDelay: 250
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', [
        'clean:dev',
        'ts:dev',
        'uglify',
        'copy:dev'
    ]);
};
