const initState = {
    projects: [
        { id: '1', title: 'YOLO', content: 'yolo rolo' },
        { id: '2', title: 'YAGNI', content: 'yagni fagni' },
        { id: '3', title: 'LAMP', content: 'lamp ramp' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
    }
    return state;
};

export default projectReducer;