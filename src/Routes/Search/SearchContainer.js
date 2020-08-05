import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
	state = {
		movieResults: null,
		tvResults: null,
		searchTerm: "",
		loading: false,
		error: null,
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { searchTerm } = this.state;
		if (searchTerm !== "") {
			this.searchByTerm();
		}
	};

	updateTerm = (event) => {
		const {
			target: { value },
		} = event;
		this.setState({
			searchTerm: value,
		});
	};
	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({ loading: true });
		try {
			console.log(searchTerm);
			const {
				data: { results: movieResults },
			} = await moviesApi.search(searchTerm);
			const {
				data: { results: tvResults },
			} = await tvApi.search(searchTerm);
			this.setState({ movieResults, tvResults });
		} catch {
			this.setState({ error: "Can't find results" });
		} finally {
			this.setState({ loading: false });
		}
	};

	render() {
		const { movieResults, tvResults, searchTerm, loading, error } = this.state;
		// console.log(this.state);
		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				error={error}
				loading={loading}
				serchTerm={searchTerm}
				handleSubmit={this.handleSubmit}
				updateTerm={this.updateTerm}
			/>
		);
	}
}
