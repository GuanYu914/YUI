import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import flower_icon from "@/assets/flower-svgrepo-com.svg";
import bear_icon from "@/assets/bear-carnivore-svgrepo-com.svg";
import puppy_icon from "@/assets/carnivore-cartoon-3-svgrepo-com.svg";
import pizza_icon from "@/assets/pizza-slice-svgrepo-com.svg";

import Radio from ".";

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

const meta: Meta<typeof Radio> = {
  component: Radio,
  argTypes: {
    children: {
      options: Object.keys(supportIcons),
      mapping: supportIcons,
      control: {
        type: "select",
      },
    },
  },
};

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  name: "default",
  args: {
    value: "default",
    children: "default radio🥳",
    onChange: fn(),
  },
};

export const Checked: Story = {
  name: "checked",
  args: {
    checked: true,
    children: "checked radio🥳",
    onChange: fn(),
  },
};

export const Disabled: Story = {
  name: "disabled",
  args: {
    disabled: true,
    children: "disabled radio🥳",
    onChange: fn(),
  },
};

export const Label: Story = {
  name: "label",
  args: {
    value: "pizza selected",
    children: "pizza icon",
    onChange: fn(),
  },
};

export default meta;
