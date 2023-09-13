
let notes=[];

const createNote = () => {

    function Notes (header, content) {
        this.header=header;
        this.content=content;
    }

    const newNote = new Notes (header,content);
    notes.push(newNote);
}
