<script lang="ts">
	import { flashCards } from '../storeFlashCard';
	import TextField from '../../components/textField.svelte';
	import type { IFlashCard } from '../IflashCard';
	import { page } from '$app/stores';

	let questionPlaceholder: string = '';
	let answerPlaceholder: string = '';

	let questionIdx = getQuestionIdFromURLParams();
	if (questionIdx !== null) {
		questionPlaceholder = $flashCards[questionIdx].question;
		answerPlaceholder = $flashCards[questionIdx].answer;
	}

	function addQuestion(idx: number | null, question: string, answer: string): void {
		const newQuestion: IFlashCard = {
			question: question,
			answer: answer,
			_answer_array: [],
			_id: Date.now()
		};
		if (idx == null) $flashCards.push(newQuestion); //insert new value 
		else { // update existing values 
			let oldFlashCard = $flashCards[idx];
			$flashCards[idx] = { ...oldFlashCard, ...{ question, answer } };
		}

		$flashCards = [...$flashCards]; // update the flashcards (or) think of updating UI
		questionPlaceholder = '';
		answerPlaceholder = '';
	}

	function getQuestionIdFromURLParams(): null | number {
		const qId = $page.url.searchParams.get('questionIndex');
		try {
			if (qId == null) return null;
			const num = parseInt(qId);
			if (num === undefined) return null;
			if (num >= $flashCards.length) return null;
			return num;
		} catch (e) {
			return null;
		}
	}
</script>

<TextField bind:questionPlaceholder bind:answerPlaceholder />
<button on:click={() => addQuestion(questionIdx, questionPlaceholder, answerPlaceholder)}
	>{questionIdx == null ? 'Add Question' : 'Update Question'}</button
>
