import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import flower_icon from "@/assets/flower-svgrepo-com.svg";
import bear_icon from "@/assets/bear-carnivore-svgrepo-com.svg";
import puppy_icon from "@/assets/carnivore-cartoon-3-svgrepo-com.svg";
import pizza_icon from "@/assets/pizza-slice-svgrepo-com.svg";

import Radio, { RadioGroup } from ".";

const supportIcons = {
  "flower icon": (
    <img src={flower_icon} width={20} height={20} alt="flower-icon" />
  ),
  "bear icon": <img src={bear_icon} width={20} height={20} alt="bear-icon" />,
  "puppy icon": (
    <img src={puppy_icon} width={20} height={20} alt="puppy-icon" />
  ),
  "pizza icon": (
    <img src={pizza_icon} width={20} height={20} alt="pizza-icon" />
  ),
};

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
};

type Story = StoryObj<typeof RadioGroup>;

export const SingleChoice: Story = {
  name: "single choice",
  args: {
    value: "1",
    onChange: fn(),
    children: [
      <Radio value="1">選項1{supportIcons["flower icon"]}</Radio>,
      <Radio value="2">選項2{supportIcons["puppy icon"]}</Radio>,
      <Radio value="3">選項3{supportIcons["bear icon"]}</Radio>,
    ],
  },
};

export default meta;
