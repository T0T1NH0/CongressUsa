let loading = document.getElementById('loading');

const tdInfo = (info) => {
  let td = document.createElement('td');
  td.innerText = info;
  return td;
};
export const printTable = (data) => {
  let tableBody = document.getElementById('tBody');
  try {
    tableBody.removeChild(loading);
  } catch (error) {}
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
    td.innerText = 'No Results Found, Please check the filter';
    tr.append(td);
    tableBody.append(tr);
  }
};

export const printGlance = (dataR, dataD, dataID) => {
  let trD = document.getElementById('D');
  let trR = document.getElementById('R');
  let trID = document.getElementById('ID');
  let trTotal = document.getElementById('Total');
  let tableBody = document.getElementById('tBodyGlance');

  try {
    tableBody.removeChild(loading);
  } catch (error) {}

  let total = dataR.length + dataD.length + dataID.length;
  trD.append(tdInfo(dataD.length));

  trR.append(tdInfo(dataR.length));

  trID.append(tdInfo(dataID.length));
  trID.append(tdInfo('-'));

  trTotal.append(tdInfo(total));
  trTotal.append(tdInfo('-'));
};
export const printV = (PVD, PVR, MVD, MVR) => {
  let trD = document.getElementById('D');
  let trR = document.getElementById('R');

  if (document.title == 'Attendance | House' || document.title == 'Attendance | Senate') {
    trD.append(tdInfo(MVD + '%'));
    trR.append(tdInfo(MVR + '%'));
  } else if (
    document.title == 'Party Loyalty | House' ||
    document.title == 'Party Loyalty | Senate'
  ) {
    trD.append(tdInfo(PVD + '%'));
    trR.append(tdInfo(PVR + '%'));
  }
};

const printMV = (data, tbody) => {
  let tableBody = tbody;
  tableBody.innerText = '';
  try {
    tableBody.removeChild(loading);
  } catch (error) {}
  data.forEach((member) => {
    let tr = document.createElement('tr');

    let nameWithLink = document.createElement('a');
    nameWithLink.innerText = `${member.last_name} ${member.middle_name || ''} ${
      member.first_name
    }`;
    nameWithLink.href = member.url;
    nameWithLink.target = '_blank';
    let tdName = document.createElement('td');
    tdName.append(nameWithLink);
    tr.append(tdName);

    tr.append(tdInfo(member.missed_votes));
    tr.append(tdInfo(`${member.missed_votes_pct}%`));

    tableBody.append(tr);
  });
};

const printPV = (data, tbody) => {
  let tableBody = tbody;
  tableBody.innerText = '';
  try {
    tableBody.removeChild(loading);
  } catch (error) {}
  data.forEach((member) => {
    let tr = document.createElement('tr');

    let nameWithLink = document.createElement('a');
    nameWithLink.innerText = `${member.last_name} ${member.middle_name || ''} ${
      member.first_name
    }`;
    nameWithLink.href = member.url;
    nameWithLink.target = '_blank';
    let tdName = document.createElement('td');
    tdName.append(nameWithLink);
    tr.append(tdName);

    tr.append(tdInfo(member.total_votes));
    tr.append(tdInfo(`${member.votes_with_party_pct.toFixed(2)}%`));

    tableBody.append(tr);
  });
};
export const printLeastMost = (least, most) => {
  let tBodyLeastId = document.getElementById('tBodyLeast');
  let tBodyMostId = document.getElementById('tBodyMost');

  if (document.title == 'Attendance | House' || document.title == 'Attendance | Senate') {
    printMV(least, tBodyLeastId);
    printMV(most, tBodyMostId);
  } else if (
    document.title == 'Party Loyalty | House' ||
    document.title == 'Party Loyalty | Senate'
  ) {
    printPV(least, tBodyLeastId);
    printPV(most, tBodyMostId);
  }
};
