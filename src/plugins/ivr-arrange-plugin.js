function arrange(
  editor,
  node,
  nodeMargin = { x: 150, y: 100 },
  xOffsetPerRow = 15,
  vertical
) {
  let nodeLongestParents = {};
  console.time("ivr-arrange");
  function arrangeNode(node, parentNodeId) {
    if (!parentNodeId) {
      nodeLongestParents[node.id] = [];
    } else {
      if (
        nodeLongestParents[node.id] &&
        nodeLongestParents[node.id].indexOf(parentNodeId) >= 0
      )
        return;

      nodeLongestParents[node.id] = [
        ...nodeLongestParents[parentNodeId],
        parentNodeId
      ];
    }
    if (!node.outputs) return;
    node.outputs.forEach(nodeOutput => {
      nodeOutput.connections.forEach(nodeOutConnection => {
        arrangeNode(nodeOutConnection.input.node, node.id);
      });
    });
  }

  arrangeNode(node || editor.nodes[0]);

  let xSum = 0;
  let nodeLevel = {};
  let nodeGrid = [];
  let outOfGridNodes = {};
  editor.nodes.forEach(node => {
    let nodeX = 0;
    if (nodeLongestParents[node.id]) nodeX = nodeLongestParents[node.id].length;
    else outOfGridNodes[node.id] = true;

    if (!nodeGrid[nodeX]) nodeGrid[nodeX] = [];
    nodeGrid[nodeX].push(node);
    nodeLevel[node.id] = { x: nodeX, y: nodeGrid[nodeX].length - 1 };
  });

  function getNodeAvgInputPosition(node) {
    let sum = 0;
    let count = 0;

    node.inputs.forEach(nodeInput => {
      nodeInput.connections.forEach(inputConnection => {
        let nlevel = nodeLevel[inputConnection.output.node.id];
        if (nlevel) {
          sum += nlevel.y * 10 + inputConnection.output.index;
          count++;
        }
      });
    });
    if (count) return sum / count;
    return 0;
  }

  function columnCompare(nodeA, nodeB) {
    let a = getNodeAvgInputPosition(nodeA);
    let b = getNodeAvgInputPosition(nodeB);

    if (a < b || outOfGridNodes[nodeB.id]) {
      return -1;
    }
    if (a > b || outOfGridNodes[nodeA.id]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  let maxColumnHeight = 0;
  let desiredNodePos = {};
  let columnHeights = [];
  console.time("ivr-get-dimensions");
  nodeGrid.forEach((nodeColumn, columnIndex) => {
    let ySum = 0;
    let maxWidth = 0;
    if (nodeColumn.length > 1) {
      nodeColumn.sort(columnCompare);
      nodeColumn.forEach((node, index) => {
        nodeLevel[node.id].y = index;
      });
    }
    columnHeights.push(0);
    nodeColumn.forEach((node, nodeIdx) => {
      let nodeView = editor.view.nodes.get(node);
      let bbox = nodeView.el.getBoundingClientRect();
      let nodeWidth = bbox.width;
      let nodeHeight = bbox.height;
      if (maxWidth < nodeWidth) maxWidth = nodeWidth + nodeIdx * xOffsetPerRow;
      desiredNodePos[node.id] = { x: xSum + nodeIdx * xOffsetPerRow, y: ySum };
      ySum += nodeHeight + nodeMargin.y;

      if (!outOfGridNodes[node.id]) {
        columnHeights[columnHeights.length - 1] += nodeHeight;
        if (maxColumnHeight < columnHeights[columnHeights.length - 1])
          maxColumnHeight = columnHeights[columnHeights.length - 1];
      }
    });

    xSum += maxWidth + nodeMargin.x;
  });
  console.timeEnd("ivr-get-dimensions");

  console.time("ivr-do-translate");
  nodeGrid.forEach((nodeColumn, colIdx) => {
    nodeColumn.forEach(node => {
      let nodeView = editor.view.nodes.get(node);
      let newNodePos = desiredNodePos[node.id];

      nodeView.translate(
        newNodePos.x,
        newNodePos.y + maxColumnHeight / 2 - columnHeights[colIdx] / 2
      );
    });
  });
  console.timeEnd("ivr-do-translate");
  console.timeEnd("ivr-arrange");
}

function install(
  editor,
  { margin = { x: 50, y: 50 }, xOffsetPerRow = 15, vertical = false }
) {
  editor.bind("ivr-arrange");

  editor.on("ivr-arrange", ({ node }) =>
    arrange(editor, node, margin, xOffsetPerRow, vertical)
  );
}

export default {
  name: "ivr-arrange",
  install
};
