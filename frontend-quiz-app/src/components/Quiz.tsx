import "./Quiz.scss";

type QuizTemplateProps = {
  title: string;
};

export default function QuizTemplate({ title }: QuizTemplateProps) {
  return <>{title}</>;
}
