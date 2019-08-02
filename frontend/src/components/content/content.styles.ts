import { makeStyles } from '@material-ui/core/styles';

const contentStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});

export default contentStyles;
