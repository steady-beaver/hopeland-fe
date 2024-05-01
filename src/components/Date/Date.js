import moment from 'moment';

function formatDate(inputDate) {
  const date = moment(inputDate);

  // Format the date as dd.mm.yyyy
  return date.format('DD.MM.YYYY');
}

const Date = ({ children }) => {
  return <time dateTime={children}>{formatDate(children)}</time>;
};

export default Date;
