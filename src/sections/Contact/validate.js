export const validate = (values) => {
    const errors = {}
    const name = values.name;
    const subject = values.subject;
    const email = values.email;
    const message = values.message;

    const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!emailPattern.test(email)) {
        errors.email = 'Please enter a valid e-mail';
    }
    if (!email) {
        errors.email = 'An e-mail is required';
    }

    if (!/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g.test(name)) {
        errors.name = 'Your name can only contain letters'
    }

    if (!name) {
        errors.name = 'Your name is required';
    }

    if (!subject) {
        errors.subject = 'A subject is required';
    }

    if (!message) {
        errors.message = 'A message is required';
    }
    return errors;
}