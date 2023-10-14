module.exports = class UserDto {
    email
    id_user
    isActivated
    role

    constructor(model) {
        this.email = model.email
        this.id_user = model.id_user
        this.is_activated = model.is_activated
        this.role = model.role
    }
}