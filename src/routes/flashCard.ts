import type { IFlashCard } from './IflashCard';

export { getIndexOfQuestion, getRandomFlashCard };
export type { FLASH_CARD_ERROR };

type FLASH_CARD_ERROR = 'flash_card_arr_empty';

function getIndexOfQuestion(flashCardArray: IFlashCard[], question: string): number {
	flashCardArray.forEach((ele, idx) => {
		if (ele.question === question) {
			return idx;
		}
	});
	return -1;
}

function getRandomFlashCard(flashcards: IFlashCard[]): IFlashCard | FLASH_CARD_ERROR {
	if (flashcards.length === 0) return 'flash_card_arr_empty';
	const scoreArr = [0, 1, 2, 3, 4];
	const probabilityDistribution = [50, 25, 10, 5, 1];
	const distribution = flashcards.map((card) => {
		const score = getScore(card);
		const scoreIdx = getScoreIdx(score, scoreArr);
		return probabilityDistribution[scoreIdx];
	});
	let randEle: IFlashCard = getRandomItem(flashcards, distribution);
	return randEle;
}

function getScoreIdx(score: number, scoreArr: number[]): number {
	for (let i = 0; i < scoreArr.length; i++) if (scoreArr[i] >= score) return i;
	return scoreArr.length - 1;
}

function getScore(card: IFlashCard): number {
	return card._answer_array.reduce((acc, curr) => {
		if (curr == false) acc -= 1;
		else acc += 1;
		return acc;
	}, 0);
}

function createDistribution(weights: number[], size: number): number[] {
	const distribution = [];
	const sum = weights.reduce((a, b) => a + b);
	const quant = size / sum;
	for (let i = 0; i < weights.length; ++i) {
		const limit = quant * weights[i];
		for (let j = 0; j < limit; ++j) {
			distribution.push(i);
		}
	}

	return distribution;
}

function randomIndex(distribution: number[]): number {
	const index = Math.floor(distribution.length * Math.random()); // random index
	return distribution[index];
}

function getRandomItem<T>(array: T[], weights: number[]): T {
	if (array.length !== weights.length) throw new Error('Array and weights must be the same length');
	if (array.length === 0) throw new Error('Array must not be empty');

	const distribution = createDistribution(weights, array.length*array.length);
	const index = randomIndex(distribution);
	return array[index];
}
