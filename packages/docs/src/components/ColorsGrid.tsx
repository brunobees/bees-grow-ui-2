import React from "react";

import { tokens } from "@bees-grow-ui/react";
import { getContrast } from "polished";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getColorValues(colors: any, depth = 1) {
  const colorEntries = Object.entries(colors);
  return colorEntries.map(([key, value]) => {
    if (typeof value === "string") {
      return (
        <div
          key={key}
          style={{
            marginBottom: "1rem",
            marginLeft: `${depth * 5}px`,
          }}
        >
          <div
            style={{
              backgroundColor: value,
              padding: "1rem",
              fontFamily: "monospace",
              color: getContrast(value, "#FFF") < 3.5 ? "#000" : "#FFF",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <strong>{key}</strong>
            <span>{value}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div key={key}>
          <h2>{key}</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: `${depth * 5}px`,
            }}
          >
            {getColorValues(value, depth + 1)}
          </div>
        </div>
      );
    }
  });
}

export function ColorsGrid() {
  return <div>{getColorValues(tokens.color)}</div>;
}
