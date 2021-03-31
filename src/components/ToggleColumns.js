import React from 'react';

function ToggleColumns(props) {
  const [columns, setColumns] = React.useState([]);
  const [values, setValues] = React.useState([]);

  const onCheckboxClick = e => {
    setValues(values.map((item, index) => (index === e ? !item : item)));
    props.onCheckboxClick(columns[e], !values[e])
  };

  React.useEffect(() => {
    const setData = () => {
      let arr_key = [];
      let arr_val = [];
      Object.entries(props.columns).forEach((column, index) => {
        arr_key.push(column[0]);
        arr_val.push(column[1]);
      });

      setColumns(arr_key);
      setValues(arr_val);
    };

    setData();
  }, []);

  return (
    <div className='toggle-columns'>
      {/* Bind handlers and props */}
      {columns.map((column, index) => {
        return (
          <div key={index}>
            <label>{column}</label>
            <input
              type='checkbox'
              checked={values[index]}
              onChange={e => onCheckboxClick(index)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ToggleColumns;
