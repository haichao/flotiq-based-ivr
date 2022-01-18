import Rete from "rete";
import VTextControl from "./VTextControl.vue";

class TextControl extends Rete.Control {
  constructor(emitter, key, opts = {}) {
    super(key);
    let { readonly, onChange = () => {} } = opts;
    this.component = VTextControl;
    this.props = { emitter, ikey: key, readonly, onChange };
  }
  setValue(val) {
    this.vueContext.value = val;
  }
}

export default TextControl;
