<template>
  <div class="card">
    <div class="card-body">
      <p test-dat-id="hello-title">Poll-Form Component</p>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Poll Question:</label
          >
          <input
            type="text"
            class="form-control"
            placeholder="Enter your question"
            aria-label="Question input"
            id="question-input"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PollForm",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
