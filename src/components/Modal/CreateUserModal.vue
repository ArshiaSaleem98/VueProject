<template>
  <div class="new-user-modal__wrapper">
    <div
      class="modal fade show"
      tabindex="-1"
      role="dialog"
      style="display: block"
      aria-modal="true"
    >
      <div class="new-user-modal__dialog new-user-modal__dialog-right">
        <div class="new-user-modal__content">
          <div class="modal-header">
            <h5
              id="modal-title"
              class="modal-title"
            >
              {{ title }}
            </h5>
            <button
              type="button"
              class="close"
              aria-label="Close"
              @click="closeModal"
            >
              <i
                class="fas fa-times"
                aria-hidden="true"
              />
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
                  aria-required="true"
                  autocomplete="off"
                >
              </div>
              <div class="form-group">
                <label for="cc">Country</label>
                <select
                  id="cc"
                  v-model="newUser.cc"
                  class="form-control"
                  required
                  aria-required="true"
                >
                  <option
                    value=""
                    disabled
                    selected
                  >
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
                <div class="btn-wrapper">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="closeModal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary add-user-button"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Rest of the code remains the same -->

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
