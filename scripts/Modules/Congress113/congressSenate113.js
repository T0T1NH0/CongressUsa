import { senateData } from '../Services/dataSenate.js';

let csS = senateData.results[0].members;

const getState = () => {
  let allState = [];
  csS.forEach((member) => {
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
