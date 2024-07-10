
import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DelayLoad')
export class DelayLoad extends Component {

    private _finishCallback: Function = null!;
    private _gen: Generator = null!;
    private _state: IteratorResult<unknown, any> = null!;

    public init(gen: Generator, finishCb: () => void = ()=>{}, interval = 0.01): DelayLoad {
        this._gen = gen;
        this._finishCallback = finishCb;
        this.updateFunc();
        this.schedule(this.updateFunc, interval);

        return this;
    }

    public updateFunc() {
        this._state = this._gen.next(this);
        if (this._state.done) {
            this.unscheduleAllCallbacks();
            this._finishCallback();
            return;
        }
    }

    public GetState(): IteratorResult<unknown, any> {
        return this._state;
    }

    public IsDone(): boolean {
        return !!this.GetState().done;
    }
}
