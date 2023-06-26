<template>
  <div class="all-user-table">
    <div class="all-user-table__responsive">
      <table class="table">
        <!-- Table header -->

        <thead>
          <tr>
            <th>USER ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Modified By</th>
            <th>Updated Timestamp</th>
            <th>Actions</th>
          </tr>
        </thead>
        <!-- Table body -->
        <tbody>
          <!-- Display existing users -->
          <tr
            v-for="user in users"
            :key="user.id"
            :data-key="user.id"
          >
            <td data-label="User Id">
              <span :data-id="`${user.id}-id`">{{ user.id }}</span>
            </td>
            <td data-label="Name">
              <input
                v-if="user.isEditing"
                v-model="user.name"
                :data-id="`${user.id}-name`"
                type="text"
              >
              <span v-else>{{ user.name }}</span>
            </td>
            <td data-label="Country">
              <select
                v-if="user.isEditing"
                v-model="user.cc"
                :data-id="`${user.id}-cc`"
              >
                <option value="SP">
                  SP
                </option>
                <option value="IT">
                  IT
                </option>
              </select>
              <span v-else>{{ user.cc }}</span>
            </td>
            <td data-label="Modified By">
              <input
                v-if="user.isEditing"
                v-model="user['modified-by']"
                type="text"
              >
              <span v-else>{{ user['modified-by'] }}</span>
            </td>
            <td data-label="Updated Timestamp">
              <input
                v-if="user.isEditing"
                v-model="user['updated-ts']"
                type="text"
              >
              <span v-else>{{ user['updated-ts'] }}</span>
            </td>
            <td data-label="Actions">
              <div class="action-buttons">
                <button
                  v-if="!user.isEditing"
                  class="btn edit-button"
                  :data-id="`${user.id}`"
                  aria-label="Edit The User"
                  @click="editSelectedUser(user)"
                >
                  <div class="icon-wrapper">
                    <i class="fas fa-edit" />
                  </div>
                </button>
                <button
                  v-else
                  class="btn save-button"
                  :data-id="`${user.id}`"
                  aria-label="Save Edited Changes"
                  @click="saveEditedUserChanges(user)"
                >
                  <div class="icon-wrapper">
                    <i class="fas fa-save" />
                  </div>
                </button>
                <button
                  class="btn delete-button"
                  :data-id="`${user.id}`"
                  aria-label="Delete The User"
                  @click="deleteUser(user.id)"
                >
                  <div class="icon-wrapper">
                    <i class="fas fa-trash" />
                  </div>
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
          // Set the initial isEditing state for each user
          this.users = users.map((user) => ({ ...user, isEditing: false }));
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    },
    editSelectedUser(user) {
      editUser.call(this, user.id);
    },
    saveEditedUserChanges(user) {
      saveUserChanges.call(this, user.id);
    },
    deleteUser,
    addUser,
    closeModal,
  },
};
</script>

<style lang="scss" scoped>
@import './user-table.scss';
</style>
