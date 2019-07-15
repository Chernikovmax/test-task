import React, { Component } from 'react';
import CommentForm from './CommentsForm';
import './Comments.css';

export class Comments extends Component {
    render() {
        const { comments, onCommentAdded } = this.props;

        return (
            <div>
                <div className="comments">
                    <h2 className="comments__title">Комментарии</h2>
                    {comments.map(comment =>
                        <section key={`${comment.phone}-${Date.now}`} className="comment">
                            <section className="comment__header">
                                <section className="comment__theme">Тема сообщения: {comment.title}</section>
                                <section className="header">Тел: +7-{comment.phone}</section>
                            </section>
                            <p className="comment__text">{comment.text}</p>
                        </section>
                    )}
                </div>
                <CommentForm onCommentAdded={onCommentAdded} />
            </div>
        );

    }
}