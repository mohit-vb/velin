export default function NoteRow({ stage, notes }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row mt-4 pb-4">
      <span className="uppercase text-2xl tracking-wide opacity-50 w-30">
        {stage}
      </span>
      <span>
        {notes.map((note, i) => (
          <span key={note} className="text-2xl">
            {note}
            {i < notes.length - 1 && <span className="dot"> · </span>}
          </span>
        ))}
      </span>
    </div>
  );
}
