const printTable = (data) => {
  let tableBody = document.getElementById('tBody');
  const tdInfo = (info) => {
    let td = document.createElement('td');
    td.innerText = info;
    return td;
  };
  if (data.length > 0) {
    data.map((members) => {
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      let memberUrl = document.createElement('a');

      memberUrl.innerText = `${members.last_name} ${
        members.middle_name !== null ? members.middle_name : ''
      } ${members.first_name}`;
      memberUrl.href = members.url;
      memberUrl.target = '_blank';
      td.append(memberUrl);

      tr.append(td);
      tr.append(tdInfo(members.party));
      tr.append(tdInfo(members.state));
      tr.append(tdInfo(members.seniority));
      tr.append(tdInfo(`${members.votes_with_party_pct.toFixed(2)}%`));

      tableBody.append(tr);
    });
  } else {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.setAttribute('colspan', '5');
    td.innerText = 'No Results Found, please my family is about to die check the filter';
    tr.append(td);
    tableBody.append(tr);
  }
};

export default printTable;
