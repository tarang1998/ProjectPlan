export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Tarang',
            authorLastName: 'Nair',
            authorId: 9757,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
        }).catch(err => {
            console.log(err)
            dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
        });
    }
};