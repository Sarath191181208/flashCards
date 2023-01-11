<script>
    import './style.css'
    import Navbar from "../components/navbar.svelte";
</script>

<Navbar/>

<main>
    <slot/>
</main>

<style>
    main{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>