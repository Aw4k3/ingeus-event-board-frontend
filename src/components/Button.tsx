import { PropsWithChildren } from "react";

type ButtonProps = {
  onClick: () => void;
} & PropsWithChildren;

export default function Button({ onClick, children }: ButtonProps) {
  return <button onClick={() => onClick()}>{children}</button>;
}
