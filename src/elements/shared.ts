export interface ClickHandler {
  (): void;
}

export interface ValuedClickHandler<TValue> {
  (value: TValue): void;
}

export type BasicButtonProps<TValue> = {
  label: string;
  value: TValue;

  onClick: ValuedClickHandler<TValue>;
};

export type ValuelessButtonProps = Omit<
  BasicButtonProps<unknown>,
  'onClick' | 'value'
> & {
  onClick: ClickHandler;
};
