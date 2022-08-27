import React, { memo, useState, useEffect, useRef } from "react";
import styles from "./index.less";

function initData() {
  let ID = 1;
  const data = {
    ID,
    parentID: 0,
    name: "xxx",
    child: [],
  };

  for (let i = 0; i < 2; i++) {
    ID += 1;
    const child1 = {
      ID,
      parentID: data.ID,
      name: "xxx" + i,
      child: [],
    };

    for (let j = 0; j < 2; j++) {
      ID += 1;
      const child2 = {
        ID,
        parentID: child1.ID,
        name: "xxx" + i + j,
        child: [],
      };
      child1.child.push(child2);
    }

    data.child.push(child1);
  }
  return data;
}

const NODE_WIDTH = 200;
const NODE_HEIGHT = 40;
const NODE_MARGIN = 20;

const MindMap = memo(() => {
  const [dataProvider, setDataProvider] = useState({});
  const [svgData, setSvgData] = useState({ lineNodes: [], w: 0, h: 0 });
  const linesRef = useRef([]);

  useEffect(() => {
    setDataProvider(initData());
  }, []);

  useEffect(() => {
    renderLines(dataProvider);
    console.log(document.getElementById("nodeContainer"));
  }, [dataProvider]);

  const getLinePointer = (fromNode, toNode) => {
    // 起点
    const start = [
      fromNode.offsetLeft + NODE_WIDTH,
      fromNode.offsetTop + NODE_HEIGHT / 2,
    ];
    const p1 = [
      fromNode.offsetLeft + NODE_WIDTH + NODE_MARGIN / 2,
      fromNode.offsetTop + NODE_HEIGHT / 2,
    ];
    const p2 = [
      fromNode.offsetLeft + NODE_WIDTH + NODE_MARGIN / 2,
      toNode.offsetTop + NODE_HEIGHT / 2,
    ];
    const end = [toNode.offsetLeft, toNode.offsetTop + NODE_HEIGHT / 2];
    return `${start.join(",")} ${p1.join(",")} ${p2.join(",")} ${end.join(
      ","
    )}`;
  };
  const renderLines = () => {
    const lineNodes = [];
    for (const [from, to] of linesRef.current) {
      const fromNode = document.getElementById(`node-${from}`);
      const toNode = document.getElementById(`node-${to}`);
      const pointers = getLinePointer(fromNode, toNode);
      if (fromNode && toNode) {
        lineNodes.push(
          <polyline
            style={{ fill: "none", stroke: "black", strokeWidth: 3 }}
            points={`${pointers}`}
          ></polyline>
        );
      }
    }
    const w = document.getElementById("treeComp").offsetWidth;
    const h = document.getElementById("treeComp").offsetHeight;
    setSvgData({ lineNodes, w, h });
  };

  const addChildNode = (parentTreeItem) => {
    parentTreeItem.child.push({
      ID: (Math.random() * 10000).toFixed(2),
      parentID: parentTreeItem.ID,
      name: "xxx",
      child: [],
    });

    setDataProvider({ ...dataProvider });
  };
  const recursionTreeItem = (treeItem, lines, id) => {
    let subTreeNode = null;
    if (treeItem.child && treeItem.child.length > 0) {
      let childNodes = [];
      for (const item of treeItem.child) {
        lines.push([treeItem.ID, item.ID]); // 保存线条关系：key: from ,value : to
        childNodes.push(recursionTreeItem(item, lines));
      }

      subTreeNode = <span class={styles.subTree}>{childNodes}</span>;
    }

    return (
      <div class={styles.parentTree} id={id}>
        <span className={styles.node} id={`node-${treeItem.ID}`}>
          {treeItem.ID}
          <button
            onClick={() => {
              addChildNode(treeItem);
            }}
          >
            ADD
          </button>
        </span>
        {subTreeNode}
      </div>
    );
  };

  const renderTree = () => {
    const lines = [];
    const treeNodes = recursionTreeItem(dataProvider, lines, "treeComp");
    linesRef.current = lines;
    return <div class="parentTree">{treeNodes}</div>;
  };

  const { lineNodes, w, h } = svgData;
  return (
    <div>
      <div className={styles.tree} id="tree">
        <div id="nodeContainer">{renderTree()}</div>
        <svg
          pointer-events="none"
          className={styles.lineSvg}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          style={{ width: w, height: h }}
        >
          {lineNodes}
        </svg>
      </div>
    </div>
  );
});

export default MindMap;
