import Rete from "rete";
import VNumberControl from "./VNumberControl.vue";

class NumberControl extends Rete.Control {
  constructor(emitter, key, opts = {}) {
    super(key);
    let { readonly, onChange = () => {}, min, max, defaultValue, label } = opts;

    this.component = VNumberControl;
    this.props = {
      emitter,
      ikey: key,
      readonly,
      onChange,
      min,
      max,
      defaultValue,
      label
    };
  }
  setValue(val) {
    this.vueContext.value = val;
  }
}

export default NumberControl;
