import { VFC } from 'react';

import { HeroPanel } from 'elements';

import {
  ArithmeticStrip,
  CalculatorShell,
  ControlStrip,
  DisplayPanel,
  NumberPad,
} from 'compounds';

import { useCalculator } from './useCalculator';

export const Calculator: VFC = () => {
  const {
    feed,
    value,

    handleCalculateSelected,
    handleFunctionSelected,
    handleResetSelected,
    handleValueSelected
  } = useCalculator();

  return (
    <HeroPanel>
      <CalculatorShell>
        {() => ({
          display: <DisplayPanel primary={value} secondary={feed} />,
          numbers: <NumberPad onValueSelected={handleValueSelected} />,
          functions: (
            <ArithmeticStrip onFunctionSelected={handleFunctionSelected} />
          ),
          controls: (
            <ControlStrip
              onCalculateSelected={handleCalculateSelected}
              onResetSelected={handleResetSelected}
            />
          )
        })}
      </CalculatorShell>
    </HeroPanel>
  );
};
