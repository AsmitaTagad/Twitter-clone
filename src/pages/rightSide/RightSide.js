import React from 'react';
import {Grid,Item} from '@mui/styled-engine-sc';
import Searchbar from './component/Searchbar';
import WhatHapping from '../../components/whatHapping/WhatHapping';

export default function RightSide(){
    return (
    <div>
   <section>
    <Grid item xs={3}>
        <Item>
            <Searchbar/>
        </Item>
    </Grid>
    <Grid item xs={4}>
        <Item>
           <WhatHapping/>
        </Item>
    </Grid>
    <Grid item xs={4}>
        <Item>
        Section -3
        </Item>
    </Grid>
   </section>
    </div>
    )
}
