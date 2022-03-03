import { houseData } from '../Services/dataHouse.js';
let csh = houseData.results[0].members;
console.log(csh);
const getState = () => {
  let allState = [];
  csh.forEach((member) => {
    if (!allState.includes(member.state)) {
      allState.push(member.state);
    }
  });

  let selector = document.querySelector('#states');
  allState.sort().forEach((state) => {
    let option = document.createElement('option');
    option.value = state;
    option.innerText = state;
    selector.appendChild(option);
  });
};

const tdInfo = (info) => {
  let td = document.createElement('td');
  td.innerText = info;
  return td;
};

const getTableMembers = () => {
  let tableBody = document.getElementById('tBody');
  csh.map((members) => {
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
    tr.append(tdInfo(members.votes_with_party_pct));

    tableBody.append(tr);
  });
};
getState();
getTableMembers();
