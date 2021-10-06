import Container from "@material-ui/core/Container";
import Phones from "./components/Phones";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createUseStyles } from 'react-jss'

function App() {
  const useStyles = createUseStyles({
    AppContainer: {
      padding: '0px !important'
    }
  });
  const classes = useStyles();

  return (
    <Container className={classes.AppContainer}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">
            Phones
          </Typography>
        </Toolbar>
      </AppBar>
      <Phones></Phones>
    </Container>
  );
}

export default App;
