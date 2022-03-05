const getStateSenate = (data) => {
  let selector = document.getElementById('selector');
  let allState = [];
  data.forEach((member) => {
    if (!allState.includes(member.state)) {
      allState.push(member.state);
    }
  });
  allState.sort().forEach((state) => {
    let option = document.createElement('option');
    option.value = state;
    option.innerText = state;
    selector.appendChild(option);
  });
};
export default getStateSenate;
