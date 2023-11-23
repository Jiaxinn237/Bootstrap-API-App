<template>
  <div class="form-container">
    <div class="shadow p-3 mb-5 bg-body-tertiary rounded" style="margin: auto;">
      <h1>Edit SMS</h1>
      <form @submit.prevent="submitForm" class="form-label">
        <label for="smsId">SMS ID:</label>
        <input type="text" v-model="smsId" class="form-input" required />

        <label for="from">From:</label>
        <input type="text" v-model="from" class="form-input" required />

        <label for="to">To:</label>
        <input type="text" v-model="to" class="form-input" required />

        <label for="text">Text:</label>
        <textarea v-model="text" class="form-input" required></textarea>

        <button type="submit" class="form-button">Edit SMS</button>
      </form>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      smsId: '',
      from: '',
      to: '',
      text: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:5678/sms/edit', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            smsId: this.smsId,
            from: this.from,
            to: this.to,
            text: this.text,
          }),
        });

        const data = await response.json();
        console.log(data);
        if (data.isSuccess) {
          alert('SMS successfully edited!');

          // Clear the form fields
          this.smsId = '';
          this.from = '';
          this.to = '';
          this.text = '';
        } else {
          alert('Failed to add SMS. Please try again.'); // Show an error message if needed
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.'); // Show an error message
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

.form-container {
  max-width: 400px;
  /* Adjust the maximum width as needed */
  margin: 0 auto;
}

.form-label {
  display: block;
  margin-bottom: 5px;
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
  