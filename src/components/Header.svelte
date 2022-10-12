<script lang="ts">
  import Nav from "../components/Nav.svelte";

  let isMenuActive: boolean = false;
  const toggleMenu = () => (isMenuActive = !isMenuActive);
</script>

<header>
  <div class="menu">
    <div class="top">
      <!-- svelte-ignore a11y-missing-content -->
      <a href="/" class="logo" aria-label="Home and Logo"/>
      <button title="Menu" class="menu-button" on:click={toggleMenu}>
        <div class="line --short" />
        <div class="line" />
        <div class="line --short" />
      </button>
    </div>
    <div class={`nav-container ${isMenuActive ? "active" : ""}`} >
      <Nav />
    </div>
  </div>
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: center;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: var(--color-bg);
  }
  
  .menu {
    padding: 16px;
    width: 100%;
    max-width: var(--max-width);

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
    background-size: 800% 800%;
    animation: gradientAnimation 30s ease infinite;
    
    @media screen and (min-width: 1000px) {
      width: 400px;
      height: 150px;
      -webkit-mask-image: url(/assets/logo_icon-text.svg);
      mask-image: url(/assets/logo_icon-text.svg);
    }
  }

  @keyframes  gradientAnimation {
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
    // border-radius: 50px;
    cursor: pointer;
    transition: background-color .3s ease-in-out;

    &:active, &:hover {
      background-color: rgb(12 12 12 / .1);
    }
    @media screen and (min-width: 1000px) {
      display: none;
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

  .nav-container {
    display: flex;
    position:fixed;
    bottom: 0;
    left: -250px;
    background-color: crimson;
    transition: left .3s ease-in-out;
  }
  .active{
    left: 0;
  }
</style>
