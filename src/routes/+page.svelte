<script lang="ts">
	import { flashCards } from './storeFlashCard';
	import FlashCard from '../components/flashCard.svelte';
	import type { IFlashCard } from './IflashCard';
	import { getRandomFlashCard, type FLASH_CARD_ERROR } from './flashCard';

	let isAnswerShowPlaceholder: boolean = false;
	const toggleShowCard = () => {
		isAnswerShowPlaceholder = !isAnswerShowPlaceholder;
	};

	let currFlashCard: IFlashCard | FLASH_CARD_ERROR = getRandomFlashCard($flashCards);
	console.log("current flash card: ", currFlashCard);
	function udpateFlashCard(value: boolean): void {
		if(currFlashCard === "flash_card_arr_empty") return;
		currFlashCard._answer_array.push(value);
		$flashCards = [...$flashCards];
		currFlashCard = getRandomFlashCard($flashCards);
	}
</script>

{#if !(currFlashCard == undefined || currFlashCard === 'flash_card_arr_empty')}
	<div class="main-container">
		<div class="flip-box">
			<div class="flip-box-inner" class:flip-it={isAnswerShowPlaceholder}>
				<FlashCard
					question={currFlashCard.question}
					answer={currFlashCard.answer}
					isAnswerShow={isAnswerShowPlaceholder}
				/>
			</div>
		</div>
		<div class="right-wrong-btn-container">
			<button on:click={() => udpateFlashCard(true)} class="right-btn"
				><i class="mi mi-circle-check"><span class="u-sr-only">Correct Option</span></i></button
			>
			<button on:click={() => udpateFlashCard(false)} class="wrong-btn"
				><i class="mi mi-circle-error"><span class="u-sr-only">Wrong Option</span></i></button
			>
		</div>
		<button on:click={toggleShowCard}> Show Answer </button>
	</div>

{/if}

<style>
	.main-container {
		display: grid;
		place-content: center;
		min-height: 80vh;
		/* gap: 10px; */
	}

	.flip-box {
		background-color: transparent;
		width: 400px;
		height: 300px;
		perspective: 1000px;
	}

	.flip-it {
		transform: rotateY(180deg);
	}

	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.4s;
		transform-style: preserve-3d;
		border: none;
	}

	button {
		background: none;
		outline: none;
		border: none;

		height: 3rem;
		border: 2px solid rgba(128, 128, 128, 0.2);
		cursor: pointer;
	}

	.right-wrong-btn-container {
		display: flex;
	}

	.right-wrong-btn-container > button {
		width: 100%;
	}

	.right-btn,
	.wrong-btn {
		font-size: 2rem;
		color: black;
		/* -webkit-text-stroke: .2px white; */
	}

	.right-btn i,
	.wrong-btn i {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.right-btn {
		background: rgba(10, 184, 126, 0.5);
		border: 2px solid rgba(10, 184, 126);
		border-right: none;
		/* border-right: 2px solid grey; */
	}
	.wrong-btn {
		background: rgba(255, 69, 27, 0.5);
		border: 2px solid rgba(255, 69, 27);
		/* border-left: none; */
	}
</style>
