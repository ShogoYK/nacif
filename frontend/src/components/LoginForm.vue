<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      const res = await axios.post('http://127.0.0.1:8000/auth/login', {
        email: this.email,
        password: this.password
      })

      localStorage.setItem('token', res.data.token)
      this.$router.push('/');
    },

  }
}
</script>

<template>
  <div class="login-container">
    <div class="form-head">
      <h2>Login</h2>
    </div>
    <form @submit.prevent="login" class="login-form">
      <input type="text" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>