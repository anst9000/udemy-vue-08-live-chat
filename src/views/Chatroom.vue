<template>
  <div class="app-container">
    <div class="container">
      <Navbar />
    </div>
    <div class="container">
      <ChatWindow />
    </div>
    <div class="container">
      <NewChatForm />
    </div>
  </div>
</template>

<script setup>
  import Navbar from "@/components/Navbar.vue"
  import getUser from "@/composables/getUser"
  import { watch } from "vue"
  import { useRouter } from "vue-router"
  import NewChatForm from "@/components/NewChatForm.vue"
  import ChatWindow from "@/components/ChatWindow.vue"

  let { user } = getUser()
  const router = useRouter()

  watch(user, () => {
    if (!user.value) {
      router.push({ name: "welcome" })
    }
  })
</script>

<style scoped>
  .chat-container {
  }
</style>
