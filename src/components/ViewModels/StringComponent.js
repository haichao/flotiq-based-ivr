import Rete from "rete";
import TextControl from "./TextControl";
import { stringSocket } from "./Sockets";
class StringComponent extends Rete.Component {
  constructor() {
    super("String");
  }

  builder(node) {
    var out1 = new Rete.Output("str", "String", stringSocket);

    return node.addControl(new TextControl(this.editor, "str")).addOutput(out1);
  }

  worker(node, inputs, outputs) {
    outputs["str"] = node.data.str;
  }
}

export default StringComponent;
