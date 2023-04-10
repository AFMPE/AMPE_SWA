import { Routes, Router, RouterModule } from "@angular/router";
import { MainModule } from "./main/main.module";

const routes: Routes = [
    {path: "", component: MainModule}
]

export const routing = RouterModule.forRoot(routes);