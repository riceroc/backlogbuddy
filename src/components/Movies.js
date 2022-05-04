import React, { Component, Fragment } from 'react'

export default class Movies extends Component {
    state = { movies: [] };

    componentDidMount() {
        this.setState({
            movies: [
                {id: 1, title: "The Dark Knight", runtime: 153},
            ]
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Movie Backlog</h2>

                <ul>
                    {this.state.movies.map( (m) =>(
                        <li key={m.id}>
                            {m.title}
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}