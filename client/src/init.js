import { USER_INPUT_CLASS,} from '../data/constants.js';
import { keypressEventListener, keydownEventListener } from './listeners/listener.js';
debugger;

const keys = Array.from(document.getElementsByClassName(USER_INPUT_CLASS));
keypressEventListener(keys);
keydownEventListener(window);