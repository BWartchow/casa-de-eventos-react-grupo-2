import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  margin-bottom: 1.875rem;
  width: 100%;

  label {
    font-weight: 400;
    font-size: 0.7614rem;
    line-height: 0rem;
    color: var(--grey-0);
  }
  input {
    height: 2.4063rem;
    background: var(--grey-2);
    border: 0 none;
    border-radius: 0.2005rem;
    color: var(--grey-0);
    padding-left: 1rem;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    border: 0.0611rem solid var(--grey-0);
    color: var(--grey-0);
    outline: 0;
  }

  @media screen and (min-width: 1024px) {
    input {
      height: 3rem;
    }
  }
`;
