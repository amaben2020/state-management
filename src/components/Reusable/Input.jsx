import Input2 from './Input2';

//This is how reusable components are created HOCstyle
const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,

  children,
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input id={id} type={type} value={value} onChange={onInputChange} />
  </>
);

export default InputWithLabel;

//USAGE:
//  <div>
//    <h1>My Hacker Stories</h1>
//    <InputWithLabel id="search" value={searchTerm} onInputChange={handleSearch}>
//      <strong>Search:</strong>
//    </InputWithLabel>
//    ...
//  </div>;
