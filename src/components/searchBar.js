import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

import { withRouter } from 'reactor-router-dom';

class SearchBar extends Component {

    handleFormSubmit = function ({query}) {
        this.props.onSubmit(query);
    }

    renderInput(field) {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }

    render() {
        const {hendleSubmit} = this.props;

        return (
            <form className="search-bar" on Submit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput} />
            </form>
        )
    }
}

SearchBar = reduxForm({
    form: "searchbar"
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;