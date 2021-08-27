
import User from "./user/user";

export default class Routes {
    constructor(router, db) {
        this.router = router;
        this.DatabaseConnect = db;
    }

    async register() {
        /*** Front end Apis  For Version 1 ****/

        this.db = await this.DatabaseConnect.getDB();


        this.user = new User(this.router, this.db);
        await this.user.routes();


    }
}