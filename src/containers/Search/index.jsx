import React from "react";
import SearchHeader from "../../components/SearchHeader";
import SearchList from "./subpage/List.jsx";

class Search extends React.Component {
  render() {
    console.log(this.props);
    const params = this.props.match.params;
    console.log(params);
    return (
      <div>
        <SearchHeader keyword={params.keyword} />
        <SearchList keyword={params.keyword} category={params.category} />
      </div>
    );
  }
}

export default Search;
