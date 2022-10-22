<script>
	import { onMount } from 'svelte'
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import 'photoswipe/style.css'
	export let galleryID
	export let images

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe'),
		})
		lightbox.init()
	})
</script>

<div class="gallery" id={galleryID}>
	{#each images as image}
		<a
			href={image.largeURL}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer">
			<img
				src={image.thumbnailURL}
				alt={`${galleryID} photo`}
				width="150"
				height="150"
				loading="lazy" />
		</a>
	{/each}
</div>

<style lang="scss">
	.gallery {
		display: flex;
		flex-flow: row wrap;
		gap: 32px;
	}

	a {
		display: block;
		padding: 0;
		margin: 0;
		line-height: 0;
	}

	img {
		object-fit: cover;
	}
</style>
