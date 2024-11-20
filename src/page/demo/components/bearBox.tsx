import React from "react";
import {useBearStore} from "@/store/bearStore.ts";

export const BearBox: React.FC = () => {

  const bears = useBearStore((state) => state.bears);
  const color = useBearStore((state) => state.color);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);

  return (
    <div className="box" style={{ backgroundColor: color }}>
      <h1>Bear Box</h1>
      <p>bears: {bears}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={() => increasePopulation(2)}>add bear</button>
        <button onClick={removeAllBears}>remove all bears</button>
        {/*<button onClick={useBearStore.persist.clearStorage}>*/}
        {/*  clear storage*/}
        {/*</button>*/}
      </div>
    </div>
  );
};

export default BearBox;