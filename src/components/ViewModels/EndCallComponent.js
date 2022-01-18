import Rete from "rete";
import TextareaControl from "./TextareaControl";
import { dialogSocket } from "./Sockets";
import { getNewId } from "../../data/questions-vault";
import { postIncommingMessage } from "../../lib/chatService";
class EndCallComponent extends Rete.Component {
  constructor() {
    super("End Call");
  }

  builder(node) {
    var in1 = new Rete.Input("dialog", "", dialogSocket, true);
    if (!node.data.questionId) {
      node.data.questionId = getNewId();
    }
    this.messageCtrl = new TextareaControl(this.editor, "prompt", {
      label: "Goodbye message:"
    });
    return node.addControl(this.messageCtrl).addInput(in1);
  }

  async worker(node, inputs, outputs, nextMessage, onNode = () => {}) {
    if (typeof nextMessage === "function") {
      let skip = true;
      inputs["dialog"].forEach(v => {
        if (v) skip = false;
      });
      if (skip) return;

      onNode(this.editor.nodes.find(n => n.id === node.id));

      setTimeout(() => {
        postIncommingMessage(node.data.prompt);
      }, 1000);
    }
  }
}

export default EndCallComponent;
