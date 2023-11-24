<template>
  <div class="putmethod" style="margin-top: 87px; text-align: center;">
    <div class="form-container" style="max-width: 40%; margin: auto;">
      <div class="shadow p-3 mb-5 bg-body-tertiary rounded" style="margin: auto;">
        <h1 style="margin-bottom: 5%;">Edit SMS</h1>

        <!-- Show SMS ID input field -->
        <form v-if="!editing" @submit.prevent="submitForm" class="form-label" style="display: block; margin-bottom: 5px;">
          <div class="mb-3 row">
            <label for="smsId" class="col-sm-2 col-form-label" style="display: block; margin-bottom: 5px;">SMS ID:</label>
            <div class="col sm-10">
              <input type="text" v-model="smsId" class="form-control" id="smsId" required />
            </div>
          </div>
          <button type="submit" class="btn btn-primary"
            style="background-color: red; border: none; font-family: 'Lato';">Check SMS</button>
        </form>

        <!-- Display form only if smsData exists (after user checks SMS) -->
        <form v-if="smsData && editing" @submit.prevent="submitForm" class="form-label"
          style="display: block; margin-bottom: 5px;">
          <div class="mb-3 row">
            <label for="smsId" class="col-sm-2 col-form-label" style="display: block; margin-bottom: 5px;">SMS ID:</label>
            <div class="col sm-10">
              <input type="text" v-model="smsId" class="form-control" id="smsId" required readonly/>
            </div>
          </div>

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

          <button type="submit" class="btn btn-primary"
            style="background-color: red; border: none; font-family: 'Lato';">Edit SMS</button>
        </form>
      </div>
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
      smsData: null, // To store the fetched SMS data
      editing: false, // Flag to indicate whether in edit mode
    };
  },
  methods: {
    async submitForm() {
      try {
        if (this.editing) {
          // If in edit mode, submit the edited data
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
            this.$toastr.success('SMS edited successfully');
            this.resetForm();
          } else {
            alert('Failed to edit SMS. Please try again.');
          }
        } else {
          // If not in edit mode, fetch SMS data
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
          this.setFormData();
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    },
    setFormData() {
      // Set form data based on fetched SMS data
      this.from = this.smsData.from;
      this.to = this.smsData.to;
      this.text = this.smsData.text;
      this.editing = true; // Set to edit mode
    },
    resetForm() {
      // Reset form data and return to initial state
      this.smsId = '';
      this.from = '';
      this.to = '';
      this.text = '';
      this.smsData = null;
      this.editing = false; // Reset editing mode
    },
  },
};

</script>
  
<style scoped>

</style>
  