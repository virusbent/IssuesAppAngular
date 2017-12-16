import {UIRouter} from "@uirouter/angular";
import {Injector, Injectable} from "@angular/core";

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {

    console.log("# UI-Router config file initialized!");


    // If no URL matches, go to the `hello` state by default
    router.urlService.rules.otherwise({ state: 'home' });
}
