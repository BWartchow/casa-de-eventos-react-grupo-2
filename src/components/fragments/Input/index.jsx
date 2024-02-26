import { forwardRef } from "react";
import { StyledInput } from "./style";

export const Input = forwardRef(({ id, label, ...rest }, ref) => {
  return (
    <StyledInput>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input id={id} ref={ref} {...rest} />
    </StyledInput>
  );
});
