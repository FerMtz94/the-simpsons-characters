
import type React from 'react';
import { Box, Typography } from '@mui/material'
import { useCharacter } from '../hooks/useCharacter';

type CharacterDetailProps = {
  id: number;
}

export const CharacterDetail: React.FC<CharacterDetailProps> = ({ id }) => {
  const { characterInfo, isCharacterLoading } = useCharacter(id);

  if (isCharacterLoading) {
    return <Typography variant="body1">Loading...</Typography>;
  }

  if (!characterInfo && !isCharacterLoading) {
    return <Typography variant="body1">No character data found.</Typography>;
  }

  return (
    <Box component="article">
        <Typography variant="h2">{characterInfo!.name}</Typography>
        <Typography variant="body1">
            {characterInfo!.description}
        </Typography>
    </Box>
  )
}
