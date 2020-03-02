import React, { useState } from "react";
import { Grid, Dropdown, Segment, Input, Button } from "semantic-ui-react";

const options = [
  { key: "newest", text: "Newest", value: "newest" },
  { key: "relevance", text: "Relevance", value: "relevance" }
];

const Search = ({ onSubmit, handleOptionChange }) => {
  const [searchText, setSearchText] = useState("aws");
  const [option, setOption] = useState("relevance");

  const optionChange = (e, { value }) => {
    //alert(value);
    setOption(value);
    handleOptionChange(value);
    //alert(option);
  };

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(searchText);
        }}
      >
        <Grid columns='equal'>
          <Grid.Column width={10}>
            <Input
              fluid
              icon='search'
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              placeholder='Search Books...'
            />
          </Grid.Column>
          <Grid.Column>
            <Dropdown
              onChange={optionChange}
              options={options}
              value={option}
              selection
            />
          </Grid.Column>
          <Grid.Column>
            <Button content='Search' type='Submit' primary />
          </Grid.Column>
        </Grid>
      </form>
    </>
  );
};

export default Search;
