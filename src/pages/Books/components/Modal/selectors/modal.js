import { createSelector } from "reselect";

const deleteModalStateSelector = (state) => state.deleteModal;
const createModalStateSelector = (state) => state.createModal;
const updateModalStateSelector = (state) => state.updateModal;



export const deleteModalSelector = createSelector(
  deleteModalStateSelector,
  (deleteModal) => {
    return {
      deleteOpen: deleteModal.open,
      deleteLoading: deleteModal.loading,
      deketeError: deleteModal.error,
    };
  }
);

export const createModalSelector = createSelector(
  createModalStateSelector,
  (createModal) => {
    return {
      open: createModal.open,
      loading: createModal.loadingModal,
      error: createModal.errorModal,
    };
  }
);

export const updateModalSelector = createSelector(
  updateModalStateSelector,
  (updateModal) => {
    return {
      updateOpen: updateModal.open,
      updateLoading: updateModal.loading,
      updateError: updateModal.error,
    };
  }
);

// export const deleteModalIdSelector = createSelector(
//     deleteModalStateSelector,
//     (deleteModal) => deleteModal.deleteId
// );

// export const deleteModalLoadingSelector = createSelector(
//     deleteModalStateSelector,
//     (deleteModal) => deleteModal.loadingModal
// );

// export const deleteModalErrorSelector = createSelector(
//     deleteModalStateSelector,
//     (deleteModal) => deleteModal.errorModal
// );
