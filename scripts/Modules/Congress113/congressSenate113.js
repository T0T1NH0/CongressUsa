import { senateData } from '../Services/dataSenate.js';
import { dataFilter } from '../utils/filter.js';
import { printTable } from '../utils/printTable.js';
import { getState } from '../utils/states.js';

let data = senateData.results[0].members;
dataFilter(data);
getState(data);
printTable(data);
