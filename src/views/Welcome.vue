<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>
        No account yet?
        <span @click="showLogin = !showLogin">Signup</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enterChat" />
      <p>
        Already registered?
        <span @click="showLogin = !showLogin">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script setup>
  import LoginForm from "@/components/LoginForm.vue"
  import SignupForm from "@/components/SignupForm.vue"
  import { ref } from "vue"
  import { useRouter } from "vue-router"

  const router = useRouter()
  const showLogin = ref(true)

  function enterChat() {
    router.push({ name: "chatroom" })
  }
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
    border: 2px solid black;
    outline: 2px solid black;
    outline-offset: 2px;
  }
  /* form styles */
  .welcome form {
    width: 80%;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    font-family: "Poppins", sans-serif;
    width: 90%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid black;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>
