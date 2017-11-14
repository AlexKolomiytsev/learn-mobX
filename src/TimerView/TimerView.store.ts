import {observable, action} from "mobx";

export default class TimerViewStore {

    @observable
    public timer: number = 0;

    @action
    public resetTimer(): void {
        this.timer = 0;
    }

    @action
    public startTimer(): void {
        setInterval(() => {
            this.timer += 1;
        }, 1000)
    }

}
