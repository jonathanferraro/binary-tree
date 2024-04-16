import React, { useState } from "react";
import { Visualizer } from "../Visualizer/Visualizer";
import { formatUserStringArrayToArray, formatArrayToTreeMap } from "../../utils/utils";

export function MainUI() {
  let [userArray, setUserArray] = useState('');
  let placeholder = formatArrayToTreeMap([1,2,3,4,null,5,6]);
  let [arrayToSubmit, setArrayToSubmit] = useState(placeholder);
  let [userArrayInvalid, setUserArrayInvalid] = useState(false);
  let [errorMessage, setErrorMessage] = useState('');
  let [curUserArray, setCurUserArray] = useState([1,2,3,4,null,5,6]);
  let [curInsertElement, setCurInsertElement] = useState('');

  let changeUserArray = (e) => {
    setUserArray(e.target.value);
  };

  let changeInsertElement = (e) => {
    setCurInsertElement(e.target.value);
  };



  let submitUserArray = () => {
    let {array, message, error} = formatUserStringArrayToArray(userArray);
    
    // check if user input is valid array
    if (error) {
      setUserArrayInvalid(true);
      setErrorMessage(message);
    } else {
      setUserArrayInvalid(false);
      setErrorMessage('');
      setCurUserArray(array);
      let treeMap = formatArrayToTreeMap(array);
      setArrayToSubmit(treeMap);
    }
  }

  let insertElement = () => {
    if (curInsertElement === '') {
      return;
    }

    if (!isNaN(curInsertElement)) {
      setUserArrayInvalid(false);
      setErrorMessage('');
      curUserArray.push(curInsertElement);
      let treeMap = formatArrayToTreeMap(curUserArray);
      setArrayToSubmit(treeMap);
      setCurInsertElement('')


    } else {
      setUserArrayInvalid(true);
      setErrorMessage('Please enter a valid number');
    }
  }

  let removeElement = () => {
    curUserArray.pop();
    let treeMap = formatArrayToTreeMap(curUserArray);
    setArrayToSubmit(treeMap);
  }



  return (
    <div>
      {userArrayInvalid && <div className="border border-red-500 w-80">{errorMessage}</div>  }
      <div className="flex">

        <textarea rows="3" cols="50"
          className="border border-black "
          type="text"
          placeholder=" [1,2,3,4,null,5,6]"
          onChange={changeUserArray}
          value={userArray}
        />

        <div>
          <button className="border border-black" onClick={submitUserArray}>
            <p>Convert to Binary Tree </p>
          </button>
        </div>

        <div>
          <input type="text" className="border border-black" 
            onChange={changeInsertElement}
            value={curInsertElement}
            />

          <button className="border border-black"

          onClick={insertElement}>
           <p> Insert </p>
          </button>
        </div>

        <div>
          <button className="border border-black" onClick={removeElement}>
            <p> Remove Last Element </p>
          </button>
        </div>

      </div>
      <Visualizer data={arrayToSubmit} />
    </div>
  );
}
