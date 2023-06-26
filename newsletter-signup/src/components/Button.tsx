import "./Button.scss";

type Props = {
  text: string;
  buttonType: "submit" | "button";
  handleClick?: () => void;
};

const Button = ({ text, buttonType, handleClick }: Props) => {
  return (
    <button onClick={handleClick} className="btn" type={buttonType}>
      {text}
    </button>
  );
};

export default Button;
