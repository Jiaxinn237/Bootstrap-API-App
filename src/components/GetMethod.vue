<template>
  <div>
    <div class="shadow p-3 mb-5 bg-body-tertiary rounded" style="max-width: fit-content; margin: auto;">
      <h1>Get SMS</h1>
      <form @submit.prevent="submitForm" class="form-container">
        <label for="smsId">SMS ID:</label>
        <input type="text" v-model="smsId" class="form-input" required />
        <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Get
          SMS</button>
      </form>
    </div>

    <div v-if="sms" class="found-sms">
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">SMS Found</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h2>SMS Details</h2>
              <p><strong>ID:</strong> {{ sms.smsId }}</p>
              <p><strong>From:</strong> {{ sms.from }}</p>
              <p><strong>To:</strong> {{ sms.to }}</p>
              <p><strong>Text:</strong> {{ sms.text }}</p>
              <p><strong>Created Time:</strong> {{ sms.createdTimeUtc }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">SMS Not Found</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="red"
                class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                <path
                  d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                <path
                  d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
              </svg>
              <h2>SMS Not found</h2>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
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
      sms: null,
    };
  },
  methods: {
    async submitForm() {
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

        this.sms = await response.json();
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

.form-container {
  max-width: 400px;
  /* Adjust the maximum width as needed */
  margin: 0 auto;
}

.form-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.btn btn-secondary {
  background-color: #007BFF;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
  