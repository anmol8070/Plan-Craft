import React, { useContext, useEffect } from 'react'
// Components
import GuestForm from '../guests/GuestForm'
import GuestCounter from '../guests/GuestCounter'
import GuestFilter from '../guests/GuestFilter'
import GuestSearch from '../guests/GuestSearch'
import Guests from '../guests/Guests'
import Grid from '@material-ui/core/Grid';
// Context
import AuthContext from '../../context/authContext/authContext';
// Styles
import styled from 'styled-components';

const StyledHome = styled.div`
  background-color: #f8f9fa;
  color: #495057;
  .sub-heading {
    border-bottom: 2px solid #dee2e6;
    color: #007bff;
  }
  .app-container {
    overflow-x: hidden;
    padding: 20px;
  }
  .main {
    padding: 20px 0;
  }
`;

const Home = () => {
  const { getUser } = useContext(AuthContext);

  useEffect(() => {
    getUser();
    //eslint-disable-next-line
  }, [])

  return (
    <StyledHome>
      <div className="app-container">
        <Grid container direction="row" justify="flex-start" alignItems="baseline" spacing={4} className="sub-heading">
          <Grid item xl={3}>
            <GuestSearch />
          </Grid>
          <Grid item xl={3}>
            <GuestFilter />
          </Grid>
        </Grid>
        <div className="main">
          <Grid container
            direction="row"
            justify="center"
            alignItems="baseline"
            spacing={4}
          >
            <Grid item md={5} xs={12}>
                <GuestCounter />
            </Grid>
            <Grid item md={5} xs={12}>
              <GuestForm />
            </Grid>
          </Grid>
        </div>
        <Guests />
      </div>
    </StyledHome>
  )
}

export default Home;
