import { Text, Tooltip, TooltipProps } from "@bees-grow-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Exhibition/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: "100%",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Story()}
        </div>
      );
    },
  ],
  args: {
    children: <Text style={{ width: "fit-content" }}>Lorem ipsum</Text>,
    tooltipText: "Lorem ipsum",
    delayDuration: 100,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
