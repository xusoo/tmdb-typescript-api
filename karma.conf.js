module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		client: {
			apiKey: config.apiKey
		},


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine', 'fixture'],


		// list of files / patterns to load in the browser
		files: [
			'spec/**/*.spec.ts',
			'spec/fixtures/**/*.json'
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'**/*.ts': ['rollup'],
			'**/*.json': ['json_fixtures']
		},

		rollupPreprocessor: {
			plugins: [
				require('rollup-plugin-node-resolve')({
					module: true
				}),
				require('rollup-plugin-typescript2')(),
				require('rollup-plugin-commonjs')({
					include: 'node_modules/**'
				}),
				require('rollup-plugin-babel')({
					exclude: 'node_modules/**'
				})
			],
			output: {
				format: 'cjs'
			}
		},

		mime: {
			'text/x-typescript': ['ts']
		},

		jsonFixturesPreprocessor: {
			variableName: '__json__'
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['ChromeHeadless'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	});
};
