import { Box, Grid } from '@mui/material';
import Label from '../../../../components/label';


export default function InfoBar() {
    return (
        <Box sx={{ height: 38, bgcolor: '#666666', width: '100%' }} >
            <Box sx={{ 
                height: 28, 
                width: '100%',
                maxWidth: 1322,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                paddingTop: '10px'
                }} >
                <Grid container spacing={2}>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Box component="img" src="/images/Navbar/Authorize.svg" sx={{ height: 20}} />
                        <Label sx={{ color: 'white', bgcolor: 'transparent' }}>Geautoriseerde online winkel sinds 2017</Label>
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box component="img" src="/images/Navbar/Publishers.svg" sx={{ height: 20 }} />
                        <Label sx={{ color: 'white', bgcolor: 'transparent' }}>200+ uitgevers</Label>
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Box component="img" src="/images/Navbar/Games.svg" sx={{ height: 20}} />
                        <Label sx={{ color: 'white', bgcolor: 'transparent' }}>4.000+ officieel gelicentieerde games</Label>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}