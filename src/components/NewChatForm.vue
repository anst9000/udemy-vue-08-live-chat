<template>
  <form class="double-border">
    <input
      type="text"
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    />

    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script setup>
  import useCollection from "@/composables/useCollection"
  import getUser from "../composables/getUser"
  import { timestamp } from "../firebase/config"
  import { ref } from "vue"

  const { user } = getUser()
  const { addDoc, error } = useCollection("messages")

  // refs
  const message = ref("")

  const handleSubmit = async () => {
    const chat = {
      name: user.value.displayName,
      message: message.value,
      createdAt: timestamp(),
    }

    await addDoc(chat)
    if (!error.value) {
      message.value = ""
    }
  }
</script>

<style scoped>
  form {
    background-color: #f95738;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 100%;
  }
  input {
    /* margin: 1rem auto; */
    outline: none;
    border: none;
    border-radius: 20px;
    width: 100%;
    display: block;
    padding: 5px 10px;
    box-sizing: border-box;
    font-family: inherit;
    outline: none;
  }
</style>
