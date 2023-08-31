const User = require ('./User');
const BlogPost = require('./BlogPost');
const Comments = require('./Comments');

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogPost.belongTo(User, {
    foreignKey:'user_id'
});

BlogPost.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comments.belongTo(BlogPost, {
    foreignKey: 'post_id'
});

module.exports = { User, BlogPost, Comments };