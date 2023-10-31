import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  round: 'rounded-full' | 'rounded-md';
  textSize: string;
  variant: 'btn_dark_green' | 'btn_blue';
};

const Button = ({
  type,
  title,
  icon,
  round,
  textSize,
  variant,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 ${round} border ${variant}`}
    >
      {icon && <Image src={icon} alt="title" width={24} height={24} />}
      <label className={`${textSize} whitespace-nowrap`}>{title}</label>
    </button>
  );
};

export default Button;
