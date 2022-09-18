import { GlobalStyle } from '../../GlobalStyle';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  TriggerButton,
  Popover,
  Container,
  Options,
  Option,
  SearchBox,
  SearchInput,
} from './Filter.styled';
import { FaChevronDown } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

export const Filter = ({ isOpen = false, searchable = false, options }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(isOpen);
  return (
    <Container>
      <GlobalStyle />
      <TriggerButton
        type="button"
        onClick={() => setIsPopoverOpen(state => !state)}
      >
        Выбрано: 0 <FaChevronDown />
      </TriggerButton>
      {isPopoverOpen && (
        <Popover>
          {searchable && (
            <SearchBox>
              <SearchInput type="text" name="searchbox" />
              <HiX />
            </SearchBox>
          )}
          <Options>
            {options.map(({ value, label }) => (
              <Option key={value}>
                <input type="checkbox" name="option" value={value} />
                {label}
              </Option>
            ))}
          </Options>
        </Popover>
      )}
    </Container>
  );
};

Filter.propTypes = {
  isOpen: PropTypes.bool,
  searchable: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
