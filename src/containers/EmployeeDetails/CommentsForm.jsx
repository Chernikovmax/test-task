import React, {Component} from 'react';
import { Form, Field } from 'react-final-form';

const required = value => (value ? undefined : 'Обязательное поле');
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

const checkTheme = value =>
    (value.length >= 5 && value.length <= 80) ? undefined : 'Введите от 5-80 символов';
const checkMobNumber = value =>
    (value && /^([0-9]{10,})$/.test(value)) ? undefined : 'Номер должен состоять из 10 цифр'

export default class CommentForm extends Component {

    render() {
        const { onCommentAdded } = this.props;

        return (
            <div className="comment-form-wrapper">
                <Form
                    onSubmit={onCommentAdded}
                    render={({ handleSubmit, form, submitting }) => (
                        <form
                            onSubmit={handleSubmit}
                            className="comment-form"
                        >
                            <section className="comment-form__inputs-wrapper">
                                <Field name="title" validate={composeValidators(required, checkTheme)}>
                                    {({ input, meta }) => (
                                        <div className="input-wrapper">
                                            <input {...input}
                                                type="text"
                                                placeholder="Тема комментария:"
                                                className="comment-form__theme-input"
                                            />
                                            {meta.error && meta.touched && <span className="comment-form__requirements">{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="phone" validate={composeValidators(required, checkMobNumber)}>
                                    {({ input, meta }) => (
                                        <div className="input-wrapper">
                                            <input {...input}
                                                type="tel"
                                                placeholder="Моб. № (без +7):"
                                                className="comment-form__phone-input"
                                            />
                                            {meta.error && meta.touched && <span className="comment-form__requirements">{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="text" validate={required}>
                                    {({ input, meta }) => (
                                        <div className="input-wrapper">
                                            <textarea {...input}
                                                name="comment-text"
                                                className="comment-form__text-input"
                                                placeholder="Ваш комментарий:"
                                            />
                                            {meta.error && meta.touched && <span className="comment-form__requirements">{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            </section>
                            <button
                                disabled={submitting}
                                className="comment-form__submit-btn"
                            >
                                Разместить
                            </button>
                        </form>
                    )}
                />
            </div>
        );
    }
}
