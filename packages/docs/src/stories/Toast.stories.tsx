import React from "react";

import { Button, Toast, ToastProps } from "@bees-grow-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Exhibition/Toast",
  component: Toast,
  decorators: [
    (Story) => {
      const [open, setOpen] = React.useState(false);
      const timerRef = React.useRef(0);

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
          {open && Story()}
          <Button
            variant="secondary"
            onClick={() => {
              setOpen(false);
              window.clearTimeout(timerRef.current);
              timerRef.current = window.setTimeout(() => {
                setOpen(true);
              }, 100);
            }}
          >
            Open Toast
          </Button>
        </div>
      );
    },
  ],
  args: {
    title: "Toast Title",
    description: "Toast Description",
    duration: 5000,
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
