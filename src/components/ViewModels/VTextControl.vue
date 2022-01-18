<template>
  <input
    type="text"
    :readonly="readonly"
    :value="value"
    @input="change($event)"
    @dblclick.stop
    @pointermove.stop
    @pointerdown.stop
    @keydown.stop
  >
</template>

<script>
export default {
  props: ["readonly", "emitter", "ikey", "getData", "putData", "onChange"],
  data() {
    return {
      value: ""
    };
  },
  methods: {
    change($event) {
      this.value = $event.target.value;
      this.update();
    },
    update() {
      if (this.ikey) this.putData(this.ikey, this.value);
      if (this.onChange) {
        this.onChange(this.value);
      }
      this.emitter.trigger("process");
    }
  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
};
</script>

<style>
.inputLabel {
  color: inhertit;
}
</style>

