<script lang="ts">
	export let image:string;
	export let name: string;
	export let role: string;
	export let roleTranslation: string;
</script>
<div>
	<img src={image} alt={`Photo of ${name}`}>
	<span class="name"><em>{name}</em></span> <br />
	<span class="role">{role}</span> <br />
	<span lang="de" class="role-translation">{roleTranslation}</span>
</div>
<style>
	div {
		display: flex;
		flex-direction: column;
		width: 150px;
		padding: 8px;
		border: 1px solid var(--color-text-faded);
		border-radius: 2px;
	}

	.name {
		font-size: 1.1rem;
	}
	.role, .role-translation {
		text-transform: uppercase;
		font-size: .8rem;
		letter-spacing: 1px;
	}
</style>