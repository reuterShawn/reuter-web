
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      // Options
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true
    })
  }
}