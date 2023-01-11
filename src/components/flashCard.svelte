<script lang="ts">
	export let question: string;
	export let answer: string;
	export let isAnswerShow: boolean;
</script>

<div class="flip-box-front">
	{question}
</div>

<div class="flip-box-back" class:conceal-answer={isAnswerShow}>
	<h2>{answer}</h2>
</div>


<style>
	.flip-box-front, .flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	
	.flip-box-front {
		background-color: #ddd;
		color: black;
		display: flex;
		justify-content: center;
        align-items: center;
		font-size: 1.3rem;
		font-weight: bold;
	}

	
	.flip-box-back {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: .8rem;
		transform: rotateY(180deg);
		background-color: #ddd;
		color: grey;	
	}
</style>
