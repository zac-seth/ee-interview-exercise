import { FC } from "react";
import { NumberDisplay, NumberDisplayMode } from "./NumberDisplay.style";

export type SecondaryNumberDisplayProps = {
  value: string;
};

export const SecondaryNumberDisplay: FC<SecondaryNumberDisplayProps> = ({
  value
}) => <NumberDisplay mode={NumberDisplayMode.SECONDARY}>{value}</NumberDisplay>;
