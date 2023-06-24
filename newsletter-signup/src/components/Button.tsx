type Props = {
  text: string;
  buttonType: "submit" | "button";
};

const Button = ({ text, buttonType }: Props) => {
  return (
    <button className="btn" type={buttonType}>
      {text}
    </button>
  );
};

export default Button;
