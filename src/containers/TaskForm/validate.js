const validate = values => {
    const errors = {};
    const {title} = values;
    if (!title) {
        errors.title = 'Vui lòng nhập tiêu đề';
    }else if (title.trim().length < 5){
        errors.title = 'Tiêu đề phải ít nhất 5 ký tự';
    }
    return errors;
}

export default validate;