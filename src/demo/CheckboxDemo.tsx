import React, { useState } from "react";

import { Checkbox, CheckboxGroup } from "@/components";

function CheckboxDemo() {
  const [values, setValues] = useState<string[]>([]);

  const handleChange = (value: string[] | undefined) => {
    if (value) {
      setValues(value);
    }
  };

  return (
    <>
      {/* Checkbox Group*/}
      <CheckboxGroup values={values} onChange={handleChange}>
        <Checkbox value="1">Option 1</Checkbox>
        <Checkbox value="2">Option 2</Checkbox>
        <Checkbox value="3">Option 3</Checkbox>
      </CheckboxGroup>
      <br />
      {/* Checkbox */}
      <Checkbox onChange={(v) => console.log("checked", v)}>default</Checkbox>
      <Checkbox checked>checked!</Checkbox>
      <Checkbox disabled>disabled</Checkbox>
      <Checkbox disabled checked>
        checked!
      </Checkbox>
    </>
  );
}

export default CheckboxDemo;
