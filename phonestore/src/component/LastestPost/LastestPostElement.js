import styled from "styled-components";

export const LastestPostCSS = styled.div`
margin-top: 50px;

.slick-slide{
    padding: 0 10px;
}

.single_blog {
    display: block;
    overflow: hidden;
    margin-top: 35px;

}

.single_blog .blog_thumb {
    float: left;
    display: block;
    width: 35%;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .single_blog .blog_thumb {
        width: 42%;
    }
}

@media only screen and (max-width: 767px) {
    .single_blog .blog_thumb {
        width: 41%;
        margin-right: 15px;
    }
}

@media only screen and (max-width: 479px) {
    .single_blog .blog_thumb {
        width: 100%;
        float: none;
        margin-bottom: 15px;
    }
}

.single_blog .blog_content {
    width: 60%;
    margin-left: 25px;
    float: right;
    .date_post{
        margin-top: 15px;
        margin-bottom: 15px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .single_blog .blog_content {
        width: 55%;
        float: left;
        margin-left: 10px;
    }
    .single_blog .blog_content .date_post {
        margin-top: 8px;
        margin-bottom: 8px;
    }
}

@media only screen and (max-width: 767px) {
    .single_blog .blog_content {
        width: 55%;
        float: left;
        margin-left: 0px;
    }
    .single_blog .blog_content .date_post {
        margin-top: 10px;
        margin-bottom: 10px;
    }
}

@media only screen and (max-width: 479px) {
    .single_blog .blog_content {
        width: 100%;
        float: none;
        margin: 0px;
    }
}

.single_testimonial{
    margin-top: 35px;
}

.single_testimonial p {
    margin-bottom: 20px;
}

.single_testimonial img {
    border: 2px solid #408ed4;
    border-radius: 100%;
    display: initial !important;
}

.single_testimonial span {
    display: block;
    margin-top: 10px;
}

.single_testimonial span.name {
    font-size: 16px;
    font-weight: 900;
    color: #408ed4;
}

.single_testimonial .rating span {
    display: inline-block;
}

@media only screen and (max-width: 991px) {
    .blog-post-carousel {
        margin-bottom: 30px;
    }
}

@media only screen and (max-width: 479px) {
    .blog-post-container {
        max-width: 300px;
        width: 100%;
        margin: 0 auto;
    }
}
`