import Rete from "rete";
import { dialogSocket, stringSocket } from "./Sockets";
import TextareaControl from "./TextareaControl";
import { getNewId } from "../../data/questions-vault";
import { log } from "../../lib/logService";
import { postIncommingMessage } from "../../lib/chatService";
class SwitchComponent extends Rete.Component {
  constructor(editor) {
    super("Switch");
  }

  builder(node) {
    var inp1 = new Rete.Input("dialog", "", dialogSocket, true);
    var inptPrompt = new Rete.Input("text", "", stringSocket, true);
    inptPrompt.addControl(
      new TextareaControl(this.editor, "prompt", { label: "Prompt:" })
    );
    if (!node.data.questionId) {
      node.data.questionId = getNewId();
    }

    let outputController = new TextareaControl(
      this.editor,
      "expectedResponses",
      {
        onChange: v => {
          this.setOutputCount(v, node);
        },
        label: "User Responses:"
      }
    );

    node
      .addControl(outputController)
      .addInput(inp1)
      .addInput(inptPrompt);

    node.addOutput(new Rete.Output("dialog0", "Default route", dialogSocket));
    return node;
  }

  async worker(node, inputs, outputs, nextMessage, onNode = () => {}) {
    console.log("working", node.data.questionId);
    if (typeof nextMessage === "function") {
      let skip = inputs["dialog"].length && true;
      inputs["dialog"].forEach(v => {
        if (v) skip = false;
      });
      if (skip) return;
      onNode(this.editor.nodes.find(n => n.id === node.id));

      setTimeout(() => {
        postIncommingMessage(node.data.prompt);
      }, 1000);
      //log(node.data.questionId, "Waiting for the next msg");
      try {
        let msg = await nextMessage();
        //log(node.data.questionId, "got", msg);
        let idx = node.data.expectedResponses
          .toLowerCase()
          .split(/\r?\n/)
          .findIndex(v => {
            return v.split("|").indexOf(msg.toLowerCase()) > -1;
          });

        for (let key in node.outputs) {
          outputs[key] = key === "dialog" + (idx + 1);
        }
        console.log(outputs);
        return outputs;
      } catch {
        log(node.data.questionId, "Rejected or timed out");
      } finally {
      }
    }
    for (let key in node.outputs) {
      outputs[key] = null;
    }
    return;
  }

  setOutputCount(v, node) {
    let optionsDefinition = [
      "Default route",
      ...v.split(/\r?\n/).filter(val => !!val)
    ];
    let num = optionsDefinition.length;

    if (isNaN(num)) return;

    for (let i = 0; i < num; i++) {
      if (!node.outputs.get("dialog" + i)) {
        let o = new Rete.Output(
          "dialog" + i,
          optionsDefinition[i],
          dialogSocket,
          false
        );
        o.index = i;
        node.addOutput(o);
      }

      node.outputs.get("dialog" + i).name = optionsDefinition[i];
    }
    node.outputs.forEach((output, idx, asd, dsa) => {
      if (output.index >= num) {
        output.connections.forEach(conn => {
          this.editor.removeConnection(conn);
        });
        node.removeOutput(output);
      }
    });

    node.update();
  }
}

export default SwitchComponent;
