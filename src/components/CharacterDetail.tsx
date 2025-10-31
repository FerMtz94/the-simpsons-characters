
import type React from 'react';
import { Box, Button, Typography } from '@mui/material'
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
      <Box component="header" className="app-title">
        <Typography variant="h2">{characterInfo!.name}</Typography>
      </Box>
      <Box component="section" className="text-container">
        <Typography variant="body1" className="text-paragraph">
            {characterInfo!.description}
        </Typography>
      </Box>
      {
        canGoBack ? (
          <Box className="centered-button-container">
            <Button variant="contained" color="primary" onClick={() => backToList()}>Go Back</Button>
          </Box>
        ) : null
      }
    </Box>
  )
}
