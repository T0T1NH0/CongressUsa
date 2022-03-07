import { missedVotes } from './glance.js';
import { printGlance, printTable } from './printTable.js';

let tableBody = document.getElementById('tBody');
let allCheckBoxes = document.querySelectorAll('.checkBox');
let selector = document.querySelector('#selector');

export const dataFilter = (data) => {
  const filters = {
    D: true,
    R: true,
    ID: true,
    state: 'allStates',
  };

  const filterMembers = (filterChanged) => {
    let membersFilter = data.filter((member) => filterChanged[member.party] == true);
    membersFilter = membersFilter.filter(
      (member) =>
        filterChanged.state == member.state || filterChanged.state == 'allStates'
    );
    tableBody.innerHTML = '';
    printTable(membersFilter);
  };

  const changeFilter = (e) => {
    e.target.checked == undefined
      ? (filters.state = e.target.value)
      : (filters[e.target.value] = e.target.checked);
    filterMembers(filters);
  };

  allCheckBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      changeFilter(e);
    });
  });

  selector.addEventListener('change', (x) => {
    changeFilter(x);
  });
};

export const filterGance = (data) => {
  let dataR = data.filter((members) => members.party === 'R');
  let dataD = data.filter((members) => members.party === 'D');
  let dataID = data.filter((members) => members.party === 'ID');
  printGlance(dataR, dataD, dataID);
  missedVotes(dataR, dataD);
  // VotedParty(dataR, dataD);
};
