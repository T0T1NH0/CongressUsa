import { printLeastMost } from './printTable.js';

export const leastMost = (data) => {
  if (document.title == 'Attendance | House' || document.title == 'Attendance | Senate') {
    let MVM = data.sort((M1, M2) => {
      if (M1.missed_votes_pct < M2.missed_votes_pct) {
        return -1;
      }
    });

    let MVMPct = MVM.slice(0, 46);

    console.log('soy attendance');

    let MVL = MVM.reverse();
    let MVLPct = MVL.slice(0, 46);

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
    let PVLPct = PVL.slice(0, 46);

    console.log('soy Party Loyalty');

    let PVM = PVL.reverse();
    let PVMPct = PVM.slice(0, 46);

    printLeastMost(PVLPct, PVMPct);
  }
};
