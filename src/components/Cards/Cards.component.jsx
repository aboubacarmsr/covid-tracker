import React from 'react'
import styles from './Cards.module.css'
import { CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'

const Cards = ({ data:  { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed) {
        return 'Chargement...';
    }

    return (  
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectés</Typography>
                        <Typography variant="h5" component="h2" 
                            style={{ fontWeight: 'bolder' }} >
                            <CountUp start={0} end={confirmed.value} duration={2.75} separator=" " />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} className={styles.card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    Guéris
                    </Typography>
                    <Typography variant="h5" component="h2"
                        style={{ fontWeight: 'bolder' }}>
                    <CountUp start={0} end={recovered.value} duration={2.75} separator=" " />
                    </Typography>
                </CardContent>
                </Grid>
                <Grid item xs={12} md={3} className={styles.card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    Morts
                    </Typography>
                    <Typography variant="h5" component="h2"
                        style={{ fontWeight: 'bolder' }}>
                    <CountUp start={0} end={deaths.value} duration={2.75} separator=" " />
                    </Typography>
                </CardContent>
                </Grid>
            </Grid> 
        </div>
    );
}
 
export default Cards;