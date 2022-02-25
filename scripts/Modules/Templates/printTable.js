const printTable = (data, template, elem) => {
  const tbodyRef = elem;
  const Template = template(data);

  const newRow = tbodyRef.insertRow(tbodyRef.rows.length);

  newRow.innerHTML = Template;
};

export default printTable;
