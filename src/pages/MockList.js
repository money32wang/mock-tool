import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const MockList = () => {
    const [mockList, setMockList] = useState([]);

    useEffect(() => {
        const fetchMockList = async () => {
            try {
                const url = 'http://localhost:1080/mockserver/mocklist';
                const response = await axios.get(url);
                setMockList(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMockList();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>URL名称</TableCell>
                        <TableCell>URL内容</TableCell>
                        <TableCell>URL请求方式</TableCell>
                        <TableCell>URL请求参数</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mockList.map((mock) => (
                        <TableRow key={mock.id}>
                            <TableCell>{mock.name}</TableCell>
                            <TableCell>{mock.content}</TableCell>
                            <TableCell>{mock.method}</TableCell>
                            <TableCell>{mock.params}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MockList;
