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
            <div className="centering-wrapper">
                <div className="comments-form-wrapper">
                    <span className="comments-form-title">Оставьте комментарий</span>
                    <Form
                        onSubmit={onCommentAdded}
                        render={({ handleSubmit, form, submitting }) => (
                            <form
                                onSubmit={handleSubmit}
                                className="comments-form"
                            >
                                <section className="comments-form__inputs-wrapper">
                                    <Field name="title" validate={composeValidators(required, checkTheme)}>
                                        {({ input, meta }) => (
                                            <div className="input-wrapper">
                                                <span className="input-title">Тема комментария:</span>
                                                <input {...input}
                                                    type="text"
                                                    className={`comments-form__theme-input ${meta.error && meta.touched && "comments-form__input--reqiured"}`}
                                                />
                                                {meta.error && meta.touched && <span className="comments-form__requirements">{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="phone" validate={composeValidators(required, checkMobNumber)}>
                                        {({ input, meta }) => (
                                            <div className="input-wrapper">
                                                <span className="input-title">Номер мобильного телефона (без 8):</span>
                                                <input {...input}
                                                    type="tel"
                                                    className={`comments-form__phone-input ${meta.error && meta.touched && "comments-form__input--reqiured"}`}
                                                />
                                                {meta.error && meta.touched && <span className="comments-form__requirements">{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="text" validate={required}>
                                        {({ input, meta }) => (
                                            <div className="input-wrapper">
                                                <span className="input-title">Текст комментария:</span>
                                                <textarea {...input}
                                                    name="comment-text"
                                                    className={`comments-form__text-input ${meta.error && meta.touched && "comments-form__input--reqiured"}`}
                                                />
                                                {meta.error && meta.touched && <span className="comments-form__requirements">{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </section>
                                <button
                                    disabled={submitting}
                                    className="comments-form__submit-btn"
                                >
                                    Разместить
                            </button>
                            </form>
                        )}
                    />
                </div>
            </div>
        );
    }
}
