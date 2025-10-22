
import type React from 'react';
import { Box, Typography } from '@mui/material'
import { useCharacter } from '../hooks/useCharacter';
import { characterDetailRoute } from '../router-config';
import { useCanGoBack, useRouter } from '@tanstack/react-router';
import { useContext } from 'react';
import { DetailViewContext } from '../contexts/DetailViewContext';

export const CharacterDetail: React.FC = () => {
  const { id } = characterDetailRoute.useParams();
  const { characterInfo, isCharacterLoading } = useCharacter(id);
  const { updateCharacterViewOpen } = useContext(DetailViewContext);
  const router = useRouter();
  const canGoBack = useCanGoBack();

  const backToList = () => {
    router.history.back();
    updateCharacterViewOpen(false);
  }

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
        <Box>
          {
            canGoBack ? (
              <button onClick={() => backToList()}>Go Back</button>
            ) : null
          }
        </Box>
    </Box>
  )
}
