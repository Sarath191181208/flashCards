<script lang="ts">
	export let questionPlaceholder: string;
	export let answerPlaceholder: string;
</script>

<div class="input-container">
	<div class="input-box">
		<textarea
			name="question-input"
			placeholder="Question"
			class="question-area"
			bind:value={questionPlaceholder}
		/>
	</div>
	<div class="input-box">
		<textarea
			name="answer-input"
			class="answer-area"
			placeholder="Enter the answer"
			bind:value={answerPlaceholder}
		/>
	</div>
</div>

<style>
	textarea {
		width: 100%;
		box-sizing: border-box;
		border: none;
		font-size: 16px;
		resize: none;
        padding-left: .2rem;
	}

	.question-area {
        font-size: 2rem;
		height: 3rem;
        border-bottom: 2px solid #ccc;
	}

	.answer-area {
		height: 12rem;
	}
</style>
