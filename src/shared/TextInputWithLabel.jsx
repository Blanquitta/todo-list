export default TextInputWithLabel;
function TextInputWithLabel({ elementId, labelText, value, onChange, ref }) {
  return (
    <>
      <label htmlFor={elementId}>{labelText}</label>
      <input
        type="text"
        id={elementId}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    </>
  );
}
