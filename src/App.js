import React, { useState, useStyles } from 'react';
import './App.css';
import { PictureInPictureOutlined, AssessmentOutlined,FreeBreakfastOutlined,FastfoodOutlined,RestaurantOutlined,LocalGroceryStoreOutlined,LocalPizzaOutlined,LocalBarOutlined,EmojiFoodBeverageOutlined,ShoppingBasketOutlined,LocalTaxiOutlined} from '@material-ui/icons/';
import TextField from '@material-ui/core/TextField';
import grid from '@material-ui/core/grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

function App() {


  return (
    <div className="App">
      <Sidebar />
      <span className="title">
        Hello<br />Esther!
          </span>
      <Expense />
      <Entries />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="white-bar">
      <div className="icon1" color="#CD3B20" >
        {<PictureInPictureOutlined size={40} />}
        <h4 className="sidebar-text" > 
        Calendar
        </h4>
      </div>
      <div className="icon2" color="#CD3B20">
        {<AssessmentOutlined size={40} />}
        <h4 className="sidebar-text">
        Report
        </h4>
      </div>
    </div>
  );
}


function Expense() {
  const today = new Date();
  const [number, setNumber] = useState('');
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  return (
    <>
      <div className="panel expenses">
        <h2 className="panel-title">
          {today.getMonth()}/{today.getDate()}<br />
          Today's Expenses
        </h2>

        <div className="input-wrap">
          <h2> USD </h2>
          <TextField variant="outlined"
            input value={number} className="number-input"
            label="$"
            type="number"
            value={number}
            onChange={e => setNumber(e.target.value)} //e = event, capture the input, fat arrow - that's a function
          />
        </div>

        <div className="category">
          <h3 className="category-title" align="left">
            Category
          </h3>

        <Grid container spacing={4} >
          <Grid container item xs={12} spacing={3} className="breakfast">
            <Grid item xs={4} >
              <Paper>
                <Button>
                  {<FreeBreakfastOutlined/>}
                  Breakfast
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper>
                <Button>
                  {<FastfoodOutlined/>}
                  Lunch
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper>
                <Button>
                  {<RestaurantOutlined/>}
                  Dinner
                </Button>
              </Paper>
            </Grid>
          </Grid>
          
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <Paper>
                <Button>
                  {<LocalPizzaOutlined/>}
                  Snacks
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper>
                <Button>
                  {<LocalGroceryStoreOutlined/>}
                  Grocery
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper>
                <Button>
                  {<LocalBarOutlined/>}
                  Social
                </Button>
              </Paper>
            </Grid>
          </Grid>
         
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <Paper>
                <Button>
                  {<EmojiFoodBeverageOutlined/>}
                  Beverages
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper>
                <Button>
                {<LocalTaxiOutlined/>}
                Traffic
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper>
                <Button>
                  {<ShoppingBasketOutlined/>}
                  Clothing
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        </div>
      </div>
    </>
  );
}

function Entries() {
  const today = new Date();

  return (
    <div className="panel entries">
      <h2 className="panel-title">
        {today.getMonth()}/{today.getDate()}<br />
        Today's Entries
    </h2>
    </div>
  );
}

export default App;
