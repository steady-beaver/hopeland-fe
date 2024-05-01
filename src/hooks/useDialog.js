import { useRef } from 'react';

const useDialog = (initialContent) => {
  const dialogRef = useRef();

  function toggle() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current?.hasAttribute('open') ? dialogRef.current.close() : dialogRef.current?.showModal();
  }

  const modal = (
    <dialog
      ref={dialogRef}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          toggle();
        }
      }}
    >
      {initialContent}
    </dialog>
  );

  return { modal, toggle };
};

export default useDialog;
