<template>
  <div class="shadow p-3 mb-5 bg-body-tertiary rounded" style="width: 80%; margin: auto;">
    <div>
      <h1>All SMS Messages</h1>
    </div>
    <!-- Display SMS messages as a table -->
    <div v-if="smsList.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>To</th>
            <th>Text</th>
            <th>Created Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sms in smsList" :key="sms.smsId" class="sms-item">
            <td>{{ sms.smsId }}</td>
            <td>{{ sms.from }}</td>
            <td>{{ sms.to }}</td>
            <td>{{ sms.text }}</td>
            <td>{{ sms.createdTimeUtc }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No SMS messages found.</p>
    </div>
  </div>
</template>

  
<script>
export default {
  data() {
    return {
      smsList: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch('http://localhost:5678/sms/list-all');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      // Convert the object into an array of SMS messages
      this.smsList = Object.keys(responseData).map((smsId) => JSON.parse(responseData[smsId]));

      console.log('Fetched SMS List:', this.smsList); // Log the fetched data
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  },
};
</script>
  
<style scoped>
.sms-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
}
</style>
  