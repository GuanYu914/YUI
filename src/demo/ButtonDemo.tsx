import React from "react";

import { Button } from "@/components";
import react from "@/assets/react.svg";

function ButtonDemo() {
  return (
    <div>
      <div>
        <Button
          text="default"
          type="default"
          onClick={() => console.log("onClick")}
        />
        <Button
          text="default"
          type="default"
          icon={<img src={react} width={10} height={10} alt="react-icon" />}
          onClick={() => console.log("onClick")}
        />
        <Button
          text="default"
          type="default"
          loading
          onClick={() => console.log("b")}
        />
        <Button
          text="default"
          type="default"
          disabled
          onClick={() => console.log("c")}
        />
        <Button
          text="default"
          type="default"
          disabled
          loading
          onClick={() => console.log("onClick")}
        />
        <Button
          text="default"
          type="default"
          icon={<img src={react} width={10} height={10} alt="react-icon" />}
          disabled
          loading
          onClick={() => console.log("onClick")}
        />
      </div>
      <div>
        <Button text="primary" type="primary" />
        <Button
          text="primary"
          type="primary"
          icon={<img src={react} width={10} height={10} alt="react-icon" />}
        />
        <Button text="primary" type="primary" loading />
        <Button text="primary" type="primary" disabled />
        <Button text="primary" type="primary" disabled loading />
        <Button
          text="primary"
          type="primary"
          icon={<img src={react} width={10} height={10} alt="react-icon" />}
          disabled
          loading
        />
      </div>
      <div>
        <Button text="text" type="text" />
        <Button
          text="text"
          type="text"
          icon={<img src={react} width={10} height={10} alt="react-icon" />}
        />
        <Button text="text" type="text" loading />
        <Button text="text" type="text" disabled />
        <Button text="text" type="text" disabled loading />
        <Button
          text="text"
          type="text"
          icon={<img src={react} width={10} height={10} alt="react-icon" />}
          disabled
          loading
        />
      </div>
      <div>
        <Button text="link" type="link" />
        <Button
          text="link"
          type="link"
          icon={<img src={react} width={10} height={10} alt="react-icon" />}
        />
        <Button text="link" type="link" loading />
        <Button text="link" type="link" disabled />
        <Button text="link" type="link" disabled loading />
        <Button
          text="link"
          type="link"
          icon={<img src={react} width={10} height={10} alt="react-icon" />}
          disabled
          loading
        />
      </div>
    </div>
  );
}

export default ButtonDemo;
