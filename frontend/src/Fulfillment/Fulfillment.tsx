import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Fulfillment() {
    return (
        <div className="content content-margined">
            <div className="fulfillment-header">
                <h3>fulfillment</h3>
            </div>
            <div className="fulfillment-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>USER</th>
                            <th>DELIVERED</th>
                            <th>DELIVERED AT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.fulfillment.map((fulfillment) => (
                            <tr key={fulfillment.f_id} className={fulfillment.isDelivered ? 'shipped' : 'notShipped'}>
                                
                                <td>{fulfillment.f_id}</td>
                                <td>{fulfillment.user.name}</td>
                                <td>{fulfillment.isDelivered.toString()}</td>
                                <td>{fulfillment.deliveredDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>);
};

export default Fulfillment;