<script>
  import { FeedbackStore } from '../stores'
  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
</script>

{#each $FeedbackStore as fb (fb.id)}
<div in:scale={{duration: 1000}} out:fade>
  <FeedbackItem item={fb} />
</div>
{/each}