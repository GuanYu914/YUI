import { useState } from "react";

import { Radio, RadioGroup } from "@/components";

function RadioDemo() {
  const [value, setValue] = useState<string>("1");

  const handleChange = (value: string | undefined) => {
    if (value) {
      setValue(value);
    }
  };

  return (
    <>
      {/* Radio Group*/}
      <RadioGroup value={value} onChange={handleChange}>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
        <Radio value="3">Option 3</Radio>
      </RadioGroup>
      <br />
      {/* Radio */}
      <Radio onChange={(v) => console.log("checked", v)}>default</Radio>
      <Radio checked>checked!</Radio>
      <Radio disabled>disabled</Radio>
      <Radio disabled checked>
        checked!
      </Radio>
    </>
  );
}

export default RadioDemo;
