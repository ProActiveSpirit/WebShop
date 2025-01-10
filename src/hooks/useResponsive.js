// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

export default function useResponsive(query, breakpoint) {
  const theme = useTheme();

  if (query === 'up') {
    return useMediaQuery(`@media (min-width: ${breakpoint}px)`);
  }

  return null;
}

// ----------------------------------------------------------------------

export function useWidth() {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
