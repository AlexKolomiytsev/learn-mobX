import * as React from 'react';
import { observer } from "mobx-react";

import TimerViewStore from './TimerView.store'

interface ITimerViewProps {

}

@observer
class TimerView extends React.Component<ITimerViewProps, TimerViewStore> {
    private _model: TimerViewStore;

    constructor(props: ITimerViewProps) {
        super(props);

        this._onReset = this._onReset.bind(this);
    }

    public componentWillMount(): void {
        this._model = new TimerViewStore();
    }

    public componentDidMount(): void {
        this._model.startTimer();
    }

    public render(): JSX.Element {
        const { timer } = this._model;

        return (
            <div className='TimerView'>
                <button onClick={this._onReset}>
                    Seconds passed: {timer}
                </button>
            </div>
        )
    }

    private _onReset() {
        this._model.resetTimer()
    }
}

export default TimerView;