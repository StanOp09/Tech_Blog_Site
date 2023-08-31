const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = require('./userData.json');
const blogPostData = require('./blogPostData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogPost of blogPostData) {
    const createdBlogPost = await BlogPost.create({
      ...blogPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });

    for (const comment of commentsData) {
      await Comment.create({
        ...comment,
        user_id: users[Math.floor(Math.random() * users.length)].id,
        blogpost_id: createdBlogPost.id,
      });
    }
  }

  process.exit(0);
};

seedDatabase();
