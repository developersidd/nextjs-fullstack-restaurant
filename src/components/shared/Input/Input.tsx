type InputProps = {
  data: {
    name: string, 
    type: string, 
    placeholder: string,
    error?: string,
    hookFormRegister: any
  }
}
const Input = ({ data: {name, type, placeholder, error, hookFormRegister }, ...props }: InputProps) => {
  const inputClass = "bg-secondary-olive text-gray-400 rounded border-2 border-primary-yellow block w-full p-3 focus:outline-none placeholder:text-sm";

  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-2 text-md font-medium text-gray-500">{name} </label>
      <input {...hookFormRegister} type={type} id={name} className={inputClass} placeholder={placeholder} required />
      <small className="text-red-700 font-bold"> {error} </small>
    </div>
  )
}

export default Input;
