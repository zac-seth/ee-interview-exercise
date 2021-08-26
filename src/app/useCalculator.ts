import { useCallback, useState } from 'react';

import {
  HandleCalculateSelected,
  HandleFunctionSelected,
  HandleResetSelected,
  HandleValueSelected
} from 'elements';
import { CommandPair, useCommandTrail } from 'compounds';

// interface HandleProvideCalculate {
//   (): void;
// }

// interface ContextCalculation {
//   (lastValue: number): number;
// }

// interface CalculationFactory {
//   (context: CalculationContext): ContextCalculation;
// }

// const calculateContext: CalculationFactory = context => lastValue => {
//   if (context.length === 0) {
//     return lastValue;
//   }

//   return context.reduce((partialApplication, item) => {
//     const { command, value } = item;

//     return command.func(previousResult, value);
//   }, initialValue);
// };

export const useCalculator = () => {
  const [value, setValue] = useState<number>(0);
  const { commandTrail } = useCommandTrail();

  const handleValueSelected = useCallback<HandleValueSelected>(
    newValue => setValue(newValue),
    []
  );

  const handleFunctionSelected = useCallback<HandleFunctionSelected>(() => {
    // setContext([...context, { command, value }]);
  }, []);

  const handleResetSelected = useCallback<HandleResetSelected>(() => {}, []);

  const handleCalculateSelected = useCallback<HandleCalculateSelected>(() => {
    // const result = calculateContext(context)(value);
  }, []);

  return {
    feed: commandTrail.reduce((feed, item) => {
      const {
        command: { representation },
        value
      } = item as CommandPair;

      return `${feed} ${value} ${representation}`;
    }, ``),
    value: value.toString(),

    handleCalculateSelected,
    handleFunctionSelected,
    handleResetSelected,
    handleValueSelected
  };
};
