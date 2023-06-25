<template>
  <div class="home-page-wrapper">
    <div class="home-page-header">
      <h1>All Users</h1>
    </div>
    <div class="add-new-user-section">
      <button
        class="btn btn-primary add-new-user-button"
        role="button"
        aria-label="Add User"
        @click="addNewUser"
      >
        Add User
      </button>
    </div>
    <div class="all-user-table-container">
      <UserTable
        ref="userTable"
        :users="users"
      />
    </div>
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
