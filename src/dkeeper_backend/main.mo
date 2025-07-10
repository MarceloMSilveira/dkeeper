import List "mo:base/List";
import Debug "mo:base/Debug";
import Bool "mo:base/Bool";

actor DKeeper {
  
  public type Note = {
    id: Text;
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  public func createNote(idText: Text, titleText: Text, contentText: Text) {

    let newNote: Note = {
      id = idText;
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);
    Debug.print(debug_show(notes));
  };

  public query func readNotes() : async [Note] {
    return List.toArray(notes);
  };

  public func removeNote(id : Text) : async [Note] {
    notes := List.filter<Note>(notes, func(note) {note.id != id});
    return List.toArray(notes);
  };

  public func clearNotes() : async () {
    notes := List.nil<Note>();
    Debug.print(debug_show(notes));
  }

};
