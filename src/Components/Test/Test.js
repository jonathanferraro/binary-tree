import React from "react";
import Tree from "react-d3-tree";

import { arrayToFormat } from "../../utils/utils";

export function BinaryTreeVisualizer() {
  // Define your binary tree data
  let data = arrayToFormat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

  const treeData = {
    name: "1",
    children: [
      {
        name: "2",
        children: [{ name: "4" }, { name: "5" }],
      },
      {
        name: "3",
        children: [{ name: "6" }, { name: "7" }],
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "5000px" }}>
      <Tree data={data} orientation={"vertical"} />
    </div>
  );
}
