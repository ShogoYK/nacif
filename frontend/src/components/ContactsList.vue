<script>
import axios from 'axios';

export default {
  async mounted() {
    const res = await axios.get('http://127.0.0.1:8000/contacts/all',
      {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      }
    )
    const contacts = res.data.contacts;
    this.contacts = contacts
    console.log(this.contacts);
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
      </tr>
      <tr class="contacts-list" v-for="contact in contacts" :key="contact.name">
        <td>{{ contact.name }}</td>
        <td>{{ contact.number }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.table, th, td {
  border: solid 1px black;
}

th {
  width: 15rem;
}
td {
  text-align: center
}
</style>