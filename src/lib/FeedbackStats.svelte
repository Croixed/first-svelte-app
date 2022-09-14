<script>
  // importing:
  export let count;
  export let average;
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Ratings Average: {parseFloat(average.toFixed(1))} </h4>
</div>


<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>