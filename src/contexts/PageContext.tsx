import { createContext, useState, type ReactNode } from "react";

type PageContextType = {
    page: number;
    updatePage: (page: number) => void;
}

export const PageContext = createContext<PageContextType>({
    page: 1,
    updatePage: () => {},
});

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
    const [page, setPage] = useState(1);

    const updatePage = (newPage: number) => {
        setPage(newPage);
    }

    return (
        <PageContext.Provider value={{page, updatePage}}>
            {children}
        </PageContext.Provider>
    );
}