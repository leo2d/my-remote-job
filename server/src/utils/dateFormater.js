import Intl from 'intl';

const formatToBRdate = date => {
  return new Intl.DateTimeFormat('pt-BR').format(date);
};

export { formatToBRdate };
