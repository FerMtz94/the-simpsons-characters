import { createRootRoute, createRoute, createRouter, Outlet, useNavigate, useSearch } from "@tanstack/react-router";
import App from "./App";
import { CharacterDetail } from "./components/CharacterDetail";
import { useContext, useEffect } from "react";
import { DetailViewContext, DetailViewContextProvider } from "./contexts/DetailViewContext";
import { PageContext, PageContextProvider } from "./contexts/PageContext";

const RootComponent = () => {
	return (<Outlet />)
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
		const search = useSearch({ from: "/" });
		navigate({
			from: '/',
			to: '/characters',
			search: { page: search?.page < 1 ? 1 : search?.page },
			replace: true,
		});
		return (
			<PageContextProvider>
				<DetailViewContextProvider>
					<Outlet />
				</DetailViewContextProvider>
			</PageContextProvider>
		);
	},
})

const charactersRoute = createRoute({
	getParentRoute: () => indexRoute,
	path: 'characters',
	validateSearch: (search: Record<string, unknown>) => {
		return {
			page: Number(search?.page ?? 1),
		}
	},
	component: () => {
		const {isCharacterViewOpen} = useContext(DetailViewContext);
		const { updatePage } = useContext(PageContext);
		const search = useSearch({ from: "/characters" });
		
		useEffect(() => {
			if (!search?.page) return;
			updatePage(Number(search.page));
		}, [search?.page])

		return (
			<>
				{isCharacterViewOpen && <Outlet />}
				{!isCharacterViewOpen && <App />}
			</>)
	}
});

export const characterDetailRoute = createRoute({
	getParentRoute: () => charactersRoute,
	path: '$id',
	component: () => <CharacterDetail />,
})

const routeTree = rootRoute.addChildren([
	indexRoute.addChildren([
		charactersRoute.addChildren([
			characterDetailRoute]
		)
	])]
);

export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	scrollRestoration: true
});