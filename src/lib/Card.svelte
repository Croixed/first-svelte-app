<div class="card">
  <slot></slot>
</div>

<style>
  .card {
    background-color: var(--darker);
    color: white;
    border-radius: 12px;
    padding: 40px 50px;
    margin: 20px 0;
    position: relative;
    /* position rel so we can position number inside of it absolutely */

    
  }
</style>