import { Action } from "redux";
import { ActionsObservable } from "redux-observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/scan";

const internalActions = [];

export class TsyncObservable extends ActionsObservable<Action> {
  public lift(operator) {
    const observable = new TsyncObservable(this);
    observable.operator = operator;
    return observable;
  }

  // TODO: finish this :)
  // private filterInternalActions(): ActionsObservable<Action> {
  //   return this.filter((action) => !internalActions.includes(action));
  // }

  // waitUntilReady(isReady: () => boolean) {
  //   return this
  //     .scan((acc, action) => {

  //       // TODO: acc
  //       return action;
  //     })
  //     .filterInternalActions;
  // }

}
