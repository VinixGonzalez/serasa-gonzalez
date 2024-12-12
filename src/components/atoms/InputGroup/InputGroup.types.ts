import { BoxProps, InputElementProps } from "@chakra-ui/react";

export interface InputGroupProps extends BoxProps {
  startElementProps?: InputElementProps;
  endElementProps?: InputElementProps;
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  children: React.ReactElement;
  startOffset?: InputElementProps["paddingStart"];
  endOffset?: InputElementProps["paddingEnd"];
}
