export default function Input({
  required,
  type,
  placeholder,
  id,
  value,
  onChange,
  name,
  svg,
  label,
  className,
  classLabel,
  classInput,
}) {
  return (
    <>
      <div className={`input-group ${className}`}>
        <label htmlFor="" className={classLabel}>
          {label}
        </label>
        <div className=" flex items-center">
          <input
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className={`border-[.1rem] border-black/10 ${classInput}`}
          />
          <svg>
            <use href={`/images/sprite.svg#${svg}`} />
          </svg>
        </div>
      </div>
    </>
  );
}
