import React, { Component } from 'react';
import PageCreator from '@pages/page_creator/page_creator';
import { getPostsDemoData } from '@helpers';
import BlogPostCard from '@components/blog_post_card/blog_post_card';
import Grid from '@material-ui/core/Grid';


export default class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        getPostsDemoData()
            .then(json => {
                this.setState({
                    posts: json
                })
            })
    }

    renderPost(post) {
        const props = {
            title: post.title,
            content: post.body
        }

        return (
            <Grid container spacing={8} className='Grid'>
                <Grid item xs={4} sm={4} md={4} lg={3}>
                    <Grid container justify='center'>
                        <BlogPostCard {...props} />
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    renderPosts() {
        const { posts } = this.state;
        return posts.map(post => this.renderPost(post));
    }

    render() {
        return (
            <PageCreator>
                <h1>BLOG PAGE</h1>
                <div>
                    {this.renderPosts()}
                </div>
            </PageCreator>
        )
    }

}