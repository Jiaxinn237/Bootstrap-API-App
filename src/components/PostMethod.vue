<template>
  <div class="shadow p-3 mb-5 bg-body-tertiary rounded" style="max-width: fit-content; margin: auto;">
  <div class="form-container">
    <h1>SMS Form</h1>
    <form @submit.prevent="submitForm" class="form-label">
      <label for="from">From:</label>
      <input type="text" v-model="from" class="form-input" required />

      <label for="to">To:</label>
      <input type="text" v-model="to" class="form-input" required />

      <label for="text">Text:</label>
      <textarea v-model="text" class="form-input" required></textarea>

      <button type="submit" class="form-button">Send SMS</button>
    </form>
  </div>
</div>
</template>
  
<script>
export default {
  data() {
    return {
      from: '',
      to: '',
      text: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:5678/sms/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: this.from,
            to: this.to,
            text: this.text,
          }),
        });

        const data = await response.json();
        console.log(data);

        // Check if the SMS was successfully added
        if (data.isSuccess) {
          alert('SMS successfully added!');
          
          // Clear the form fields
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
  max-width: 400px; /* Adjust the maximum width as needed */
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
  