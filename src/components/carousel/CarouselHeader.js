import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginTop: '30px',
  marginLeft: '60px',
  [theme.breakpoints.down('lg')]: {
    marginLeft: '0px',
  },
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontSize: '24px',
  fontWeight: 700,
}));

export default function CarouselHeader({ text }) {
  return (
    <HeaderWrapper>
      <Box component="img" src="/images/Carousel/LineHeader.svg" />
      <HeaderText variant="h3">{text}</HeaderText>
      <Box component="img" src="/images/Carousel/HeaderArrow.svg" />
    </HeaderWrapper>
  );
}
