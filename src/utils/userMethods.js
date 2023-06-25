import EditUserService from '@/services/EditUserService';
import DeleteUserService from '@/services/DeleteAUserService';
import axios from 'axios';

export function editUser(userId) {
  console.log('Edit User:', userId);
  this.selectedUser = this.users.find((user) => user.id === userId);
  this.selectedUser.isEditing = true;
}

export function saveUserChanges() {
  const {
    id,
    name,
    cc,
    'modified-by': modifiedBy,
    'updated-ts': updatedTs,
  } = this.selectedUser;
  this.selectedUser.isEditing = false;
  delete this.selectedUser.isEditing;

  const requestBody = {
    id,
    name,
    cc,
    'modified-by': modifiedBy,
    'updated-ts': updatedTs,
  };

  EditUserService.editUser(id, requestBody)
    .then((response) => {
      // Update the user in the users array with the updated data
      const updatedUserIndex = this.users.findIndex((user) => user.id === id);
      if (updatedUserIndex !== -1) {
        this.users[updatedUserIndex] = response.data;
      }

      console.log('User updated successfully:', response.data);

      this.selectedUser = null;
      this.isUserEditing = false;
    })
    .catch((error) => {
      console.error('Error updating user:', error);
    });
}

export function deleteUser(userId) {
  console.log('Delete User:', userId);
  const userIndex = this.users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    console.error('User not found in the table');
    return;
  }

  DeleteUserService.deleteUser(userId)
    .then(() => {
      this.users.splice(userIndex, 1); // Remove the user from the table
      console.log('User deleted successfully');
    })
    .catch((error) => {
      console.error('Error deleting user:', error);
    });
}

export function addUser() {
  if (typeof Cypress !== 'undefined' && Cypress.env('USE_FIXTURE')) {
    // Use fixture data for Cypress tests
    cy.fixture('mock-user-data').then((users) => {
      users.push(this.newUser);
    });
  } else {
    // Send POST request to the real API
    // Update the following code with your actual API endpoint and request configuration
    axios
      .post('/api/users', this.newUser)
      .then((response) => {
        // Handle the response as needed
        console.log('User added:', response.data);
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  }
}

export function closeModal() {
  this.showAddRow = false;
}
