module.exports = function(grunt){
	grunt.initConfig({
		jshint: {
		  all: ['application.js']
		},
		uglify: {
			my_target: {
			  files: {
			    'application.min.js': ['application.js']
			  }
			}
		},
		cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      'style.min.css': ['style.css']
		    }
		  }
		},
		concat:{
			js:{
				src: ['controllers/*.js','directives/{,*/}*.js'],
				dest: 'application.js'
			}
		},
	    less: {
	      	'style.css': ['css/*.less','directives/{,*/}*.less']
	    },
		watch: {
			scripts: {
		        files: ['controllers/*.js','directives/{,*/}*.js'],
		        tasks: ['concat','uglify']
			},
			less: {
	            files: ['css/*.less','directives/{,*/}*.less'],
	            tasks: ["less"],
	            options: {
	                livereload: true
	            }
	        },
			livereload: {
		        options: {
		          livereload: true
		        },
		        files: ['controllers/*.js','css/*.less','directives/{,*/}*.js', 'directives/{,*/}*.less']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['concat:js','less','watch','uglify']);
	grunt.registerTask('minif',['uglify','cssmin']);
	grunt.registerTask('jshint',['jshint']);
};