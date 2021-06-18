import styled from "styled-components";

export const BrandLogoCSS = styled.div`

.single-brand a{
    width: 100%;
    img{
        width: 100%;
        transition: all 300ms ease-in;
    transform: scale3d(1.01, 1.01, 1.01);
    display: inline-block;
    }
}

.single-brand:hover img {
    transition: all 300ms ease-in;
    transform: scale3d(1.1, 1.1, 1.1);
}
`;