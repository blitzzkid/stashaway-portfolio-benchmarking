export const msciWorldEtf = msciApiData => {
  const data = [];
  Object.entries(msciApiData.history).forEach(([key, value]) =>
    data.push({ x: new Date(key), y: Number(value.close) })
  );
  return data;
};
