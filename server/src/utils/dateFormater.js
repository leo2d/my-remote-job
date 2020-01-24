const formatToBRdate = date => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const dateString = date.toLocaleDateString('pt-BR', options);
  const splitedDate = dateString.split('/');

  return `${splitedDate[1]}/${splitedDate[0]}/${splitedDate[2]}`;
};

export { formatToBRdate };
