import { KEY_EVENT} from '../../data/constants.js';
import { removeTransition, playSound} from '../handlers/handler.js';
import { KEYDOWN_EVENT } from '../../data/constants.js';


export const keypressEventListener = (elements) => {
    elements.forEach(element => element.addEventListener(KEY_EVENT, removeTransition));
  };
  export const keydownEventListener = (element) => {
    element.addEventListener(KEYDOWN_EVENT, playSound);
  }