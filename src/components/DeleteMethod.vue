<template>
  <div class="deletemethod" style="margin-top: 87px; text-align: center;">
    <div class="form-container" style="max-width: 400px; margin: auto;">
      <div class="shadow p-3 mb-5 bg-body-tertiary rounded" style="margin: auto;">
        <h1>Delete SMS</h1>

        <!-- Show SMS ID input field initially -->
        <form v-if="!deleting" @submit.prevent="checkSMS" class="form-label" style="display: block; margin-bottom: 5px;">
          <label for="smsId">SMS ID:</label>
          <input type="text" v-model="smsId" class="form-input" required />
          <button type="submit" class="btn btn-primary" style="background-color: red; border: none; font-family: 'Lato';">Check SMS</button>
        </form>

        <!-- Show existing data and delete options if SMS exists -->
        <div v-if="smsData && deleting" class="found-sms">
          <h2>SMS Details</h2>
          <p><strong>ID:</strong> {{ smsData.smsId }}</p>
          <p><strong>From:</strong> {{ smsData.from }}</p>
          <p><strong>To:</strong> {{ smsData.to }}</p>
          <p><strong>Text:</strong> {{ smsData.text }}</p>
          <button @click="deleteSMS" class="btn btn-danger" style="background-color: red; border: none; font-family: 'Lato';">Delete SMS</button>
        </div>

        <!-- Display success message after deletion -->
        <div v-if="deleteSuccess">
          <h2>Result</h2>
          <p>{{ deleteSuccess }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      smsId: '',
      smsData: null,
      deleting: false,
      deleteSuccess: '',
    };
  },
  methods: {
    async checkSMS() {
      try {
        const response = await fetch(`http://localhost:5678/sms/get?id=${this.smsId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        this.smsData = await response.json();
        this.deleting = true; // Show delete options if SMS exists
      } catch (error) {
        console.error('Error during fetch:', error);
        this.deleting = false; // Hide delete options if there's an error
      }
    },
    async deleteSMS() {
      try {
        const response = await fetch(`http://localhost:5678/sms/delete?id=${this.smsId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        this.deleteSuccess = 'SMS successfully deleted!';
        this.deleting = false; // Return to initial state after successful deletion
        this.smsId = '';
      } catch (error) {
        console.error('Error during fetch:', error);
        this.deleteSuccess = 'Failed to delete SMS. Please try again.'; // Display error message on deletion failure
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.form-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.form-button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
  