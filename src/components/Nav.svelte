<script lang="ts">

	interface LinkProp {
		name: string,
		url: string
	};

	const links: LinkProp[]  = [
		{
			name: 'News',
			url: '/'
		},
		{
			name: 'Liturgy',
			url: '/liturgy'
		},
		{
			name: 'Locations',
			url: '/locations'
		},
		{
			name: 'Chaplains',
			url: '/chaplains'
		},
		{
			name: 'Council',
			url: '/council'
		},
		{
			name: 'Catechism',
			url: '/catechism'
		},
		{
			name: 'Marriage Preparation',
			url: '/marriage-preparation'
		},
		{
			name: 'Kairali Nikethan',
			url: '/kairali-nikethan'
		},
		{
			name: 'Youth',
			url: '/youth'
		},
		{
			name: 'Gallery',
			url: '/gallery'
		},
		{
			name: 'Downloads',
			url: '/downloads'
		}
	]
</script>
<nav>
	<ul>
		{#each links as link}
			<li><a href={link.url}>{link.name}</a></li>
		{/each}
	</ul>
</nav>

<style lang="scss">
    @use '../style/variables';
	nav {
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	ul {
        margin: 0;
        padding: 0;
		display: flex;
		flex-direction: column;
        @media (min-width: variables.$max-width) {
            gap: 16px;
        }
	}
	li {
		list-style: none;
		padding: 0;
	}
	a {
		text-decoration: none;
        padding: 16px;
		text-transform: uppercase;
		letter-spacing: 0.08rem;
        display: inline-block;
        width: 100%;
        @media (min-width: variables.$max-width) {
            padding: 8px 16px;
            font-size: 0.8rem;
            display: inline;
        }
	}
</style>
