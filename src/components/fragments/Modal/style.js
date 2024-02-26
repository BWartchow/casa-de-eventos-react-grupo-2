import styled from "styled-components";

export const StyledModalTech = styled.dialog`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  border-style: none;
  border-radius: 0.25rem;
  padding: 0rem;
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  .modalAddTech {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    position: absolute;
    top: 18.75rem;
    background: var(--grey-3);
    border-radius: 0.25rem;

    .modal__header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0.75rem 1.25rem;
      gap: 0.625rem;
      width: 23.0625rem;
      height: 3.125rem;
      background: var(--grey-2);
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;

      .modal__title {
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.5rem;
        color: var(--grey-0);
      }

      .btn__close {
        height: 1.625rem;
        background: transparent;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.625rem;
        color: var(--grey-1);
      }
      .btn__close:hover {
        color: #ffffff;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      padding: 1.125rem 1.375rem 2rem 1.375rem;

      input {
        display: flex;
      }

      .save__edit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0rem 1.3959rem;
        gap: 0.6344rem;
        width: 12.75rem;
        height: 3rem;
        background: var(--color-primary-negative);
        border-style: none;
        border-radius: 0.25rem;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.625rem;
        color: #ffffff;
        cursor: pointer;
      }

      .btns__editContainer {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
      }

      .save__edit:hover {
        background: var(--color-primary);
      }

      .btn__delete {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0rem 1.3959rem;
        gap: 0.6344rem;
        width: 6.125rem;
        height: 3rem;
        background: var(--grey-1);
        border-style: none;
        border-radius: 0.25rem;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.625rem;
        color: #ffffff;
        cursor: pointer;
      }
      .btn__delete:hover {
        background: var(--grey-2);
      }

      .add__tech {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0rem 1.3959rem;
        gap: 0.6344rem;
        width: 20.25rem;
        height: 3rem;
        background: var(--color-primary);
        border-style: none;
        border-radius: 0.2538rem;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.625rem;
        color: #ffffff;
      }
      .input__container {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
