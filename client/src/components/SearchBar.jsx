import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar () {
    return (
        <TextField
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <IconButton >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}

export default SearchBar;