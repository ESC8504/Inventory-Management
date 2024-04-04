import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar ({ onSearch }) {

    const SEARCH_FILTER_START_NUM = 3;

    const handleChange = (e) => {
        const { value } = e.target;
        // 3 or more then start the search
        if (value.length >= SEARCH_FILTER_START_NUM) {
          onSearch(value);
        } else {
          onSearch('');
        }
      };

    return (
        <TextField
            onChange={handleChange}
            size="small"
            placeholder="Search by name..."
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}

export default SearchBar;