import { printV } from './printTable.js';

const missedIT = (data, param) => {
  data.forEach((x) => {
    if (!param.includes(x)) {
      param.push(x.missed_votes_pct);
    }
  });
  return param;
};

const VotedPartyIT = (data, param) => {
  data.forEach((x) => {
    if (!param.includes(x)) {
      param.push(x.votes_with_party_pct);
    }
  });
  return param;
};

const Sum = (param) => {
  let data = 0;
  for (let i = 0; i < param.length; i++) {
    data += param[i];
  }
  return data;
};

export const MPVotes = (dataR, dataD) => {
  let missedVD = [];
  let missedVR = [];
  let partyVD = [];
  let partyVR = [];

  missedIT(dataD, missedVD);
  missedIT(dataR, missedVR);
  VotedPartyIT(dataD, partyVD);
  VotedPartyIT(dataR, partyVR);

  let MVD = (Sum(missedVD) / missedVD.length).toFixed(2);
  let MVR = (Sum(missedVR) / missedVR.length).toFixed(2);
  let PVD = (Sum(partyVD) / partyVD.length).toFixed(2);
  let PVR = (Sum(partyVR) / partyVR.length).toFixed(2);

  printV(PVD, PVR, MVD, MVR);
};
