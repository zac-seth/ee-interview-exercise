import { FC, useCallback, useState } from "react";

import {
  Grid,
  HandleValueSelected,
  NumberButton,
  PlaceholderButton,
} from "elements";

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface HandleProvideDigit {
  (digit: Digit): void;
}

export type NumberPadProps = {
  onValueSelected: HandleValueSelected;
};

type ValueItem = { value: Digit };
type PlaceholderItem = { isPlaceholder: true };
type Item = ValueItem | PlaceholderItem;

const items: Item[] = [
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { isPlaceholder: true },
  { value: 0 },
  { isPlaceholder: true }
];

const isValue = (item: Item): item is ValueItem => item.hasOwnProperty(`value`);

export const NumberPad: FC<NumberPadProps> = ({ onValueSelected }) => {
  const [value, setValue] = useState(0);
  const handleProvideDigit = useCallback<HandleProvideDigit>(
    digit => {
      const newValue = value === 0 ? digit : +`${value}${digit}`;

      setValue(newValue);
      onValueSelected(newValue);
    },
    [onValueSelected, value]
  );

  return (
    <Grid cols={3}>
      {items.map((item, i) =>
        isValue(item) ? (
          <NumberButton
            label={item.value.toString()}
            key={`item-${i}`}
            onClick={handleProvideDigit}
            value={item.value}
          />
        ) : (
          <PlaceholderButton label="?" key={`item-${i}`} />
        )
      )}
    </Grid>
  );
};
