import React, { useState } from 'react';
import { getOrders } from '__mocks__/orderMock';
import { sort, gBy } from '_modules/helpers/array';
import Tab from './tabComponent';

export default function Test(Props: any) {
	const [component, setComponent] = useState({});
	const orders = getOrders.map((obj, idx) => ({
		...obj,
		status: idx % 5 == 0 ? 'Imcompleted' : idx % 3 == 0 ? 'Pending Pickup' : 'Completed',
	}));
	const sortOrders = sort(orders, 'status');
	const grouped = gBy(sortOrders, 'status');
	const renderCompoments = {
		orders: grouped,
		sort: ['Imcompleted', 'Pending Pickup', 'Completed'],
	};
	return <Tab {...renderCompoments} />;
}
