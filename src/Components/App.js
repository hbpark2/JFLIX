import React from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
import Scrollbar from "react-smooth-scrollbar";
import { HashRouter } from "react-router-dom";

const App = () => {
	const handleScroll = (e) => {
		const title_ = document.querySelectorAll(".title_ref");

		if (title_) {
			title_.forEach((el) => {
				// console.log(el.offsetTop);
				// console.log(e.offset.y);
				if (el.offsetTop - 500 < e.offset.y) {
					el.style.opacity = "1";
					el.style.top = "0";
				} else {
					el.style.opacity = "0";
					el.style.top = "-50px";
				}
			});
		}
	};

	return (
		<Scrollbar
			style={{ height: "100vh" }}
			damping={0.1}
			onScroll={handleScroll}
		>
			<HashRouter>
				<Router />
			</HashRouter>
			<GlobalStyles />
		</Scrollbar>
	);
};

export default App;
