<script>
  export let style = 'primary';
  export let type;
  export let disabled = false;
</script>

<button {type} {disabled} class={style}>
  <slot></slot>
</button>

<style>
  button {
  color: var(--lightest);
  border: 0;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  margin-left: 10px;
}

.primary {
  background-color: var(--neutral);
}

.secondary {
  background-color: gray;
}

button:disabled {
  background-color: #cccccca6;
  color: rgba(80, 80, 80, 0.329);
  cursor: auto;
}
</style>