import { lazy, LazyExoticComponent } from "react";
import { NotLazy } from "../lazyload/pages";

type JSXComponent = () => JSX.Element

interface RouteProps {
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  path: string;
  to: string;
}


const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/'../lazyload/layout/LazyLayout'))


export const routes: RouteProps[] = [
  {
    Component: LazyLayout,
    name: 'LazyLayout - Dashboard',
    path: '/lazyload/*',
    to: '/lazyload/',
  },
  {
    Component: NotLazy,
    name: 'No Lazy LAyout',
    path: 'no-lazy',
    to: '/no-lazy',
  }
];