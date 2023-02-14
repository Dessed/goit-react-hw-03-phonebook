import styled from 'styled-components';

export const DIV = styled.div`
    width: min-content;
    margin-left: 30px;
`;

export const InputField = styled.form`
    width: 1000px;
    border: black solid 2px;
`;
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const Name = styled.span`
    font-size: 40px;
    font-weight: 500;
`;

export const Input = styled.input`
       width: 400px;
       height: 50px;
       margin: 20px 0;
       padding: 10px;
       font-size: 30px;
`;

export const User = styled.li`
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const H1 = styled.h1`
    font-size: 70px;
`;

export const H2 = styled.h1`
    font-size: 60px;
`;

export const Button = styled.button`
    width: fit-content;
    font-size: 30px;
    font-weight: 500;
    margin: 20px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    :hover {
        background-color: blue;
    }
`;

