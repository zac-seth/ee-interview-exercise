import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { add, curry, divide } from 'elements';

import { CommandPair, useCommandTrail } from './useCommandTrail';

const firstCommand: CommandPair = {
  command: {
    func: curry(add),
    representation: `+`
  },
  value: 15
};
const secondCommand: CommandPair = {
  command: {
    func: curry(divide),
    representation: `÷`
  },
  value: 5
};

describe(`useCommandTrail() 🧷`, () => {
  it(`Should return an initial empty array in the command trail`, () => {
    const { result } = renderHook(() => useCommandTrail());
    const { commandTrail } = result.current;

    expect(commandTrail).toEqual([]);
  });
  
  it(`Should return an array with a command pair after it's selected`, () => {
    const { result } = renderHook(() => useCommandTrail());
    expect(result.current.commandTrail).toEqual([]);

    act(() => result.current.handleCommandPairSelected(firstCommand));

    expect(result.current.commandTrail).toEqual([firstCommand]);

    act(() => result.current.handleCommandPairSelected(secondCommand));

    expect(result.current.commandTrail).toEqual([firstCommand, secondCommand]);
  });
});
