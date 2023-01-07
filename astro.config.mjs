import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';

import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax"

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [
		  remarkMath
		],
		rehypePlugins: [
		  rehypeMathjax
		]
	  },
	integrations: [mdx(), preact()],
});
