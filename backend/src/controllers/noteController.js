export function index(request, response) {
    response.status(200).send('Notes fetched successfully!');
}

export function show(request, response) {
    const noteId = request.params.id;
    response.status(200).send(`Note with ID ${noteId} fetched successfully!`);
}

export function store(request, response) {
    response.status(201).send('Note created successfully!');
}

export function update(request, response) {
    const noteId = request.params.id;
    response.status(200).send(`Note with ID ${noteId} updated successfully!`);
}

export function destroy(request, response) {
    const noteId = request.params.id;
    response.status(200).send(`Note with ID ${noteId} deleted successfully!`);
}