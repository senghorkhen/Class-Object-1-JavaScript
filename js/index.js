import {Dell} from './Dell.js';
import {Mac} from './Mac.js';

// Dell object
const dell1 = new Dell();
dell1.display();
dell1.setBrand("This is brand");
dell1.getBrand();

//Mac object
const mac1 = new Mac();
mac1.setName('This is name of computer');
mac1.getName();