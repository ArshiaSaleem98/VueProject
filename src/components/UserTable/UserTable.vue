<template>
  <div class="all-user-table">
    <div class="all-user-table__responsive">
      <table class="table">
        <!-- Table header -->
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Modified By</th>
            <th>Updated Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <!-- Table body -->
        <tbody>
          <!-- Display existing users -->
          <tr
            v-for="user in users"
            :key="user.id"
          >
            <td>{{ user.id }}</td>
            <td>
              <input
                v-if="isUserEditing && selectedUser.id === user.id"
                v-model="selectedUser.name"
                type="text"
              >
              <span v-else>{{ user.name }}</span>
            </td>
            <td>
              <input
                v-if="isUserEditing && selectedUser.id === user.id"
                v-model="selectedUser.cc"
                type="text"
              >
              <span v-else>{{ user.cc }}</span>
            </td>
            <td>{{ user['modified-by'] }}</td>
            <td>{{ user['updated-ts'] }}</td>
            <td>
              <div class="action-buttons">
                <button
                  v-if="!isUserEditing"
                  class="btn btn-primary"
                  @click="editUser(user.id)"
                >
                  Edit
                </button>
                <button
                  v-else
                  class="btn btn-success"
                  @click="saveUserChanges"
                >
                  Save
                </button>
                <button
                  class="btn btn-danger"
                  @click="deleteUser(user.id)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <!-- Add user row -->
        </tbody>
      </table>
    </div>

    <!-- Side Modal -->
    <UserModal
      v-if="showAddRow"
      title="Add User"
      @close="closeModal"
      @user-added="fetchUsers"
    />
  </div>
</template>

<script>
import GetAllUserService from '@/services/GetAllUserService';
import UserModal from '@/components/Modal/CreateUserModal.vue';
import {
  editUser,
  saveUserChanges,
  deleteUser,
  addUser,
  closeModal,
} from '@/utils/userMethods';

export default {
  components: {
    UserModal,
  },
  data() {
    return {
      users: [],
      showAddRow: false,
      newUser: {
        id: '',
        name: '',
        cc: '',
        'modified-by': '',
        'updated-ts': '',
      },
      selectedUser: null,
      isUserEditing: false,
    };
  },
  watch: {
    $route() {
      // When the route changes, fetch the updated user list
      this.fetchUsers();
    },
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      GetAllUserService.getUsers()
        .then((users) => {
          console.log('users', users);
          this.users = users;
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    },

    editUser,
    saveUserChanges,
    deleteUser,
    addUser,
    closeModal,
  },
};
</script>

<style lang="scss" scoped>
@import './user-table.scss';
</style>
