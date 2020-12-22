import React, { useRef } from "react";

export const Store = React.createContext(null);

const StoreProvider = ({ children }) => {
	const titleRef = useRef();

	const handleScroll = (e) => {
		console.log(e.offset.y);
	};

	const value = { titleRef, handleScroll };

	return <Store.Provider value={value}>{children}</Store.Provider>;
};

export default StoreProvider;
