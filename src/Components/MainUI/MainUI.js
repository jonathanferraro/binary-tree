import React, { useState } from "react";
import { Visualizer } from "../Visualizer/Visualizer";
import { formatUserStringArrayToArray, formatArrayToTreeMap } from "../../utils/utils";

export function MainUI() {
  let [userArray, setUserArray] = useState('');
  let placeholder = formatArrayToTreeMap([1,2,3,4,null,5,6]);
  let [arrayToSubmit, setArrayToSubmit] = useState(placeholder);
  let [userArrayInvalid, setUserArrayInvalid] = useState(false)

  let changeUserArray = (e) => {
    setUserArray(e.target.value);
  };



  let submitUserArray = () => {
    let array = formatUserStringArrayToArray(userArray);
    
    // check if user input is valid array
    if (array === false) {
      setUserArrayInvalid(true);
    } else {
      setUserArrayInvalid(false);
      let treeMap = formatArrayToTreeMap(array);
      setArrayToSubmit(treeMap);
    }


  }





  return (
    <div>
      {userArrayInvalid && <div>Invalid array.</div>  }

      <textarea rows="3" cols="50"
        className="border border-black my-5"
        type="text"
        placeholder=" [1,2,3,4,null,5,6]"
        onChange={changeUserArray}
        value={userArray}
      />

      <div>
        <button className="border border-black" onClick={submitUserArray}>
          Convert to Binary Tree
        </button>
      </div>
      <Visualizer data={arrayToSubmit} />
    </div>
  );
}
