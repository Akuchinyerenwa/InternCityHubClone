import "./Input.css";


export const Input = ({title, type, onChange, name}) => {

  return(
    <div className="input-root">
      <label htmlFor={name}>{title}</label>
      <input id={name} name={name} type={type} onChange={(e)=>onChange(e.target.value)} />
    </div>
  )
}