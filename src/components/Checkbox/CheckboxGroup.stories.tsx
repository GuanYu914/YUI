import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import flower_icon from "@/assets/flower-svgrepo-com.svg";
import bear_icon from "@/assets/bear-carnivore-svgrepo-com.svg";
import puppy_icon from "@/assets/carnivore-cartoon-3-svgrepo-com.svg";
import pizza_icon from "@/assets/pizza-slice-svgrepo-com.svg";

import Checkbox, { CheckboxGroup } from ".";

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

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
};

type Story = StoryObj<typeof CheckboxGroup>;

export const MultipleChoice: Story = {
  name: "multiple choice",
  args: {
    onChange: fn(),
    children: [
      <Checkbox value="1">選項1{supportIcons["flower icon"]}</Checkbox>,
      <Checkbox value="2">選項2{supportIcons["puppy icon"]}</Checkbox>,
      <Checkbox value="3">選項3{supportIcons["bear icon"]}</Checkbox>,
    ],
  },
};

export default meta;
