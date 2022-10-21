<script lang="ts">
	export let obituary = false;
	export let title: string;
	export let image = '';
	export let imageAlt = `${title} (Hero Image)`;
	export let url: string;
	export let pubDate: string;
</script>

<a href={url} class="blog-card">
	{#if image !== ''}
		<img src={image} alt={imageAlt} class:obituary={obituary}/>
	{/if}
	<time datetime={pubDate}>
		{new Date(pubDate).toLocaleDateString('de-at', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})}
	</time>
	<h2>{title}</h2>
</a>

<style lang='scss'>
	a {
		border: 1px solid var(--color-text-faded);
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 16px;
		border-radius: 2px;
		color: var(--color-text);
		:hover {
			color: inherit;
		}
	}
	h2 {
		margin: 0;
	}
	time {
		font-size: .8rem;
		color: var(--color-text-faded);
		letter-spacing: 1px;
	}
</style>
