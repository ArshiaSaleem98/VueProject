<template>
  <div class="home-page">
    <div class="header">
      <h1>Users</h1>
      <div class="user-actions">
        <button
          class="btn btn-primary add-user-button"
          @click="addNewUser"
        >
          Add User
        </button>
        <SearchBar />
      </div>
    </div>
    <UserTable
      ref="userTable"
      :users="users"
    />
  </div>
</template>

<script>
import UserTable from '@/components/UserTable/UserTable.vue';

export default {
  name: 'HomePage',
  components: {
    UserTable,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addNewUser() {
      this.$refs.userTable.showAddRow = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './home-page.scss';
</style>
