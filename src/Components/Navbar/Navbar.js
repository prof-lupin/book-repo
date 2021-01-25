import React,{useCallback} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartTwoTone from "@material-ui/icons/ShoppingCartTwoTone";
import logo from '../../assets/favicon-32x32.png';
import {useStyles} from './styles';

export default function Navigation(props) {
  const { onSearch} = props;
  const classes = useStyles();

  const onSearchBlur = useCallback(event =>{
      const query = event.target.value;
      onSearch(query);
  },[ onSearch]);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="" />
          <Typography className={classes.title} variant="h6" noWrap>
            Book Repo
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onBlur= {onSearchBlur}
              
            />
          </div>
          <div className={classes.grow} />
          <div>
            <IconButton color="inherit">
                <ShoppingCartTwoTone />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}