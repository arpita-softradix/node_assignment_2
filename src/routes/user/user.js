import userController from '../../controllers/user/user';
import uploadFile from '../../helpers/imageUpload';

export default class User {
  constructor(router, db) {
    this.router = router;
    this.db = db;
    this.userInstance = new userController();
  }

  async routes() {
    await this.userInstance.init(this.db);

    this.router
      .route('/user_image_upload')
      .post(uploadFile.single("file"),(req, res) => this.userInstance.userImageUpload(req, res));

   
  }
}
