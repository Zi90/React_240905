import React from 'react';
import { friends } from '../data/data';
import Table from 'react-bootstrap/Table';
import './comp.css';

const Comp1 = () => {
    return (
        <div className='comp1 comp' style={{margin : '0 auto', width : '500px'}}>
            <div>친구 목록 리스트</div>
            {/* 친구 목록 표시 */}
            <div>
            <Table striped bordered hover style={{width : '100%'}}>
                <thead>
                <tr>
                    <th>name</th>
                    <th>phone</th>
                    <th>address</th>
                    <th>job</th>
                </tr>
                </thead>
                <tbody>
                {friends.map(s => (
                    <tr>
                        <td>{s.name}</td>
                        <td>{s.phone}</td>
                        <td>{s.addr}</td>
                        <td>{s.job}</td>
                    </tr>
                ))
                }
                </tbody>
            </Table>
            </div>
        </div>
    );
};
export default Comp1;