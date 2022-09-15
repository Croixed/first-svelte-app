<script>
  import FeedbackList from './lib/FeedbackList.svelte'
  import FeedbackStats from './lib/FeedbackStats.svelte'
  import FeedbackForm from './lib/FeedbackForm.svelte'

  let feedback = [
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
  ]

  $: count = feedback.length
  $: average = feedback.reduce((a, {rating}) =>a + rating, 0) / count;

  const addFeedback = (e) => {
    const newFeedback = e.detail;
    feedback = [newFeedback, ...feedback]
  }
 
  const deleteFeedback = (e) => {
    const itemId = e.detail;
    console.log(e);
    // set feedback to a filtered feedback, where filter returns only items that don't match the ID of the custom event
    feedback = feedback.filter((item) => item.id != itemId);
  }
</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback} />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style>

</style>
