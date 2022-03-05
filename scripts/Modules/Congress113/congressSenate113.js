import { senateData } from '../Services/dataSenate.js';
import printTable from '../utils/printTable.js';
import getStateSenate from '../utils/statesSenate.js';

let data = senateData.results[0].members;
let tableBody = document.getElementById('tBody');
let allCheckBoxes = document.querySelectorAll('.checkBox');
let selector = document.querySelector('#selector');
getStateSenate(data);
printTable(data);

const filters = {
  D: true,
  R: true,
  ID: true,
  state: 'allStates',
};

const filterMembers = (filterChanged) => {
  let membersFilter = data.filter((member) => filterChanged[member.party] == true);
  membersFilter = membersFilter.filter(
    (member) => filterChanged.state == member.state || filterChanged.state == 'allStates'
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
