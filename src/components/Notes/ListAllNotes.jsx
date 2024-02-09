import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import TableNotes from "../../layouts/Users/TableNotes";
import axios from "../../services/axios";
import ModalPostNotes from "../../layouts/Users/ModalPostNotes";
import ModalPutNotes from "../../layouts/Users/ModalPutNotes";
import SwalDeleteNotes from "../../styles/ui/SwalDeleteNotes";

const ALL_NOTES = "/notes/";

const headers = [
  {
    note_id: "ID",
    user_name: "Username",
    title: "Title",
    note: "Note",
    action: "Action",
  },
];

const ListAllNotes = () => {
  const { auth } = useAuth();

  const [notes, setNotes] = useState([]);
  const [header, setHeader] = useState(headers);

  const { access_token } = auth;

  const getAllNotes = async () => {
    try {
      const response = await axios.get(ALL_NOTES, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      });
      const detailNotes = response.data.notes.map((i) => ({
        note_id: i.note_id,
        user_name: i.user_name,
        title: i.title,
        note: i.note,
        action: (
          <div className='flex gap-2'>
            <div>
              <ModalPutNotes getAllNotes={getAllNotes} note_id={i.note_id} />
            </div>
            <div>
              <SwalDeleteNotes getAllNotes={getAllNotes} note_id={i.note_id} />
            </div>
          </div>
        ),
      }));
      setNotes(detailNotes);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllNotes();
  }, []);
  return (
    <>
      <div className='flex justify-end'>
        <ModalPostNotes getAllNotes={getAllNotes} />
      </div>
      <div className='max-h-[50vh] overflow-y-scroll'>
        {notes.length === 0 ? (
          <div className='mt-12'>
            <p className='text-center text-neutral-content'>Notes Empty</p>
            <p className='text-center text-[24px]'>There are no notes yet.</p>
          </div>
        ) : (
          notes.map((note) => (
            <details className='collapse collapse-arrow mb-8 bg-base-200 border border-accent'>
              <summary className='collapse-title text-xl font-medium'>{note.title}</summary>
              <TableNotes data={[note]} header={header} />
            </details>
          ))
        )}
      </div>
    </>
  );
};

export default ListAllNotes;
