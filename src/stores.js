import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'nice',
  },
  {
    id: 2,
    rating: 9,
    text: 'good',
  },
  {
    id: 3,
    rating: 7,
    text: 'mid',
  }
]);