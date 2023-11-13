
const {ccclass, property} = cc._decorator;

@ccclass
export default class DelayLoad extends cc.Component {

    private _finishCallback: Function;
    private _gen: Generator;

    init(gen: Generator, finishCb: ()=>{}, interval = 0.01){
        this._gen = gen;
        this._finishCallback = finishCb;
        this.updateFunc();
        this.schedule(this.updateFunc, interval);
    }


    updateFunc(){
        let state = this._gen.next();
        if(state.done) {
            this.unscheduleAllCallbacks();
            this._finishCallback();
            return;
        }
    }
   
}

