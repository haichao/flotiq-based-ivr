import Rete from "rete";
import VTextareaControl from "./VTextareaControl.vue";

class TextareaControl extends Rete.Control {
  constructor(emitter, key, opts = {}) {
    super(key);
    let { readonly, onChange = () => {}, label, placeholder } = opts;
    this.component = VTextareaControl;
    this.editor = emitter;
    this.props = {
      emitter,
      ikey: key,
      readonly,
      onChange,
      label,
      placeholder,
      onResize: () => this.onResize()
    };
  }
  setValue(val) {
    this.vueContext.value = val;
  }

  onResize() {
    if (this.parent instanceof Rete.Node) {
      this.vueContext.$nextTick(() =>
        this.editor.view.updateConnections({ node: this.parent })
      );
    }
  }
}

export default TextareaControl;
