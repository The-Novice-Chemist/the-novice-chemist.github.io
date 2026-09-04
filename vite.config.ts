import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';

function getHtmlInputs(dir = __dirname, inputs: Record<string, string> = {}) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.name === 'node_modules' || file.name === 'dist' || file.name.startsWith('.')) continue;
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      getHtmlInputs(fullPath, inputs);
    } else if (file.name.endsWith('.html')) {
      const relative = path.relative(__dirname, fullPath);
      const name = relative.replace(/\.html$/, '').replace(/[\\/]/g, '_');
      inputs[name] = fullPath;
    }
  }
  return inputs;
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      build: {
        rollupOptions: {
          input: getHtmlInputs(),
        },
      },
      plugins: [],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

