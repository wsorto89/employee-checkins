import { makeStyles } from '@material-ui/core/styles';

const employeeCardStyles = makeStyles({
  card: {
    margin: 8,
    width: '20vw',
    '@media (max-width: 660px)': {
      width: '45vw'
    }
  },
  media: {
    height: 200
  }
});

export default employeeCardStyles;
