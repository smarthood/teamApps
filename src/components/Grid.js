import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResponsiveDateTimePickers from './DateTimePicker';
// For dropdown 'From' and 'To'
// import CustomSelect from './Select';  
import { Select } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>FROM</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>TO</Item>
        </Grid>

        <Grid item xs={6}>
          <Item><Select/></Item>
        </Grid><Grid item xs={6}>
          <Item><Select/></Item>
        </Grid>
        <Grid item xs={12}>
          <Item><ResponsiveDateTimePickers>Pick Date and Time</ResponsiveDateTimePickers></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
