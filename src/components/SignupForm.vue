<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />

    <div v-if="error" class="error">{{ error }}</div>

    <button>Sign up</button>
  </form>
</template>

<script setup>
  import { ref } from "vue"
  import useSignup from "@/composables/useSignup"

  const { error, signup } = useSignup()

  const displayName = ref("")
  const email = ref("")
  const password = ref("")

  const emit = defineEmits(["signup"])

  const handleSubmit = async () => {
    await signup(email.value, password.value, displayName.value)
    if (!error.value) {
      emit("signup")
    }
  }
</script>

<style scoped></style>
