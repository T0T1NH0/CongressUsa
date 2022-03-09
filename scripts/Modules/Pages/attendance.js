import { houseData } from '../Services/dataHouse.js';
import { senateData } from '../Services/dataSenate.js';
import { filterGance } from '../utils/filter.js';
import { leastMost } from '../utils/LeastMost.js';

let dataHouse = houseData.results[0].members;
let dataSenate = senateData.results[0].members;

if (document.title == 'Attendance | House') {
  filterGance(dataHouse);
  leastMost(dataHouse);
} else if (document.title == 'Attendance | Senate') {
  leastMost(dataSenate);
  leastMost(dataSenate);
}
