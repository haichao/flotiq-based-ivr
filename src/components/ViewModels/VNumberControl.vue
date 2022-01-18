<template>
  <label class="inputLabel">
    {{label}}
    <input
      type="number"
      :readonly="readonly"
      :min="min"
      :max="max"
      :value="value"
      @input="change($event)"
      @dblclick.stop
      @pointermove.stop
      @pointerdown.stop
      @keydown.stop
    >
  </label>
</template>

<script>
export default {
  props: [
    "readonly",
    "emitter",
    "ikey",
    "getData",
    "putData",
    "onChange",
    "min",
    "max",
    "defaultValue",
    "label"
  ],
  data() {
    return {
      value: this.defaultValue || 0
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
    let initialValue = this.getData(this.ikey);
    if (typeof initialValue !== "undefined")
      this.value = this.getData(this.ikey);
    else this.putData(this.ikey, this.value);
  }
};
</script>

<style scoped>
.inputLabel {
  color: white;
}
input {
  display: block;
}
</style>


