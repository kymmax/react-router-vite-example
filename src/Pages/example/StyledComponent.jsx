import styled from 'styled-components';


// Basic
const Style = styled.h1`
    font-size: 30px;
    color: red;
`

// Based on props
const StyleProps = styled.h2`
    color: ${props => props.$primary ? "gray" : "#BF4F74"};
`

// Extending Styles
const StyleExtend = styled(StyleProps)`
    border: 1px solid red;
`

// Styling any component
const Link = ({className, children}) => (
    <a className={className}>{children}</a>
)
const StyledLink = styled(Link)`
  color: orange;
  font-weight: bold;
`

// Attr
const StyleAttr = styled.div.attrs({"data-type": "ani"})`
    background-color: orange;
    color: black;
`;


const StyledComponent = () => {

    return (
        <>
            Styled Components

            <hr />

            <Style>Style</Style>

            <hr />

            <StyleProps $primary>StyleProps</StyleProps>

            <hr />

            <StyleExtend $primary={false}>StyleExtend</StyleExtend>

            <hr />

            <Link>Link</Link>
            <br />
            <StyledLink>StyledLink</StyledLink>

            <hr />

            <StyleAttr>StyleAttr</StyleAttr>

        </>
    )
}

export default StyledComponent;