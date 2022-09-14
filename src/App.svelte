<script>
  import FeedbackList from './lib/FeedbackList.svelte'

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
 
</script>

<main>
  <FeedbackList {feedback}/>


</main>

<style>

</style>
