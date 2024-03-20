export class Timer {
    timerGlobale;
    // timerByRoom;
    elmntGlobale;
    // elemntByRoom;
    // timerByRoom;
    // constructor()
    // constructor(timerGlobale, timerByRoom, elmntGlobale, elemntByRoom) {
    //     this.elmntGlobale = document.getElementById(elmntGlobale);
    //     this.elemntByRoom = document.getElementById(elemntByRoom);
    //     this.timerGlobale = setInterval(this.countdownGlobale, timerGlobale * 1000);
    //     this.timerByRoom = setInterval(this.countdownByRoom, timerByRoom * 1000);
    // }
    setTimer(timerGlobale, elmntGlobale)  {
        this.timerGlobale = setInterval(this.countdownGlobale, timerGlobale * 1000);
        this.elmntGlobale = document.getElementById(elmntGlobale);
    }
    countdownGlobale() {
        if (this.timerGlobale <= 0) {
            clearTimeout(this.timerGlobale);
        }else {
            this.elmntGlobale.innerHTML = this.timerGlobale <= -1 && this.timerGlobale <= -1 + ' seconds remaining';
            this.timerGlobale--;
        }
    }
    // countdownByRoom() {
    //     if (this.timerByRoom <= -1) {
    //         clearTimeout(this.timerByRoom);
    //     }else {
    //         this.elemntByRoom.innerHTML = this.timerByRoom <= -1 && this.timerByRoom <= -1 + ' seconds remaining';
    //         this.timerByRoom--;
    //     }
    // }
}