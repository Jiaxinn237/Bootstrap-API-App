<template>
  <div class="postmethod">
    <div class="shadow p-3 mb-5 bg-body-tertiary rounded" style="max-width: 40%; margin: auto;">
      <div class="form-container">
        <h1>SMS Form</h1>
        <form @submit.prevent="submitForm">
          <div class="mb-3 row">
            <label for="from" class="col-sm-2 col-form-label" style="display: block; margin-bottom: 5px;">From:</label>
            <div class="col sm-10">
            <input type="text" v-model="from" class="form-control" id="from" required />
          </div>
          </div>

          <div class="mb-3 row">
            <label for="to" class="col-sm-2 col-form-label" style="display: block; margin-bottom: 5px;">To:</label>
            <div class="col sm-10">
            <input type="text" v-model="to" class="form-control" id="to" required />
          </div>
          </div>

          <div class="mb-3 row">
            <label for="text" class="col-sm-2 col-form-label" style="display: block; margin-bottom: 5px;">Text:</label>
            <div class="col sm-10">
            <textarea v-model="text" class="form-control" id="text" required></textarea>
          </div>
          </div>

          <button type="submit" class="btn btn-primary" style="background-color: red;">Send SMS</button>
        </form>
      </div>
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

.postmethod {
  margin-top: 87px;
  text-align: center;
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
  