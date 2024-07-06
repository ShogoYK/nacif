<script>
import axios from 'axios'

export default {
  methods: {
    async editContact () {
      const res = await axios.put('http://127.0.0.1:8000/contacts/edit', {
        id: +this.id,
        name: this.name ? this.name.toString() : undefined,
        number: this.number ? this.number.toString() : undefined
      })
      this.$router.push('/');
    }
  },
  async mounted() {
    const res = await axios.get(`http://127.0.0.1:8000/contacts/${this.id}`)

    const data = res.data;
    this.name = data.name;
    this.number = data.number;
  },
  data() {
    return {
      id: this.$route.params.id,
      name: null,
      number: null
    }
  }
}
</script>

<template>
  <div class="edit-contacts-container">
    <div class="form-head">
      <h2>Edit contact</h2>
    </div>
    <form @submit.prevent="editContact" class="edit-contact-form">
      <input type="text" v-model="name" placeholder="Contact name">
      <input type="number" v-model="number" placeholder="Contact number">
      <button type="submit">Edit Contact</button>
    </form>
  </div>
</template>

<style>
.edit-contacts-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1rem;
}

.edit-contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>