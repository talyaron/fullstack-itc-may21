export { };

export class User {
    userName: string;
    email: string;
    password: string;
    surveys: Array<string>;

    constructor(userName, email, password, surveys) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.surveys = surveys;
    }

}
