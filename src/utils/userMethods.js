import EditUserService from '@/services/EditUserService';
import DeleteUserService from '@/services/DeleteAUserService';
import AddNewUserService from '@/services/AddNewUserService';

export function editUser(userId) {
  console.log('Edit User:', userId);
  this.selectedUser = this.users.find((user) => user.id === userId);
  this.isUserEditing = true;
}

export function saveUserChanges() {
  const { id, name, cc, 'modified-by': modifiedBy } = this.selectedUser;

  const requestBody = {
    name,
    cc,
    'modified-by': modifiedBy,
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
  this.users.push(this.newUser);

  this.closeModal();

  this.newUser = {
    id: '',
    name: '',
    cc: '',
    'modified-by': '',
    'updated-ts': '',
  };

  AddNewUserService.addUser(this.newUser)
    .then((response) => {
      console.log('User added successfully:', response);
    })
    .catch((error) => {
      console.error('Error adding user:', error);
    });
}

export function closeModal() {
  this.showAddRow = false;
}
