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
          <tr v-for="user in users" :key="user.id" :data-key="user.id">
            <td>{{ user.id }}</td>
            <td>
              <input
                v-if="user.isEditing"
                v-model="user.name"
                :data-id="`${user.id}-name`"
                type="text"
              />
              <span v-else>{{ user.name }}</span>
            </td>
            <td>
              <select
                v-if="user.isEditing"
                v-model="user.cc"
                :data-id="`${user.id}-cc`"
              >
                <option value="SP">SP</option>
                <option value="IT">IT</option>
              </select>
              <span v-else>{{ user.cc }}</span>
            </td>
            <td>
              <input
                v-if="user.isEditing"
                v-model="user['modified-by']"
                type="text"
              />
              <span v-else>{{ user['modified-by'] }}</span>
            </td>
            <td>
              <input
                v-if="user.isEditing"
                v-model="user['updated-ts']"
                type="text"
              />
              <span v-else>{{ user['updated-ts'] }}</span>
            </td>
            <td>
              <div class="action-buttons">
                <button
                  v-if="!user.isEditing"
                  class="btn btn-primary"
                  :data-id="`${user.id}`"
                  @click="editSelectedUser(user)"
                >
                  Edit
                </button>
                <button
                  v-else
                  class="btn btn-success"
                  :data-id="`${user.id}`"
                  @click="saveEditedUserChanges(user)"
                >
                  Save
                </button>
                <button
                  class="btn btn-danger"
                  :data-id="`${user.id}`"
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
