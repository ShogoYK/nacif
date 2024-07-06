<script>
import axios from 'axios';

export default {
  methods: {
    async addContact() {
      const res = await axios.post('http://localhost:8000/contacts/add',
        {
          name: this.name.toString(),
          number: this.number.toString()
        },
        {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        })
        this.$emit('updated', true)
        this.name = ''
        this.number = ''
    },
  },
  data() {
    return {
      name: '',
      number: ''
    }
  }
}
</script>

<template>
  <div class="add-contacts-container">
    <div class="form-head">
      <h2>Add Contact</h2>
    </div>
    <form @submit.prevent="addContact" class="add-contact-form">
      <input type="text" v-model="name" placeholder="Contact name">
      <input type="number" v-model="number" placeholder="Contact number">
      <button type="submit">Add Contact</button>
    </form>
  </div>
</template>


<style scoped>
.add-contacts-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1rem;
}

.add-contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>