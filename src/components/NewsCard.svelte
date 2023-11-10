<script lang="ts">
	export let obituary = false
	export let title: string
	export let image = ''
	export let imageAlt = `${title} (Hero Image)`
	export let link = ''
	export let url: string
	export let pubDate: string
	export let updateDate = pubDate
</script>

<a href={link !== '' ? link : url} class="news-card">
	{#if image !== ''}
		<img
			src={`${import.meta.env.PUBLIC_ASSETS}${image}`}
			alt={imageAlt}
			width="684"
			height="360"
			class:obituary />
	{/if}

	{#if pubDate === updateDate}
		<time datetime={pubDate}>
			{new Date(pubDate).toLocaleDateString('de-at', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			})}
		</time>
	{:else}
		<time datetime={pubDate}>
			Updated
			{new Date(updateDate).toLocaleDateString('de-at', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			})}
		</time>
	{/if}

	<h2>{title}</h2>
	<button type="button">Open the {title} post</button>
</a>

<style lang="scss">
	img {
		object-fit: contain;
	}
	a {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
		padding: 16px;
		border-radius: 4px;
		color: var(--color-text);
		box-shadow: 0 4px 4px var(--color-shadow);
		background-color: var(--color-bg-l2);
		transition: box-shadow 0.3s ease, background-color 0.3s ease;
		&:hover {
			box-shadow: 0 6px 6px var(--color-shadow);
			background-color: var(--color-bg-l3);
		}
	}
	h2 {
		margin: 0;
	}
	time {
		font-size: 0.8rem;
		color: var(--color-text);
		letter-spacing: 1px;
	}
	button {
		flex-shrink: 1;
	}
</style>
