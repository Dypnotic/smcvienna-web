<nav>
	<ul>
		<li><a href="/">Blog</a></li>
		<li><a href="/gallery">Gallery</a></li>
		<li><a href="/">Catecism</a></li>
	</ul>
</nav>

<style lang="scss">
    @use '../style/variables';
	nav {
		width: 100%;
		height: 100%;
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
