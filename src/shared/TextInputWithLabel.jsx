
function TextInputWithLabel({
  elementId,
  labelText,
  onChange,
  ref,
  value,
}) {
  return (



    <>
      <label htmlFor={elementId}>{labelText}</label>
      <input
        type="text"
        id={elementId}
        ref={inputRef}
        value={workingTodoTitle}
        onChange={(e) =>setWorkingTodoTitle(e.target.value)}
      />
    </>
  );
}

export default TextInputWithLabel;



