<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search..."
      class="form-control"
    >
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
};
</script>

<style lang="scss" scoped>
.search-bar {
  display: inline-block;
  width: 200px;

  input {
    width: 100%;
  }
}
</style>
