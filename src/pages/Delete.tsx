import './textField.css'
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {deleteCustomer} from "../reducers/CustomerSlice.ts";
import {deleteItem} from "../reducers/ItemSlice.ts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';

export function Delete() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const customers = useSelector((state) => state.customer);
    const items = useSelector((state) => state.item);

    // Customer states

    function handleDeleteCustomer(email) {
        if (window.confirm('Are you sure you want to delete this customer?')) {
            dispatch(deleteCustomer(email));
        }
    }

    function handleDeleteItem(id) {
        if (window.confirm('Are you sure you want to delete this item?')) {
            dispatch(deleteItem(id));
        }
    }

    return (
        <div className="bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="">
                    <table className="table-auto border border-gray-200 w-full mt-4">
                        <thead>
                        <tr>
                            <td className="custom-table-td font-medium">Name</td>
                            <td className="custom-table-td font-medium">Email</td>
                            <td className="custom-table-td font-medium">Phone</td>
                            <td className="custom-table-td font-medium">Actions</td>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteCustomer(customer.email)}
                                        className="text-red-500 flex items-center gap-1 my-5"
                                    >
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="">
                    <table className="table-auto border border-gray-200 w-full mt-4">
                        <thead>
                        <tr>
                        <td className="custom-table-td font-medium">ID</td>
                            <td className="custom-table-td font-medium">Description</td>
                            <td className="custom-table-td font-medium">Price</td>
                            <td className="custom-table-td font-medium">Quantity</td>
                            <td className="custom-table-td font-medium">Actions</td>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.item_name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteItem(item.id)}
                                        className="text-red-500 flex items-center gap-1 my-5"
                                    >
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}