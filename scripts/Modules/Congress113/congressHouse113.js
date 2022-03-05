import { houseData } from '../Services/dataHouse.js';
import { getState } from '../utils/states.js';
import { dataFilter } from '../utils/filter.js';
import { printTable } from '../utils/printTable.js';

let data = houseData.results[0].members;
dataFilter(data);
getState(data);
printTable(data);
