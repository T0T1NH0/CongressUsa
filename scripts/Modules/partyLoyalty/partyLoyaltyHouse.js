import { houseData } from '../Services/dataHouse.js';
import { filterGance } from '../utils/filter.js';

let data = houseData.results[0].members;

filterGance(data);
