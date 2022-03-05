import { senateData } from '../Services/dataSenate.js';
import { filterGance } from '../utils/filter.js';

let data = senateData.results[0].members;

filterGance(data);
