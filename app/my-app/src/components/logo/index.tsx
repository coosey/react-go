import "./index.scss";

export interface LogoProps {
  src: string;
  alt: string;
}

export const Logo = (props: LogoProps) => {
  const {
    src,
    alt,
  } = props;

  return (
    <div className="logo-container">
      <img src={src} alt={alt} />
    </div>
  )
}