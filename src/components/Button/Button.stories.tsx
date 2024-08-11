import type { Meta, StoryObj } from "@storybook/react";

import react_icon from "@/assets/react.svg";
import flower_icon from "@/assets/flower-svgrepo-com.svg";

import Button from ".";

const supportIcons = {
  "flower icon": (
    <img src={flower_icon} width={20} height={20} alt="flower-icon" />
  ),
};

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    icon: {
      options: Object.keys(supportIcons),
      mapping: supportIcons,
      control: {
        type: "select",
      },
    },
  },
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "default type",
  args: {
    text: "default button🥳",
    type: "default",
  },
};

export const Primary: Story = {
  name: "primary type",
  args: {
    text: "primary button🥳",
    type: "primary",
  },
};

export const Text: Story = {
  name: "text type",
  args: {
    text: "text button🥳",
    type: "text",
  },
};

export const Link: Story = {
  name: "link type",
  args: {
    text: "link button🥳",
    type: "link",
  },
};

export default meta;
