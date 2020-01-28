import Intl from 'intl';

const formatToBRdate = (date: Date): string => {
  return new Intl.DateTimeFormat('pt-BR').format(date);
};

export { formatToBRdate };
