interface IFlashCard {
	question: string;
	answer: string;
	_id: number;
	_answer_array: boolean[]; // 1 for right answer and 0 for wrong answer
}

export type { IFlashCard };
