// 
// Action Type
// 
export const SET_MODAL_CONTENT = "SET_MODAL_CONTENT";

// Action creator
export function setModalContent(modalContent) {
    return {
        type: SET_MODAL_CONTENT,
        modalContent
    }
}