<script lang="ts">
	import Header from './Header.svelte'
	import Nav from './Nav.svelte'
  import SmallAdress from './SmallAdress.svelte'
</script>

<div class="sidebar">
	<Nav />
	<div class="bottom">
		<SmallAdress />
	</div>
</div>

<style lang="scss">
	.sidebar {
		width: 250px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		padding: 24px 0;
	}
	.bottom {
		position: sticky;
		bottom: 24px;
		justify-self: end;
	}
</style>
