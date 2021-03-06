import React, { Component } from 'react';
import PageCreator from 'pages/page_creator/page_creator';
import * as config from 'config';
import { getDemoData } from 'helpers';
import { loc } from 'texts'
import BlogPostCard from 'components/blog_post_card/blog_post_card';
import { Container } from '@material-ui/core';

export default class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const postsUrl = config.getPostsUrl();

        getDemoData(postsUrl)
            .then(json => {
                this.setState({
                    posts: json
                })
            })
    }

    renderPost(post) {
        const props = {
            key: post.title,
            title: post.title,
            content: post.body
        }

        return <BlogPostCard {...props} />
    }

    renderPosts() {
        const { posts } = this.state;

        if (!posts)
            return null;

        return posts.map(post => this.renderPost(post))
    }

    renderPlaceholder() {
        return <p>{loc('nothingToDisplay')}</p>
    }

    render() {
        return (
            <PageCreator>
                <Container fixed>
                    <h1>{loc('blogPage')}</h1>
                    <div>
                        {this.renderPosts() || this.renderPlaceholder()}
                    </div>
                </Container>
            </PageCreator>
        )
    }

}