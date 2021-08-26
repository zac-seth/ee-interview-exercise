import { FC } from "react";

import { Grid, LayoutDirection } from "elements";

type CalculatorSections = {
  display: JSX.Element;
  controls: JSX.Element;
  functions: JSX.Element;
  numbers: JSX.Element;
};

interface AssignSections {
  (): CalculatorSections;
}

export type CalculatorShellProps = {
  children: AssignSections;
};

export const CalculatorShell: FC<CalculatorShellProps> = ({ children }) => {
  const { display, controls, functions, numbers } = children();

  return (
    <Grid
      data-testid="calculator-shell-container"
      items={[1, 4, 1]}
      layoutDirection={LayoutDirection.COLUMN}
    >
      {display}
      <Grid items={[3, 1]} data-testid="calculator-shell-inner">
        {numbers}
        {functions}
      </Grid>
      {controls}
    </Grid>
  );
};
