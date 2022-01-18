<template>
  <label class="inputLabel">
    {{label}}
    <textarea
      type="number"
      :readonly="readonly"
      :value="value"
      :placeholder="placeholder"
      ref="textarea"
      @input="textAreaAdjust($event.target) || change($event)"
      @dblclick.stop
      @pointermove.stop
      @pointerdown.stop
      @pointerup="checkResize()"
      @keydown.stop
    ></textarea>
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
    "onResize",
    "defaultValue",
    "label",
    "placeholder"
  ],
  data() {
    return {
      value: this.getData(this.ikey) || this.defaultValue || ""
    };
  },
  methods: {
    change($event) {
      this.value = $event.target.value;
      this.update();
    },
    textAreaAdjust(target) {
      let oldHeight = target.style.height;
      target.style.height = "1px";
      target.style.height = target.scrollHeight + "px";
      if (oldHeight !== target.style.height) {
        this.width = this.$refs.textarea.clientWidth;
        this.height = this.$refs.textarea.clientHeight;

        if (this.height > this.width) {
          //lets keep the size of the textarea at about 2:3 ratio.
          //w*h = const = nw*nh
          //nw = w*h / nh
          //nh = w*h / nw
          //nw = 3/2 * nh
          //nw = 3/2 * w*h / nw
          //nw = sqrt(3/2 * w*h)
          this.width = Math.sqrt((this.height * this.width * 3) / 2);
          target.style.width = this.width + "px";

          target.style.height = "1px";
          target.style.height = target.scrollHeight + "px";
          this.height = this.$refs.textarea.clientHeight;
        }

        this.onResize();
      }
    },
    update() {
      if (this.ikey) this.putData(this.ikey, this.value);
      if (this.onChange) {
        this.onChange(this.value);
      }
      this.emitter.trigger("process");
    },
    checkResize() {
      if (
        this.$refs.textarea.clientWidth !== this.width ||
        this.$refs.textarea.clientHeight !== this.height
      ) {
        this.width = this.$refs.textarea.clientWidth;
        this.height = this.$refs.textarea.clientHeight;
        this.onResize();
      }
    }
  },
  mounted() {
    let initialValue = this.getData(this.ikey);
    if (typeof initialValue !== "undefined")
      this.value = this.getData(this.ikey);
    else this.putData(this.ikey, this.value);

    this.width = this.$refs.textarea.clientWidth;
    this.height = this.$refs.textarea.clientHeight;

    this.$nextTick(() => {
      this.$refs.textarea.dispatchEvent(new Event("input"));
    });
  }
};
</script>



