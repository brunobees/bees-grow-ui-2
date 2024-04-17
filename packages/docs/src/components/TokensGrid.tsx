import React from "react";

import "../styles/tokens-grid.css";

interface TokensGridProps {
  tokens: Record<string, string>;
  keyPrefix?: string;
}

export function TokensGrid({ tokens, keyPrefix }: TokensGridProps) {
  const formatKey = (key: string) => {
    const hasKeyDashOrSpace = key.includes("-") || key.includes(" ");

    if (hasKeyDashOrSpace) {
      return `${keyPrefix}["${key}"]`;
    }

    return `${keyPrefix}.${key}`;
  };

  const tokensSortedByValue = Object.entries(tokens).sort(
    ([_aKey, aValue], [_bKey, bValue]) => {
      const areValuesNumbers = !isNaN(Number(aValue)) && !isNaN(Number(bValue));

      if (areValuesNumbers) {
        return Number(aValue) - Number(bValue);
      }

      const areValuesPixelMeasure =
        aValue.includes("px") && bValue.includes("px");

      if (areValuesPixelMeasure) {
        const aPixelValue = Number(aValue.replace("px", ""));
        const bPixelValue = Number(bValue.replace("px", ""));

        return aPixelValue - bPixelValue;
      }

      return aValue.localeCompare(bValue);
    },
  );

  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        {tokensSortedByValue.map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{keyPrefix ? formatKey(key) : key}</td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
