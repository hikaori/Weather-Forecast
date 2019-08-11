import React, { Component } from 'react';
import { Button, Input } from '../components';
import { SearchAreaSection } from '../components/SectionStyle';

class SearchSection extends Component {
  render() {
    return (
      <SearchAreaSection>
        <Input />
        <Button>Search</Button>
      </SearchAreaSection>
    );
  }
}
export default SearchSection;
