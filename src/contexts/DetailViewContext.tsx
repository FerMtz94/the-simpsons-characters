import { createContext, useState, type ReactNode } from "react";

type DetailViewContextType = {
    isCharacterViewOpen: boolean;
    updateCharacterViewOpen: (isOpen: boolean) => void;
};

export const DetailViewContext = createContext<DetailViewContextType>({
    isCharacterViewOpen: false,
    updateCharacterViewOpen: () => {},
});

export const DetailViewContextProvider = ({ children }: { children: ReactNode }) => {
    const [isCharacterViewOpen, setIsCharacterViewOpen] = useState(false);

    const updateCharacterViewOpen = (isOpen: boolean) => {
        setIsCharacterViewOpen(isOpen);
    }

    return (
        <DetailViewContext.Provider value={{isCharacterViewOpen, updateCharacterViewOpen}}>
            {children}
        </DetailViewContext.Provider>
    );

}