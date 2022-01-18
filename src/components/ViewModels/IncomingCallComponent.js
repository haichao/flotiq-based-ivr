import Rete from "rete";
import TextareaControl from "./TextareaControl";
import { dialogSocket } from "./Sockets";
import { getNewId } from "../../data/questions-vault";
class IncomingCallComponent extends Rete.Component {
  constructor() {
    super("Incoming Call");
  }

  builder(node) {
    var out1 = new Rete.Output("dialog", "", dialogSocket);
    if (!node.data.questionId) {
      node.data.questionId = getNewId();
    }
    this.messageCtrl = new TextareaControl(this.editor, "prompt", {
      label: "Welcoming prompt"
    });
    return node.addControl(this.messageCtrl).addOutput(out1);
  }

  worker(node, inputs, outputs) {
    console.log(this.messageCtrl);
    outputs["dialog"] = node.data.dialog;
  }
}

export default IncomingCallComponent;
