<template>
  <div class="deletemethod">
    <div class="shadow p-3 mb-5 bg-body-tertiary rounded" style="max-width: fit-content; margin: auto;">
      <div class="card-body">
        <h1>Delete SMS</h1>
        <form @submit.prevent="submitForm" class="form-container">
          <label for="smsId" class="form-label">SMS ID:</label>
          <input type="text" v-model="smsId" class="form-input" required />
          <button type="submit" class="form-button">Delete SMS</button>
        </form>
      </div>
    </div>

    <div v-if="deleteResponse">
      <h2>Result</h2>
      <p>{{ deleteResponse.message }}</p>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      smsId: '',
      deleteResponse: null,
    };
  },
  methods: {
    async submitForm() {
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

        this.deleteResponse = await response.json();
      } catch (error) {
        console.error('Error during fetch:', error);
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

.deletemethod {
  margin-top:87px;
  text-align: center;
}

.form-container {
  max-width: 400px;
  margin: 0 auto;
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
  