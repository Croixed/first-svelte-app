<script>
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import RatingSelect from "./RatingSelect.svelte"
  import { v4 as uuidv4 } from 'uuid'
  import { FeedbackStore } from "../stores";

  let text = '';
  let rating = 10;
  let btnDisabled = true;
  let min = 10;
  let message;

  const handleSelect = e => rating = e.detail;
  
  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be at least ${min} characters`
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  }

  const handleSubmit = () => {
    if (text.trim().length >= min) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating: +rating // plus sign makes rating number(?)
      }

      FeedbackStore.update((currentFb) => {
        return [newFeedback, ...currentFb]
      })

      text = '';
    }
  }

</script>

<Card class="card">
  <header>
    <h2>how would you rate us?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
  <RatingSelect on:rating-select={handleSelect}/>
    <div class="input-group">
      <input type="text" on:input={handleInput} bind:value={text} placeholder="Give us feedback">
    </div>
    <Button disabled={btnDisabled} type="submit">Send</Button>
    {#if message} 
    <div class="message">
      {message}
    </div>
    {/if}
  </form>

</Card>

<style>
  

  header {
    margin: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    margin-top: 0;
  }

  .input-group {
    display: flex;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;

    width: 100%;

    align-items: center;
    flex-direction: column;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
    background-color: var(--darker);
    width: 100%;
    height: 2em;
    color: white;
  }

  .message {
    padding-top: 10px;
    text-align: center;
  }

  ::placeholder {
    color: rgb(170, 170, 170);
  }

</style>