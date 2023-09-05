const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = require('./userData.json');
const blogPostData = require('./blogPostData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create specific users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Create specific blog posts with assigned users
  for (const blogPost of blogPostData) {
    const assignedUser = users.find((user) => user.name === blogPost.user_name);

    if (assignedUser) {
      await BlogPost.create({
        ...blogPost,
        user_id: assignedUser.id,
      });
    }
  }

  // Create specific comments with assigned users and blog post IDs
  for (const comment of commentsData) {
    const assignedUser = users.find((user) => user.name === comment.user_name);
    const assignedBlogPost = blogPostData.find((blogPost) => blogPost.title === comment.blogpost_title);

    if (assignedUser && assignedBlogPost) {
      await Comment.create({
        ...comment,
        user_id: assignedUser.id,
        blogpost_id: assignedBlogPost.id,
      });
    }
  }

  process.exit(0);
};

seedDatabase();
