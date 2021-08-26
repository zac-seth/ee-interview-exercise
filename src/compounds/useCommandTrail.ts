import { useCallback, useState } from 'react';

import { CurriedNumericFunction } from 'elements';

export interface FunctionCommand {
  func: CurriedNumericFunction;
  representation: string;
}

export type CommandPair = {
  value: number;
  command: FunctionCommand;
};

export type CommandTrail = CommandPair[];

export interface HandleCommandPairSelected {
  (commandPair: CommandPair): void;
}

export type UseCommandTrailOutput = {
  commandTrail: CommandTrail;

  handleCommandPairSelected: HandleCommandPairSelected;
};

export interface UseCommandTrail {
  (): UseCommandTrailOutput;
}

export const useCommandTrail: UseCommandTrail = () => {
  const [commandTrail, setCommandTrail] = useState<CommandTrail>([])
  const handleCommandPairSelected = useCallback<HandleCommandPairSelected>((commandPair) => {
    setCommandTrail([
      ...commandTrail,
      commandPair
    ])
  }, [commandTrail]);

  return {
    commandTrail,

    handleCommandPairSelected,
  };
};
