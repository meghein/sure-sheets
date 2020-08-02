import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const rightStyles = makeStyles((theme) => ({
  rightDrawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  rightDrawerPaper: {
    width: drawerWidth,
  },
  rightDrawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}));

export default rightStyles;