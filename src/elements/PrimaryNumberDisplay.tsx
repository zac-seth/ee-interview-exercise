import { FC } from "react";

import { NumberDisplay, NumberDisplayMode } from "./NumberDisplay.style";

export type PrimaryNumberDisplayProps = {
  value: string;
};

export const PrimaryNumberDisplay: FC<PrimaryNumberDisplayProps> = ({
  value
}) => <NumberDisplay mode={NumberDisplayMode.PRIMARY}>{value}</NumberDisplay>;
