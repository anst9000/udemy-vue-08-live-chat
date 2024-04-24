<template>
  <nav v-if="user" class="double-border">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script setup>
  import getUser from "@/composables/getUser"
  import useLogout from "../composables/useLogout"

  const { error, logout } = useLogout()
  const { user } = getUser()
  console.log("--> user", user)

  const handleClick = async () => {
    await logout()

    if (!error.value) {
      console.log("user logged out")
    }
  }
</script>

<style scoped>
  nav {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>
