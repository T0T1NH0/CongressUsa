import { houseData } from '../Services/dataHouse.js';
import { senateData } from '../Services/dataSenate.js';
import { getState } from '../utils/states.js';
import { dataFilter } from '../utils/filter.js';
import { printTable } from '../utils/printTable.js';

let dataHouse = houseData.results[0].members;
let dataSenate = senateData.results[0].members;

if (document.title == 'Congress | House') {
  dataFilter(dataHouse);
  printTable(dataHouse);
  getState(dataHouse);
} else if (document.title == 'Congress | Senate') {
  dataFilter(dataSenate);
  printTable(dataSenate);
  getState(dataSenate);
}
