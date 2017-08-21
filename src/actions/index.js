// Every action will be passed to a reducer -> the reducer will create a new state that we are passing into it
// The view is calling an action and the action



export const selectDonation = (donationId) => {
  return {
    type : 'SELECT_DONATION',
    selectedId : donationId
  };
};

export const noDonationSelected = () => {
  return {
    type : 'SELECTED_PERSON',
  };
};
