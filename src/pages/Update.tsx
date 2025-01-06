import {useState} from "react";
import './textField.css'
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updateCustomer} from "../reducers/CustomerSlice.ts";
import {updateItem} from "../reducers/ItemSlice.ts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export function Update() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const customers = useSelector((state) => state.customer);
    const items = useSelector((state) => state.item);

    // Customer states
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Item states
    const [selectedItem, setSelectedItem] = useState(null);
    const [item_name, setItem_name] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    function handleSelectCustomer(customer) {
        setSelectedCustomer(customer);
        setName(customer.name);
        setEmail(customer.email);
        setPhone(customer.phone);
    }

    function handleCustomerSubmit() {
        if (selectedCustomer) {
            const updatedCustomer = { name, phone };
            dispatch(updateCustomer({ email: selectedCustomer.email, updatedCustomer }));
            setSelectedCustomer(null);
        }
    }

    function handleSelectItem(item) {
        setSelectedItem(item);
        setItem_name(item.item_name);
        setPrice(item.price);
        setQuantity(item.quantity);
    }

    function handleItemSubmit() {
        if (selectedItem) {
            const updatedItem = { item_name, price, quantity };
            dispatch(updateItem({id: selectedItem.id, updatedItem}));
            setSelectedItem(null);
        }
    }

    return (
        <div className="bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6">
                    <h2 className="text-xl font-bold">Customer List</h2>
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
                                        onClick={() => handleSelectCustomer(customer)}
                                        className="text-indigo-600 flex items-center gap-1 my-5"
                                    >
                                        <FontAwesomeIcon icon={faEdit}/> Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {selectedCustomer && (
                        <div className="mt-20">
                            <h3 className="text-lg font-semibold mb-5">Update Customer</h3>
                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="text-filed"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    readOnly
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="text-filed"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="text-filed"
                                />
                                <button onClick={handleCustomerSubmit} className="button-field mt-5">
                                    Update Customer
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-6">
                    <h2 className="text-xl font-bold">Items List</h2>
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
                                        onClick={() => handleSelectItem(item)}
                                        className="text-indigo-600 flex items-center gap-1 my-5"
                                    >
                                        <FontAwesomeIcon icon={faEdit}/> Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {selectedItem && (
                        <div className="mt-20">
                            <h3 className="text-lg font-semibold mb-5">Update Item</h3>
                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={item_name}
                                    onChange={(e) => setItem_name(e.target.value)}
                                    className="text-filed"
                                />
                                <input
                                    type="text"
                                    placeholder="Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="text-filed"
                                />
                                <input
                                    type="text"
                                    placeholder="Quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className="text-filed"
                                />
                                <button onClick={handleItemSubmit} className="button-field mt-5">
                                    Update Item
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}