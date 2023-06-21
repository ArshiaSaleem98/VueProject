<template>
  <div class="add-user-form">
    <input
      v-model="newUser.id"
      placeholder="ID"
    >
    <input
      v-model="newUser.name"
      placeholder="Name"
    >
    <input
      v-model="newUser.cc"
      placeholder="Country"
    >
    <input
      v-model="newUser.modifiedBy"
      placeholder="Modified By"
    >
    <input
      v-model="newUser.updatedTs"
      placeholder="Updated Timestamp"
    >
    <button
      class="btn btn-success"
      @click="addUser"
    >
      Add
    </button>
  </div>
</template>

<script>
import AddNewUserService from '@/services/AddNewUserService';

export default {
  data() {
    return {
      newUser: {
        id: '',
        name: '',
        cc: '',
        modifiedBy: '',
        updatedTs: '',
      },
    };
  },
  methods: {
    addUser() {
      if (this.newUser.id && this.newUser.name && this.newUser.cc) {
        console.log('HOLAUSER', this.newUser);
        AddNewUserService.addUser(this.newUser)
          .then((response) => {
            console.log('HOLA', response);
            this.resetForm();
          })
          .catch((error) => {
            console.error('Error adding user:', error);
          });
      } else {
        console.error('Error: All fields are required.');
      }
    },
    resetForm() {
      this.newUser = {
        id: '',
        name: '',
        cc: '',
        modifiedBy: '',
        updatedTs: '',
      };
    },
  },
};
</script>

<style scoped>
/* Styles for the AddUserForm component */
@import './add-user-form.scss';
</style>
