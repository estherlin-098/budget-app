import React, { useState } from 'react';
import './App.css';
import { PictureInPictureOutlined, AssessmentOutlined, FreeBreakfastOutlined, FastfoodOutlined, RestaurantOutlined, LocalGroceryStoreOutlined, LocalPizzaOutlined, LocalBarOutlined, EmojiFoodBeverageOutlined, ShoppingBasketOutlined, LocalTaxiOutlined} from '@material-ui/icons/';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


function App() {
  const [savedItems, setSavedItems] = useState([])
  return (
    <div className="App">
      <Sidebar />
      <span className="title">
        Hello<br />Esther!
          </span>
      <Expense onSave={newItem=> {
        setSavedItems([...savedItems, newItem])
      }}/>
      <Entries items={savedItems} />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="white-bar">
      <div className="white-bar-wrapper">
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
    </div>
  );
}


function Expense({onSave}) {
  const today = new Date();
  const [number, setNumber] = useState('');
  const [category, setCategory] = useState('')

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
          <Grids onSelect={name=> {
            if(category===name){
              setCategory('')
            } else {
              setCategory(name)
            }
          }} category={category}/>
        </div>

        <button className="save-button" onClick={()=> {
          onSave({number, category})
          setNumber('')
          setCategory('')
        }} disabled={!category||!number}>
          Save
        </button>

      </div>
    </>
  );
}


function Grids({onSelect, category}) {
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
      <Grid container spacing={3} >
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4} >
            <Paper elevation={category==='Breakfast'?4:1}>
              <Button onClick={()=>onSelect('Breakfast')}>
                {<FreeBreakfastOutlined />}
                Breakfast
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper elevation={category==='Lunch'?4:1}>
              <Button onClick={()=>onSelect('Lunch')}>
                {<FastfoodOutlined />}
                Lunch
             </Button>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper elevation={category==='Dinner'?4:1}>
              <Button onClick={()=>onSelect('Dinner')}>
                {<RestaurantOutlined />}
                Dinner
              </Button>
            </Paper>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Paper elevation={category==='Snacks'?4:1}>
              <Button onClick={()=>onSelect('Snacks')}>
                {<LocalPizzaOutlined />}
                Snacks
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper elevation={category==='Grocery'?4:1}>
              <Button onClick={()=>onSelect('Grocery')}>
                {<LocalGroceryStoreOutlined />}
                Grocery
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper elevation={category==='Social'?4:1}>
              <Button onClick={()=>onSelect('Social')}>
                {<LocalBarOutlined />}
                Social
              </Button>
            </Paper>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Paper elevation={category==='Beverages'?4:1}>
              <Button onClick={()=>onSelect('Beverages')}>
                {<EmojiFoodBeverageOutlined />}
                Beverages
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper elevation={category==='Traffic'?4:1}>
              <Button onClick={()=>onSelect('Traffic')}>
                {<LocalTaxiOutlined />}
                Traffic
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper elevation={category==='Clothing'?4:1}>
              <Button onClick={()=>onSelect('Clothing')}>
                {<ShoppingBasketOutlined />}
                Clothing
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function Entries({items}) {
  const today = new Date();
  var hours = new Date().getHours()
  var min = new Date().getMinutes()

  return (
    <div className="panel entries">
      <h2 className="panel-title">
        {today.getMonth()}/{today.getDate()}<br />
        Today's Entries
    </h2>
    <div>
      {items.map(item=>{
        return <div>
          <div>{hours}:{min} {item.category} {item.number}</div>
        </div>
      })}
    </div>
    </div>
  );
}

export default App;
