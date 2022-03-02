import { houseData } from '../Services/dataHouse.js';
let csh = houseData.results[0].members;

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
getState();
