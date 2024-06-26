import React from "react";
import Tree from "react-d3-tree";

import { formatArrayToTreeMap } from "../../utils/utils";

export function Visualizer(props) {
  let { data } = props;

// debug test data
  const treeData = {
    name: "1",
    children: [
      {
        name: "2",
        children: [{ name: "4" }, { name: "5" }],
      },
      {
        name: "3",
        children: [{ name: "6" }, { name: "null" }],
      },
    ],
  };

  



  const straightPathFunc = (linkDatum) => {
    const { source, target } = linkDatum;
    return `M${source.x},${source.y}L${target.x},${target.y}`;
  };

  return (
    <div
      style={{ height: "900px", width: "100%" }}
      className="border border-black   bg-white"
    >
      <Tree data={data} orientation={"vertical"} depthFactor={0} 
      pathFunc={straightPathFunc} collapsible={false} 
      enableLegacyTransitions={true}
      translate={{ x: 700, y: 100 }}
      
      className='justify-center'/>
    </div>
  );
}
