<script lang="ts">
	export let obituary = false;
	export let title: string;
	export let image = '';
	export let imageAlt = `${title} (Hero Image)`;
	export let url: string;
	export let pubDate: string;
	export let updateDate = pubDate;
</script>

<a href={url} class="blog-card">
	{#if image !== ''}
		<img src={`${import.meta.env.PUBLIC_ASSETS}${image}`} alt={imageAlt} width="684" height="360" class:obituary={obituary}/>
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
</a>
<style lang='scss'>
	img{
		object-fit: contain;
	}
	a {
		border: 1px solid var(--color-text-faded);
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 16px;
		border-radius: 2px;
		color: var(--color-text);
	}
	h2 {
		margin: 0;
	}
	time {
		font-size: .8rem;
		color: var(--color-text);
		letter-spacing: 1px;
	}
</style>
