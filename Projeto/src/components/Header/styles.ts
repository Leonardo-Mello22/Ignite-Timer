import styled from "styled-components";

export const HeaderContainer = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
  }

    nav {
      display: flex;
      gap: 0.5rem;

      a {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${props => props.theme.gray500};

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        transition: border-color 0.2s, color 0.2s;

        &:hover {
            border-bottom: 3px solid ${props => props.theme.blue300};
        }

        &.active {
            color: ${props => props.theme.blue300};
        }
      }   
}
`;