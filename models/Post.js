const db = require('../utils/db');

class Post {
  constructor(title, content, image_link, user_id) {
    this.title = title;
    this.content = content;
    this.image_link = image_link;
    this.user_id = user_id;
  }
  static getAll() {
    return db.execute('select * from posts');
  }
  static getOne(id) {
    return db.execute('select * from posts where id = ?', [id]);
  }
  save() {
    return db.execute(
        `   insert into posts
            (title,content,image_link,user_id)
            values (?,?,?,?)`,
      [this.title, this.content, this.image_link, this.user_id]
    );
  }
  remove(id){
      return db.execute("delete from users where id = ?",[id])
  }
}
module.exports=Post
