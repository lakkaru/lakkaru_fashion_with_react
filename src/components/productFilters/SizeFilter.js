import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

export default function SizeFilter({
  sizes,
  handleSizeOnChange
  
}) {
  

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }}>Size</Typography>
      <FormGroup>
        {sizes.map((val, key) => {
          return (
            <FormControlLabel
              sx={{ color: "#808080" }}
              key={key}
              control={<Checkbox name={val} onChange={handleSizeOnChange} sx={{color:'black',  '&.Mui-checked': {
                color: '#6A5ACD',
              },}}/>}
              label={val.toUpperCase()}
              // onSelect={handleSelect}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
}
