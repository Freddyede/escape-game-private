import {DomModules} from "../../../src/Elements/Modules/DomModules.js";

export const buttonHideMenu = e => e.parentElement.classList.add('hide');
export  const parrallaxMethod = (dataTimeOut, timer, elements) => {
    if(timer <= 0) {
        clearTimeout(dataTimeOut);
    } else {
        timer --;
        DomModules.moveElements(...elements);
    }
}