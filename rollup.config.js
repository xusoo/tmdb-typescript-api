import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import includepaths from 'rollup-plugin-includepaths';
import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

export default {
	entry: 'src/index.ts',
	format: 'cjs',
	dest: 'dist/index.js',
	sourceMap: true,
	plugins: [
		resolve({
			module: true,
		}),
		typescript(),
		commonjs({
			include: 'node_modules/**'
		}),
		includepaths({
			paths: ['src']
		}),
		babel({
			exclude: 'node_modules/**'
		}),
		sourcemaps(),
		uglify()
	]
};