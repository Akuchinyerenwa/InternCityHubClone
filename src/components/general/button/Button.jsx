import "./Button.css";

export const Button = ({title, link}) => {


  if (link) return (
    <button className="button-root">
      <a href={link}>{title}</a>
    </button>
  )

  return (
    <button className="button-root">{title}</button>
  )
}

