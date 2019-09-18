export const addKeg = newKeg => {
  return {
    type: "ADD_KEG",
    payload: newKeg
  };
};

export const kegTime = () => {
  return {
    type: "KEG_TIME"
  };
};
