import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import svelte from '@astrojs/svelte'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
	integrations: [image(), svelte(), mdx()],
})
