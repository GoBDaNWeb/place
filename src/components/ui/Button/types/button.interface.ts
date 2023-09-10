export interface IButtonProps {
  variable?:
    | "primary"
    | "secondary"
    | "clear"
    | "roundedPrimary"
    | "roundedSecondary";
  size: "large" | "small";
  className?: string;
  onClick?: () => void;
}
