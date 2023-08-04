import React from 'react';
import Editor from './Editor';
import MockList from '../pages/MockList';

const ComponentFactory = (componentName) => {
    switch (componentName) {
        case 'Editor':
            return <Editor />;
        case 'MockList':
            return <MockList />;
        default:
            return null;
    }
};

export default ComponentFactory;
