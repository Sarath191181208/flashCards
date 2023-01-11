import type { IFlashCard } from "./IflashCard";
import { writable } from "svelte/store";
import { browser } from '$app/environment'; 

const _keyFlashCardArray = 'flashCardArray';

export const flashCards = writable<IFlashCard[]>([]); 

if (browser) { // checking if we are rendering on server i.e with vite 
    flashCards.set(JSON.parse(localStorage.getItem(_keyFlashCardArray) || '[]'));
    flashCards.subscribe((val) => localStorage.setItem(_keyFlashCardArray, JSON.stringify(val)));
}