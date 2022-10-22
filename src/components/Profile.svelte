<script lang="ts">
	export let image: string
	export let name: string
	export let role: string | undefined
	export let roleTranslation: string | undefined
</script>

<div>
	<img src={image} alt={`Photo of ${name}`} />
	<span class="name"><em>{name}</em></span> <br />
	{#if role}
		<span class="role">{role}</span> <br />
	{/if}
	{#if roleTranslation}
		<span lang="de" class="role-translation">{roleTranslation}</span>
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		width: 218px;
		padding: 8px;
		border: 1px solid var(--color-text-faded);
		border-radius: 2px;
		gap: 3px;
	}
	img {
		align-self: center;
		max-width: 150px;
	}
	.name {
		font-size: 1.1rem;
	}
	.role,
	.role-translation {
		text-transform: uppercase;
		font-size: 0.8rem;
		letter-spacing: 1px;
	}
	.role-translation {
		color: var(--color-text-faded);
	}
</style>
