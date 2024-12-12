import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  btnText,
  className,
  ...rest
}) => {
  return (
    <button className={`${className}`} {...rest}>
      {btnText}
    </button>
  );
};

export default Button;
