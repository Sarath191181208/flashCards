<script lang="ts">
	import { flashCards } from '../storeFlashCard';
</script>

{#each $flashCards as flashCard, idx}
	<div>
		{flashCard.question}
		{flashCard.answer}
        <a href={`/createQuestion?questionIndex=${idx}`}> Edit </a>
        <hr>
	</div>
{/each}
