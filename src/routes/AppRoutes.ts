import IPathRoute from "../core/IPathRoute";
import UserRoute from "./UserRoute";
import { Express, Router } from "express";

export default class AppRoutes {
    private routeList: IPathRoute[] = [
        {path: '/user', router: UserRoute}
    ];

    mount(expApp: Express): void {
        this.routeList.forEach( (item)=> {
            expApp.use(
                item.path,
                item.router.createRouter(Router)
            )
        })
    }
}