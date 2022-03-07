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

const Sum = (data, param) => {
  for (let i = 0; i < param.length; i++) {
    data += param[i];
  }
  let sum = data / param;
  return data;
};

export const missedVotes = (dataR, dataD) => {
  let missedVD = [];
  let missedVR = [];
  let partyVD = [];
  let partyVR = [];

  let sumMVD = 0;
  let sumMVR = 0;
  let sumPVD = 0;
  let sumPVR = 0;

  const mitD = missedIT(dataD, missedVD);
  const mitR = missedIT(dataR, missedVR);
  const PartyITD = VotedPartyIT(dataD, partyVD);
  const PartyITR = VotedPartyIT(dataR, partyVR);

  const missedSumD = Sum(sumMVD, missedVD);
  const missedSumR = Sum(sumMVR, missedVR);
  const partySumD = Sum(sumPVD, partyVD);
  const partySumR = Sum(sumPVR, partyVR);

  let sumMD = missedSumD / missedVD.length;
  let sumMR = missedSumR / missedVR.length;
  let sumPD = partySumD / partyVD.length;
  let sumPR = partySumR / partyVR.length;

  let MVDstring = String(sumMD);
  let MVRstring = String(sumMR);
  let PVDstring = String(sumPD);
  let PVRstring = String(sumPR);

  let MVD = MVDstring.slice(0, 4);
  let MVR = MVRstring.slice(0, 4);
  let PVD = PVDstring.slice(0, 5);
  let PVR = PVRstring.slice(0, 5);

  printV(PVD, PVR, MVD, MVR);
};
