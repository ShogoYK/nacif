<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
  async mounted() {
    const res = await axios.get('http://127.0.0.1:8000/contacts/all')
    const contacts = res.data.contacts;
    this.contacts = contacts
  },
  methods: {
    async deleteContact(id) {
      await axios.delete('http://127.0.0.1:8000/contacts/delete', {
        data: {
          id: id
        }
      })

      this.$router.go(0)
    }
  },
  data() {
    return {
      contacts: []
    }
  }
}
</script>

<template>
  <div class="contacts-list-container">
    <table class="contacts-table">
      <tr>
        <th>Contact</th>
        <th>Number</th>
        <th>Actions</th>
      </tr>
      <tr class="contacts-list" v-for="contact in contacts" :key="contact.name">
        <td>{{ contact.name }}</td>
        <td>{{ contact.number }}</td>
        <td class="actions">
          <RouterLink :to="{ path: '/edit/' + contact.id }">Edit</RouterLink>
          <button @click="deleteContact(contact.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.table,
th,
td {
  border: solid 1px black;
}

th {
  width: 15rem;
}

td {
  text-align: center
}

.actions {
  display: flex;
  justify-content: space-around;
}
</style>