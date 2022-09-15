<script>
  import { createEventDispatcher } from 'svelte';
  let selected = 10;

  const dispatch = createEventDispatcher()

  const onChange = (e) => {
    selected = e.currentTarget.value;
    dispatch('rating-select', selected)
  }
</script>

<!-- this HTML is terrible there has to be a way to do this with #for -->

<ul class="rating">
  <li>
    <input type="radio" id="num1" name="rating" value="1" on:change={onChange} checked={selected===1} />
    <label for="num1"><p>1</p></label>
  </li>
  <li>
    <input type="radio" id="num2" name="rating" value="2" on:change={onChange} checked={selected===2} />
    <label for="num2"><p>2</p></label>
  </li>
  <li>
    <input type="radio" id="num3" name="rating" value="3" on:change={onChange} checked={selected===3} />
    <label for="num3"><p>3</p></label>
  </li>
  <li>
    <input type="radio" id="num4" name="rating" value="4" on:change={onChange} checked={selected===4} />
    <label for="num4"><p>4</p></label>
  </li>
  <li>
    <input type="radio" id="num5" name="rating" value="5" on:change={onChange} checked={selected===5} />
    <label for="num5"><p>5</p></label>
  </li>
  <li>
    <input type="radio" id="num6" name="rating" value="6" on:change={onChange} checked={selected===6} />
    <label for="num6"><p>6</p></label>
  </li>
  <li>
    <input type="radio" id="num7" name="rating" value="7" on:change={onChange} checked={selected===7} />
    <label for="num7"><p>7</p></label>
  </li>
  <li>
    <input type="radio" id="num8" name="rating" value="8" on:change={onChange} checked={selected===8} />
    <label for="num8"><p>8</p></label>
  </li>
  <li>
    <input type="radio" id="num9" name="rating" value="9" on:change={onChange} checked={selected===9} />
    <label for="num9"><p>9</p></label>
  </li>
  <li>
    <input type="radio" id="num10" name="rating" value="10" on:change={onChange} checked={selected===10} />
    <label for="num10"><p>10</p></label>
  </li>
</ul>


<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    flex-wrap: wrap;
    gap: 4px;
  }

  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 8%;
    min-width: 40px;
    aspect-ratio: 1;
    border: 1px #eee solid;
    transition: 0.3s;

    border-radius: 8px;

    color: black;
  }

  /* I need to fix this later */
  .rating li label {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;

    cursor: pointer;

    border-radius: 8px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rating li:hover {
    background: var(--lighter);
    color: #fff;
  }

  /* Make actual radio select invisible */
  [type='radio'] {
    opacity: 0;
  }

  /* Use the sibling select */
  [type='radio']:checked ~ label {
    background: var(--lighter);
    color: black;
  }
</style>