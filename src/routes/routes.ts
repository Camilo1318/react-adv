import { LazyExoticComponent, lazy } from "react";
// import { LazyPageOne, LazyPageThree, LazyPageTwo } from "../01-lazy-load/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../01-lazy-load/pages/LazyPageOne'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/'../01-lazy-load/pages/LazyPageTwo'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/'../01-lazy-load/pages/LazyPageThree'))

export const routes: Route[] = [
    {
        to: "/lazy1",
        path: "lazy1",
        Component: Lazy1,
        name: "Lazy One"
    },
    {
        to: "/lazy2",
        path: "lazy2",
        Component: Lazy2,
        name: "Lazy Two"
    },
    {
        to: "/lazy3",
        path: "lazy3",
        Component: Lazy3,
        name: "Lazy Three"
    },
];