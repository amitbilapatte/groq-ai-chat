import { InputAdornment, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import InputTheme from "./theme";

function Input(props) {
  const handleInputChange = (event) => {
    // Prevent negative values for number type
    if (props.type === "number") {
      const newValue = Math.max(0, parseFloat(event.target.value) || 0);
      event.target.value = newValue;
    }
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <ThemeProvider theme={InputTheme()}>
      <TextField
        autoComplete="off"
        InputProps={{
          endAdornment: props.endIcon && <InputAdornment position="end">{props.endIcon}</InputAdornment>,
          name: props.name,
          onChange: props.type === "number" ? handleInputChange : props.onChange,
          startAdornment: props.startIcon && <InputAdornment position="start">{props.startIcon}</InputAdornment>,
          type: props.type,
          defaultValue: props.type === "number" ? 0 : "",
          inputProps: {
            min: props.type === "number" ? 0 : undefined,
            readOnly: props.readOnly,
          },
          id: props.id,
          sx: props.sx,
        }}
        multiline={props.multiline}
        rows={props.rows}
        placeholder={props.placeholder}
        required={props.required}
        size="small"
        value={props.value}
        variant="outlined"
      />
    </ThemeProvider>
  );
}

export default Input;
