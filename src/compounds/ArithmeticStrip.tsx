import { FC } from 'react';

import {
  add,
  divide,
  FunctionButton,
  HandleFunctionSelected,
  multiply,
  subtract,
  VerticalStrip,
} from 'elements';

export type ArithmeticStripProps = {
  onFunctionSelected: HandleFunctionSelected;
};

const functions = [
  { label: `&divide;`, value: divide },
  { label: `&times;`, value: multiply },
  { label: `&minus;`, value: subtract },
  { label: `+`, value: add }
];

export const ArithmeticStrip: FC<ArithmeticStripProps> = ({
  onFunctionSelected
}) => (
  <VerticalStrip length={functions.length}>
    {functions.map(({ label, value }) => (
      <FunctionButton
        label={label}
        key={`function-${label}`}
        onClick={onFunctionSelected}
        value={value}
      />
    ))}
  </VerticalStrip>
);
