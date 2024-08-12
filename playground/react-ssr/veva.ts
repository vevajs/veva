import defineConfig from 'veva';
// import app from '@veva/spa';
// import app from '@veva/ssr';
import app from '@veva/ssr-mutli';

export default defineConfig(async () => {
    return ssrMutli({
        entrypoint: 'src/index.tsx',
    })
});