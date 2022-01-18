<template>
  <div class="side-bar">
    <div class="side-bar__actions">
      <button
        class="save-button"
        :disabled="saveDisabled"
        @click="$emit('saveChanges')"
      >Save Changes</button>
    </div>
    <div class="side-bar__console">
      <div class="console-log">
        <div class="console-log__entry" v-for="(item, index) in consoleLog" :key="index">
          <div
            class="console-log__entry-word"
            v-for="(itemEntry, itemEntryIndex) in item"
            :key="itemEntryIndex"
          >{{itemEntry}}</div>
        </div>
      </div>
    </div>
    <div class="side-bar__chat">
      <div class="chat-log">
        <div
          class="chat-log__entry"
          :class="'chat-log__entry--' + item.type"
          v-for="(item, index) in chatLog"
          :key="index"
        >{{item.message}}</div>
      </div>
      <textarea
        placeholder="Write your message here and press Enter"
        type="text"
        class="chat-input"
        v-model="chatInput"
        @keydown.stop="onKeyDown($event, chatInput)"
        @keyup.stop
      ></textarea>
    </div>
  </div>
</template>
  
<script>
import { postMessage, chatEvents } from "../lib/chatService";
import { consoleEvents } from "../lib/logService";
export default {
  props: ["onSaveChanges", "saveDisabled"],
  data: () => {
    return {
      consoleLog: [],
      chatLog: [
        {
          message: "Type 'Start' below to begin new conversation.",
          type: "system"
        }
      ],
      chatInput: ""
    };
  },
  methods: {
    async onKeyDown($event, value) {
      if ($event.key === "Enter") {
        $event.preventDefault();
        this.chatInput = "";
        postMessage(value.trim());
      }
    }
  },
  mounted() {
    consoleEvents.on("log", (...args) => {
      console.log(...args);
      this.consoleLog.push(
        args.map(elem =>
          typeof elem === "string" ? elem : JSON.stringify(elem, undefined, 2)
        )
      );
    });
    chatEvents.on("message", message => {
      this.chatLog.push({ message, type: "outgoing" });
    });
    chatEvents.on("incomming-message", message => {
      this.chatLog.push({ message, type: "incomming" });
    });
  }
};
</script>

<style lang="scss">
@import "./SideBar.scss";
</style>
