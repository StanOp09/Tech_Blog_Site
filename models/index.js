const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comments'); // Corrected the import name

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});

BlogPost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(BlogPost, {
    foreignKey: 'blogpost_id'
});

module.exports = { User, BlogPost, Comment }; // Corrected the export name
