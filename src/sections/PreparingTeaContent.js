import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
// material
import { Box, Card, Button, Divider, CardHeader, CardContent } from '@mui/material';
import Iconify from '../components/Iconify';
import { PREPARING_TEA, MAX_PREPARING_TEA } from '../_mocks_/preparingTea';

export default function IntroductionContent() {
  const [infoIndex, setInfoIndex] = useState(0);

  const handleNextInfo = () => {
    if (infoIndex < MAX_PREPARING_TEA) {
      setInfoIndex(infoIndex + 1);
    } else {
      // need to do a router to the next page
      setInfoIndex(0);
    }
  };

  return (
    <Card>
      <CardHeader title={PREPARING_TEA[infoIndex].title} />

      <CardContent>{PREPARING_TEA[infoIndex].content}</CardContent>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          onClick={handleNextInfo}
        >
          Próxima
        </Button>
      </Box>
    </Card>
  );
}