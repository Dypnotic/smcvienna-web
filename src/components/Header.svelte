<script lang="ts">
  import Nav from "../components/Nav.svelte";

  let menuActive: boolean = false;
  const countUp = () => (menuActive = !menuActive);
</script>

<header>
  <div class="menu">
    <div class="top">
      <!-- svelte-ignore a11y-missing-content -->
      <a href="/" class="logo" aria-label="Home and Logo"/>
      <button title="Menu" class="menu-button" on:click={countUp}>
        <div class="line --short" />
        <div class="line" />
        <div class="line --short" />
      </button>
    </div>
    <Nav classes={menuActive ? "active" : ""} />
  </div>
</header>

<style lang="scss">
  header {
    width: 100%;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // Logo and Gradient animation
  .logo {
    width: 15ch;
    height: 10ch;
    background-color: crimson;
    -webkit-mask-image: url(/assets/logo_mini-icon-text.svg);
    mask-image: url(/assets/logo_mini-icon-text.svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
    mask-position: center;

    background: linear-gradient(222deg, #7b35cc, #e4b318, #31aa66, #1cb7ab);
    background-size: 800% 800%;
    animation: logoGradient 30s ease infinite;
    @media screen and (min-width: 756px) {
      width: 35ch;
      height: 15ch;
      -webkit-mask-image: url(/assets/logo_icon-text.svg);
      mask-image: url(/assets/logo_icon-text.svg);
    }
  }

  @keyframes logoGradient {
    0% {
      background-position: 91% 0%;
    }
    50% {
      background-position: 10% 100%;
    }
    100% {
      background-position: 91% 0%;
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
    border-radius: 50px;
    cursor: pointer;
    &:active {
      background: rgb(12 12 12 / 0.1);
    }
  }
  .line {
    background-color: var(--color-text);
    width: 30px;
    height: 3px;
    border-radius: 3px;

    &.--short {
      width: 20px;
    }
  }
</style>
