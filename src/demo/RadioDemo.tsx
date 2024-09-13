import React from "react";

import { Radio } from "@/components";

function RadioDemo() {
  return (
    <>
      <Radio onChange={(c) => console.log("checked", c)}>default</Radio>
      <Radio checked>checked!</Radio>
      <Radio disabled>disabled</Radio>
      <Radio disabled checked>
        checked!
      </Radio>
    </>
  );
}

export default RadioDemo;
