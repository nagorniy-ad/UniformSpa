class FieldMapper {
    static getDisplayName(propertyName) {
        switch (propertyName) {
            case 'name':
                return 'Имя';
            case 'sex':
                return 'Пол';
            case 'story':
                return 'О себе';
            case 'age':
                return 'Возраст';
            case 'hobbies':
                return 'Увлечения';
            default:
                return propertyName;
        }
    }
}

export default FieldMapper;