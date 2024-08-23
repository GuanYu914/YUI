import React from "react";

import { Switch } from "@/components";

function SwitchDemo() {
  return (
    <>
      <Switch className=" block" disabled />
      <Switch className=" block" checked />
      <Switch className=" block" disabled unCheckedChildren="abc" />
      <Switch className=" block" checkedChildren="cda" />
      <Switch className=" block" checked unCheckedChildren="abc" />
      <Switch className=" block" checkedChildren="cda" />
      <Switch
        className=" block"
        checked
        checkedChildren="checked"
        unCheckedChildren="unchecked"
      />
      <Switch
        className=" block"
        checkedChildren="checked"
        unCheckedChildren="unchecked"
        disabled
      />
    </>
  );
}

export default SwitchDemo;
