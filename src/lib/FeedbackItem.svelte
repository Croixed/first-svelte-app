<script>
  import { FeedbackStore } from "../stores";
  import Card from "./Card.svelte";
  export let item

  const handleDelete = (itemId) => {
    FeedbackStore.update((currentFb) => {
      return currentFb.filter(item => item.id != itemId)
    })
  };
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text-display">{item.text}</p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background-color: var(--lighter);
    border: 1px solid var(--darker);
    border-radius: 50%;

    color: black;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background-color: rgb(206, 78, 99);
    border: none;
    border-radius: 4px;
  }

  .text-display {
    margin: 0;
  }
</style>