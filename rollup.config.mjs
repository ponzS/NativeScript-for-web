import dts from 'rollup-plugin-dts';
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default defineConfig([
  {
    input: 'src/index.ts',
    plugins: [
      postcss({ extract: 'index.css' }),
      typescript({ tsconfig: './tsconfig.json', declaration: false })
    ],
    output: [
      { file: 'dist/index.js', format: 'esm', sourcemap: true },
      { file: 'dist/index.cjs', format: 'cjs', sourcemap: true }
    ]
  },
  {
    input: 'src/vue/index.ts',
    plugins: [
      postcss({ extract: 'vue.css' }),
      typescript({ tsconfig: './tsconfig.json', declaration: false })
    ],
    output: [
      { file: 'dist/vue.js', format: 'esm', sourcemap: true },
      { file: 'dist/vue.cjs', format: 'cjs', sourcemap: true }
    ]
  },
  {
    input: 'src/core/index.ts',
    plugins: [typescript({ tsconfig: './tsconfig.json', declaration: false })],
    output: [
      { file: 'dist/core.js', format: 'esm', sourcemap: true },
      { file: 'dist/core.cjs', format: 'cjs', sourcemap: true }
    ]
  },
  {
    input: 'src/index.types.ts',
    plugins: [dts()],
    output: {
      file: 'dist/types/index.d.ts',
      format: 'esm'
    }
  },
  {
    input: 'src/vue/index.types.ts',
    plugins: [dts()],
    output: {
      file: 'dist/types/vue.d.ts',
      format: 'esm'
    }
  },
  {
    input: 'src/core/index.ts',
    plugins: [dts()],
    output: {
      file: 'dist/types/core/index.d.ts',
      format: 'esm'
    }
  }
]);