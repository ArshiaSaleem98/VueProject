<template>
  <div class="new-user-modal__wrapper">
    <div
      class="modal fade show"
      tabindex="-1"
      role="dialog"
      style="display: block"
    >
      <div class="new-user-modal__dialog new-user-modal__dialog-right">
        <div class="new-user-modal__content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ title }}
            </h5>
            <button
              type="button"
              class="close"
              @click="closeModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addUser">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  id="name"
                  v-model="newUser.name"
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  required
                >
              </div>
              <div class="form-group">
                <label for="cc">Country</label>
                <select
                  id="cc"
                  v-model="newUser.cc"
                  class="form-control"
                  required
                >
                  <option value="">
                    Select Country
                  </option>
                  <option value="SP">
                    SP
                  </option>
                  <option value="IT">
                    IT
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="modifiedBy">Modified By</label>
                <input
                  id="modifiedBy"
                  v-model="newUser.modifiedBy"
                  type="text"
                  class="form-control"
                  placeholder="Modified By"
                >
              </div>
              <div class="form-group">
                <label for="updatedTs">Updated Timestamp</label>
                <input
                  id="updatedTs"
                  v-model="newUser.updatedTs"
                  type="text"
                  class="form-control"
                  placeholder="Updated Timestamp"
                >
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="closeModal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddNewUserService from '@/services/AddNewUserService';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  emits: ['user-added', 'close'],
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
    async addUser() {
      try {
        this.newUser.id = Date.now().toString();

        // Validate mandatory fields
        if (!this.newUser.name || !this.newUser.cc) {
          alert('Please fill in all mandatory fields.');
          return;
        }
        await AddNewUserService.addUser(this.newUser);
        this.$emit('user-added');
      } catch (error) {
        console.error('Error adding user:', error);
      }
    },
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './create-user-modal.scss';
</style>
