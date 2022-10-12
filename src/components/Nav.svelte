<script lang="ts">
    export let classes:string;
</script>

<nav class={classes}>
    <ul>
        <li><a href='/'>Blog</a></li>
        <li><a href='/'>Gallery</a></li>
        <li><a href='/'>Catecism</a></li>
    </ul>
</nav>
<style lang='scss'>
    nav{
        display: none;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: var(--color-text);
        padding: 8px 16px;
    }

    .active{
        display: flex;
    }
</style>