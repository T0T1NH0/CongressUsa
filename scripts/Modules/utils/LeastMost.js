import { printLeastMost } from './printTable.js';

export const leastMost = (data) => {
  let pct = (data.length / 10).toFixed(0);

  if (document.title == 'Attendance | House' || document.title == 'Attendance | Senate') {
    let MVM = data.sort((M1, M2) => {
      if (M1.missed_votes_pct < M2.missed_votes_pct) {
        return -1;
      }
    });

    let MVMPct = MVM.slice(0, pct);

    let MVL = MVM.reverse();
    let MVLPct = MVL.slice(0, pct);
    printLeastMost(MVLPct, MVMPct);
  } else if (
    document.title == 'Party Loyalty | House' ||
    document.title == 'Party Loyalty | Senate'
  ) {
    let PVL = data.sort((M1, M2) => {
      if (M1.votes_with_party_pct < M2.votes_with_party_pct) {
        return -1;
      }
    });

    let PVLPct = PVL.slice(0, pct);

    let PVM = PVL.reverse();
    let PVMPct = PVM.slice(0, pct);
    console.log(PVMPct);
    printLeastMost(PVLPct, PVMPct);
  }
};
