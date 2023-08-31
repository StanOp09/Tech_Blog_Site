const User = require ('./User');
const BlogPost = require('./BlogPost');
const Comments = require('./Comments');

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comments, {
    foreignKey: 'user_id'
})

BlogPost.belongTo(User, {
    foreignKey:'user_id'
});

BlogPost.hasMany(Comments, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
});

Comments.belongTo(User, {
    foreignKey: 'user_id'
})

Comments.belongTo(BlogPost, {
    foreignKey: 'blogpost_id'
});

module.exports = { User, BlogPost, Comments };