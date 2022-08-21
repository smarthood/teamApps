import React, { Component } from 'react'
import SearchAppBar from './components/SearchAppBar';
import BasicGrid from './components/Grid';
import { Box, Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      
      <SearchAppBar/>
      <Container sx={{justifyContent:'center', p:8}}>
      <BasicGrid />
      <Grid sx={{p:8}} container justifyContent={'center'}>
      <Button size="large" type="submit" variant="contained">Submit</Button>

      </Grid>
      
      </Container>
      
    </div>
  );
}

export default App;
