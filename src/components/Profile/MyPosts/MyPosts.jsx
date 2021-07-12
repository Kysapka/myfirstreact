import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import {Field, Form, Formik} from "formik";
import {Textarea} from "../../common/FormsControl/Textarea";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}  />);

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <Formik
                initialValues={{newPostText: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.newPostText) {
                        errors.newPostText = 'Enter you message please';
                    }
                    if (values.newPostText.length > 20) {
                        errors.newPostText = 'Max 20 symbols';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    onAddPost(values);
                    setSubmitting(false);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className={s.postsBlock}>
                            <div>
                                <h3>My posts</h3>
                                <div>
                                    <Field
                                        className={(errors.newPostText && touched.newPostText && errors.newPostText) ? s.fielderror : ""}
                                        type="textarea"
                                        name="newPostText"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.newPostText}
                                    />
                                </div>
                                <span className={s.error}> {errors.newPostText && touched.newPostText && errors.newPostText}</span>
                                <div>
                                    <button type="submit" disabled={isSubmitting}>
                                        Add Post
                                    </button>
                                </div>
                            </div>
                            <div className={s.posts}>
                                {postsElement}
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default MyPosts;