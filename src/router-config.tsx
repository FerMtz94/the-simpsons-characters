import { createRootRoute, createRoute, createRouter, Outlet, useNavigate } from "@tanstack/react-router";
import App from "./App";

const RootComponent = () => {
	return (<><Outlet /></>)
}

const rootRoute = createRootRoute({
	component: RootComponent,
	notFoundComponent: () => <div>404</div>,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: () => {
		const navigate = useNavigate();
		navigate({
			from: '/',
			to: '/characters',
			replace: true,
		});
		return <><Outlet /></>;
	},
})

const charactersRoute = createRoute({
	getParentRoute: () => indexRoute,
	path: 'characters',
	component: () => <App />
});

const routeTree = rootRoute.addChildren([indexRoute.addChildren([charactersRoute])]);
export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	scrollRestoration: true
});