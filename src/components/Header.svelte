<script lang="ts">
	import Nav from './Nav.svelte'
	import SmallAddress from './SmallAddress.svelte'

	let isMenuActive: boolean = false
	const toggleMenu = () => (isMenuActive = !isMenuActive)
</script>

<header>
	<div class="menu">
		<div class="top">
			<!-- svelte-ignore a11y-missing-content -->
			<a href="/" class="logo" aria-label="Home and Logo" />
			<button
				title="Menu"
				class={`menu-button ${isMenuActive ? 'active' : ''}`}
				on:click={toggleMenu}>
				<div class="line --short" />
				<div class="line" />
				<div class="line --short" />
			</button>
		</div>
		<div class={`nav-container ${isMenuActive ? 'active' : ''}`}>
			<Nav />
			<SmallAddress />
		</div>
	</div>
</header>

<style lang="scss">
	@use '../style/variables.scss';
	header {
		display: flex;
		justify-content: center;
		width: 100%;
		top: 0;
		background-color: var(--color-bg);
	}

	.menu {
		padding: 16px;
		width: 100%;
		max-width: variables.$max-width;
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	// Logo and Gradient animation
	.logo {
		width: 150px;
		height: 80px;
		background-color: crimson;
		-webkit-mask-image: url(/assets/logo_mini-icon-text.svg);
		mask-image: url(/assets/logo_mini-icon-text.svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: contain;
		mask-size: contain;
		mask-position: center left;

		background: var(--gradient-bg);
		background-size: 600% 600%;
		animation: gradientAnimation 30s ease infinite;

		@media screen and (min-width: variables.$max-width) {
			width: 400px;
			height: 150px;
			-webkit-mask-image: url(/assets/logo_icon-text.svg);
			mask-image: url(/assets/logo_icon-text.svg);
		}
	}

	// Menu Button
	.menu-button {
		border: none;
		background: none;

		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 16px;
		cursor: pointer;
		transition: background-color 0.3s ease-in-out;

		&:active,
		&:hover {
			background-color: var(--color-links);
			.line {
				background-color: var(--color-bg);
			}
		}
		@media screen and (min-width: variables.$max-width) {
			display: none;
		}
		&.active {
			.line {
				width: 0;
				&.--short {
					width: 30px;
					&:first-of-type {
						rotate: 45deg;
						translate: 0 8px;
					}
					&:last-of-type {
						rotate: -45deg;
						translate: 0 -8px;
					}
				}
			}
		}
	}
	.line {
		background-color: var(--color-text);
		width: 30px;
		height: 3px;
		border-radius: 3px;
		transition: background-color 0.3s ease-in-out, width 0.3s ease-in-out, rotate 0.3s ease-in-out, translate 0.3s ease-in-out;

		&.--short {
			width: 20px;
		}
		
	}

	.nav-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: fixed;
		width: 100%;
		max-width: 600px;
		height: calc(100% - 112px);
		padding: 16px 0;
		bottom: 0;
		left: -100vh;
		-webkit-backdrop-filter: blur(15px);
		backdrop-filter: blur(15px) brightness(80%);
		transition: left 0.3s ease-in-out;
		@media screen and (min-width: variables.$max-width) {
			display: none;
		}
		&.active {
			left: 0;
		}
	}
</style>
