import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import flower_icon from "@/assets/flower-svgrepo-com.svg";
import bear_icon from "@/assets/bear-carnivore-svgrepo-com.svg";
import puppy_icon from "@/assets/carnivore-cartoon-3-svgrepo-com.svg";
import pizza_icon from "@/assets/pizza-slice-svgrepo-com.svg";

import Switch from ".";

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

const meta: Meta<typeof Switch> = {
  component: Switch,
  argTypes: {
    checkedChildren: {
      options: Object.keys(supportIcons),
      mapping: supportIcons,
      control: {
        type: "select",
      },
    },
    unCheckedChildren: {
      options: Object.keys(supportIcons),
      mapping: supportIcons,
      control: {
        type: "text",
      },
    },
  },
};

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  name: "default",
  args: {
    className: "",
    checked: false,
    disabled: false,
    checkedChildren: null,
    unCheckedChildren: null,
    onClick: fn(),
  },
};

export const Checked: Story = {
  name: "checked",
  args: {
    className: "",
    checked: true,
    disabled: false,
    checkedChildren: null,
    unCheckedChildren: null,
    onClick: fn(),
  },
};

export const Disabled: Story = {
  name: "disabled",
  args: {
    className: "",
    checked: false,
    disabled: true,
    checkedChildren: null,
    unCheckedChildren: null,
    onClick: fn(),
  },
};

export const Label: Story = {
  name: "label",
  args: {
    className: "",
    checked: false,
    disabled: false,
    checkedChildren: supportIcons["bear icon"],
    unCheckedChildren: "文字提示...",
    onClick: fn(),
  },
};

export default meta;
