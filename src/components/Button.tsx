import { PropsWithChildren } from "react";

type ButtonProps = {
  onClick: () => void;
} & PropsWithChildren;

export default function Button({ onClick, children }: ButtonProps) {
  return <button className="cursor-pointer" onClick={() => onClick()}>{children}</button>;
}
