import { useEffect, useState } from "react";
import { getCharacter } from "../api/character";
import type { CharacterExtended } from "../types/character";
import { useQuery } from "@tanstack/react-query";

export const useCharacter = (id: number) => {
    const [characterInfo, setCharacterInfo] = useState<CharacterExtended | null>(null);

    const { data: characterData, isLoading: isCharacterLoading } = useQuery({
        queryKey: ["character", id],
        queryFn: () => getCharacter(id),
    });

    useEffect(() => {
        if (!characterData) return;
        setCharacterInfo(characterData);
    }, [characterData])

    return {
        characterInfo,
        isCharacterLoading,
    };
}