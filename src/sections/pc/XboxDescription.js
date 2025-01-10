import { Box, Grid, Typography } from '@mui/material';

const XboxDescription = () => {
  return (
    <Box
      sx={{
        maxWidth: '1200px',
        width: { xs: 'calc(100% - 60px)', lg: '1200px' },
        margin: '30px auto',
        padding: { xs: '20px', sm: '30px', md: '40px' },
        bgcolor: '#434343',
        borderRadius: { xs: '10px', sm: '15px', md: '20px' },
      }}
    >
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography
              component="h4"
              sx={{
                fontSize: { xs: '16px', sm: '17px', md: '18px' },
                marginBottom: { xs: '10px', sm: '12px', md: '15px' },
                color: '#FFFFFF',
              }}
            >
              Xbox
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.6,
                color: '#FFFFFF',
              }}
            >
              Op zoek naar Xbox Giftkaartjes of Xbox Live Gold kaartjes? Dan ben je bij Dreamgame
              aan het juiste adres! Wil je bijvoorbeeld iets kopen in de Xbox Live Marketplace maar
              heb je geen creditcard? Dan is een Xbox Gift card ideaal voor jou! Deze bestel je bij
              ons gewoon met iDeal en heb je binnen 5 minuten op je mail, je hoeft dus nooit lang te
              wachten. Wil je graag online gamen op de Xbox, dan heb je een Xbox Live Kaart nodig.
              Ook deze versturen wij direct na aankoop waardoor je meteen al je favoriete spellen
              online kan spelen!
            </Typography>

            <Typography
              component="h4"
              sx={{
                fontSize: { xs: '16px', sm: '17px', md: '18px' },
                marginBottom: { xs: '10px', sm: '12px', md: '15px' },
                color: '#FFFFFF',
                marginTop: { xs: '10px', sm: '15px', md: '20px' },
              }}
            >
              Wat is een Xbox Gift card?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.6,
                color: '#FFFFFF',
              }}
            >
              Een Xbox Gift card is in te wisselen voor tegoed dat je in de Xbox Live Marketplace
              uit kan geven aan verschillende games, muziek en software. Een Xbox Gift Card kost
              nooit meer dan de waarde van het tegoed, zo betaal je dus nooit teveel! Je kunt bij
              ons al een Xbox Gift Card ter waarde van €5,- kopen. Wil je echter meer tegoed op je
              account dan kun je ook giftcards kopen ter waarde van 25, 50 of zelfs 75 euro. Je kunt
              het dus zo gek maken als je zelf wilt! Meteen een Xbox Gift Card Kopen?
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box>
            <Typography
              component="h4"
              sx={{
                fontSize: { xs: '16px', sm: '17px', md: '18px' },
                marginBottom: { xs: '10px', sm: '12px', md: '15px' },
                color: '#FFFFFF',
              }}
            >
              Wat is een Xbox Live Gold Kaart?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.6,
                color: '#FFFFFF',
              }}
            >
              Een Xbox Live Gold kaart heb je nodig als je online spellen wilt spelen via de Xbox.
              De kosten van een Xbox Live Gold Kaart hangen af van hoe lang je online wilt spelen.
              Zo kun je ervoor kiezen om een kaart voor drie maanden te kopen, of meteen voor een
              heel jaar. Het grote voordeel aan een Xbox Live Gold kaart is dat na het aflopen van
              de kaart het abonnement automatisch stopt, zo betaal je dus nooit teveel! Meteen een
              Xbox Live Gold card kopen?
            </Typography>

            <Typography
              component="h4"
              sx={{
                fontSize: { xs: '16px', sm: '17px', md: '18px' },
                marginBottom: { xs: '10px', sm: '12px', md: '15px' },
                color: '#FFFFFF',
                marginTop: { xs: '10px', sm: '15px', md: '20px' },
              }}
            >
              Waarom Xbox Kaarten kopen bij Dreamgame?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.6,
                color: '#FFFFFF',
              }}
            >
              Wij zijn een officiële en erkende verkoper van Xbox kaarten, deze kopen we
              rechtstreeks in bij de uitgever. Hierdoor weet je zeker dat je een werkende en
              officiële code koopt. Daarnaast bieden wij tevens een uitstekende klantenservice en
              24/7 bestelmogelijkheid. Natuurlijk niet onbelangrijk: codes staan binnen 5 minuten op
              je mail! Hulp nodig bij het activeren van een Xbox kaart?
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default XboxDescription;
