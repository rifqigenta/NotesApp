import React from "react";
import useAuth from "../../hooks/useAuth";
import ModalPostNotes from "../../layouts/Users/ModalPostNotes";

const PostNotesComponent = () => {
  return (
    <div className='flex justify-end mx-36'>
      <ModalPostNotes />
    </div>
  );
};

export default PostNotesComponent;
