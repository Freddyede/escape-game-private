export const chargeArrayKey = (elmnt) => {
    let arrayLabels = document.querySelectorAll('.inventory-item');
    for (const elmnts of arrayLabels) {
        if(elmnt.getAttribute('data-key').split('key')[1] === elmnts.getAttribute('data-target')) {
            elmnts.classList.remove('hide');
        }
    }
}