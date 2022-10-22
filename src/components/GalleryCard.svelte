<script lang="ts">
	export let title: string;
	export let image = '';
	export let imageAlt = `${title} (Hero Image)`;
	export let url: string;
</script>

<a href={url}>
		<img src={image} alt={imageAlt} width="150" height="150">
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
		width: 182px;
		:hover {
			color: inherit;
		}
	}
	h2 {
		margin: 0;
		font-size: 1rem;
	}
</style>
