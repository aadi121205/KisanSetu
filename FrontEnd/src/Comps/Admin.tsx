import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const AdminDashboard: React.FC = () => {
    return (
        <Admin dataProvider={dataProvider}>
        </Admin>
    );
};

export default AdminDashboard;