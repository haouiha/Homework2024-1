const getCurrentTimeZone = () => {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

  return timeZone;
};

export default getCurrentTimeZone;
