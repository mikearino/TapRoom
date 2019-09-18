let masterKegList = [];

const kegReducer = (state = masterKegList, action) => {
  let newState;
  switch (action.type) {
    case "ADD_KEG":
      newState = masterKegList.slice();
      action.payload.formattedWaitTime = action.payload.timeOpen.fromNow(true);
      newState.push(action.payload);
      return newState;

    case "KEG_TIME":
      newState = masterKegList.slice();
      newState.forEach(
        keg => (keg.formattedWaitTime = keg.timeOpen.fromNow(true))
      );
      return newState;

    default:
      return state;
  }
};
