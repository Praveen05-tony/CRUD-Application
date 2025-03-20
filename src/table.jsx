import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';

export default function Tablecomponent(bcd) {
    const [tableData, setTableData] = useState(null)

    useEffect(() => {
        fetch('https://67d7ed199d5e3a10152c9b14.mockapi.io/student/detail', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(tasks => {
            setTableData(tasks.reverse())
        }).catch(error => {
            console.log(error)
        })
    }, [bcd.update]);

    console.log(tableData);

    const deleteUser = (id) => {
        fetch(`https://67d7ed199d5e3a10152c9b14.mockapi.io/student/detail/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // Do something with deleted task
            alert("Deleted Successfully...!")
            bcd.setUpdate(!bcd.update)
        }).catch(error => {
            // handle error
            console.log(error)
        })
    }
    
    return (
        <>
            <Button variant="warning" onClick={()=>bcd.boxOpen()}>Add Row</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='fs-3 text-center'>S.No</th>
                        <th className='fs-3 text-center'>Name</th>
                        <th className='fs-3 text-center'>Email</th>
                        <th className='fs-3 text-center'>Phone No</th>
                        <th className='fs-3 text-center'>Qualification</th>
                        <th className='fs-3 text-center'>Location</th>
                        <th className='fs-3 text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData && tableData.map((item, out) => {
                        return (
                            <>
                                <tr>
                                    <td className='fs-5 text-center'>{out + 1}</td>
                                    <td className='fs-5 text-center'>{item.name}</td>
                                    <td className='fs-5 text-center'>{item.emailId}</td>
                                    <td className='fs-5 text-center'>{item.phoneNo}</td>
                                    <td className='fs-5 text-center'>{item.qualification}</td>
                                    <td className='fs-5 text-center'>{item.location}</td>
                                    <td className='fs-5 text-center action-btn'>
                                        <button className='bg-success text-light' onClick={() => bcd.boxOpen(item)}>Edit</button>
                                        <button className='bg-danger text-light' onClick={() => deleteUser(item.id)}>Delete</button></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}