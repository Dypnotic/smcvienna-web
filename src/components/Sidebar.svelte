<script>
	import Header from './Header.svelte'
import Nav from './Nav.svelte'
  import SmallAdress from './SmallAdress.svelte'
</script>

<div class="sidebar">
	<Nav />
	<SmallAdress />
</div>

<style lang="scss">
	.sidebar {
		position: sticky;
		width: 250px;
		display: flex;
		flex-direction: column;
		padding: 24px 0;
		justify-content: space-between;
		height: calc(100vh - 182px);
	}
</style>
