<template>
  <div class="chat-window double-border">
    <div v-if="error">{{ error }}</div>
    <div v-if="formattedDocuments" ref="messages" class="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message" :class="{ own: doc.name === username }">{{
          doc.message
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onUpdated } from "vue"
  import { formatDistanceToNow, format } from "date-fns"
  import { projectAuth } from "@/firebase/config"
  import getCollection from "../composables/getCollection"

  const { error, documents } = getCollection("messages")
  let username = projectAuth.currentUser.displayName

  // format timestamp
  const formattedDocuments = computed(() => {
    if (documents.value) {
      return documents.value.map((doc) => {
        let time = format(doc.createdAt.toDate(), "dd MMM yyyy H:mm")
        return { ...doc, createdAt: time }
      })
    }
  })

  // AUTO SCROLL TO BOTTOM OF MESSAGES
  const messages = ref(null)

  onUpdated(() => {
    messages.value.scrollTop = messages.value.scrollHeight
  })
</script>

<style scoped>
  .chat-window {
  }
  .single {
    margin: 0 0 4px 0;
    border-radius: 20px;
    padding: 3px 10px;
    /* background: lightblue; */
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 2px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
</style>
