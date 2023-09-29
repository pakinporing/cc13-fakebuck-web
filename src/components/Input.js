export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error
}) {
  return (
    <>
      <input
        className={`form-control ${error ? 'is-invalid' : ''}`}
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </>
  );
}
