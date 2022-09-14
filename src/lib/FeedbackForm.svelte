<script>
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";

  let text = '';
  let btnDisabled = true;
  let min = 10;
  let message;
  
  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be at least ${min} characters`
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  }

</script>

<Card>
  <header>
    <h2>how would you rate us?</h2>
  </header>
  <form>
  <!-- rating sel -->
    <div class="input-group">
      <input type="text" on:input={handleInput} bind:value={text} placeholder="Give us feedback">
      <Button disabled={btnDisabled} type="button">Send</Button>
    </div>
    {#if message} 
    <div class="message">
      {message}
    </div>
    {/if}
  </form>

</Card>

<style>
  header {
    min-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
    background-color: var(--darker);
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