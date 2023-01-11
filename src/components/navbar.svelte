<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" />
</svelte:head>

<nav>
	<a href="/"><i class="mi mi-home"><span class="u-sr-only">Home</span></i></a>
	<a href="/createQuestion"><i class="mi mi-add"><span class="u-sr-only">Add</span></i></a>
	<a href="/edit"><i class="mi mi-edit-alt"><span class="u-sr-only">Edit</span></i></a>
</nav>

<style>
	nav {
		padding: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.3);
    gap: 2rem;
	}

	nav a {
    font-size: 1.5rem;
		text-decoration: none;
		color: white;
	}
</style>
