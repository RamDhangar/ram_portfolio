// service file

import { BehaviorSubject } from "rxjs"; 

const headerRoute$ = new BehaviorSubject(null);

function getHeaderRoute() {
    return headerRoute$
}

function setHeaderRoute(route) {
    headerRoute$.next(route);
}

export {
    getHeaderRoute,
    setHeaderRoute
}