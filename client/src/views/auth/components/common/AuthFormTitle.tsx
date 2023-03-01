interface AuthFormTitleProps {
  text: string;
}

export const AuthFormTitle = ({ text }: AuthFormTitleProps) => (
  <h2 className="max-w-min font-bold text-5xl mb-6">{text}</h2>
);
