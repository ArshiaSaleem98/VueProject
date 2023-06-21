<template>
  <div class="user-table">
    <div class="table-responsive">
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
            <td>{{ user.name }}</td>
            <td>{{ user.cc }}</td>
            <td>{{ user['modified-by'] }}</td>
            <td>{{ user['updated-ts'] }}</td>
            <td>
              <div class="action-buttons">
                <button
                  class="btn btn-primary"
                  @click="editUser(user.id)"
                >
                  Edit
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
      @userAdded="fetchUsers"
    />
  </div>
</template>

<script>
import AddNewUserService from '@/services/AddNewUserService';
import GetAllUserService from '@/services/GetAllUserService';
import UserModal from '@/components/Modal/CreateUserModal.vue';

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
    editUser(userId) {
      console.log('Edit User:', userId);
    },
    deleteUser(userId) {
      console.log('Delete User:', userId);
    },
    addUser() {
      // Add the new user to the users array
      this.users.push(this.newUser);

      // Close the modal
      this.closeModal();

      // Reset the newUser object
      this.newUser = {
        id: '',
        name: '',
        cc: '',
        modifiedBy: '',
        updatedTs: '',
      };

      // Call the service to add the user
      AddNewUserService.addUser(this.newUser)
        .then((response) => {
          console.log('User added successfully:', response);
        })
        .catch((error) => {
          console.error('Error adding user:', error);
        });
    },
    closeModal() {
      this.showAddRow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './user-table.scss';
</style>
