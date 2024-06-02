<script lang="ts">
	export let title: string;
	export let image = '';
	export let imageAlt = `${title}`;
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
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 16px;
		background-color: var(--color-bg-l2);
		border-radius: 4px;
		color: var(--color-text);
		width: 182px;
		&:hover {
			box-shadow: 0 6px 6px var(--color-shadow);
			background-color: var(--color-bg-l3);
		}
	}
	h2 {
		margin: 0;
		font-size: 1rem;
	}
</style>
