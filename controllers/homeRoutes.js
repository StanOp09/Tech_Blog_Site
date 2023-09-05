const router = require('express').Router();
const { BlogPost, User } = require('../models');
const withAuth = require('../utils/auth');

// GET route to display all blog posts on the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    // Fetch all blog posts, including associated user data
    const blogPostData = await BlogPost.findAll({
      include: {
        model: User,
        attributes: ['name'],
      },
    });

    // Serialize the data for the template to read
    const blogPosts = blogPostData.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    // Pass the serialized data and session flag to the template
    res.render('homepage', {
      blogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get ('/login', async (req, res) => {
    res.render('login')
})
router.get ('/signup', async (req, res) => {
    res.render('/signup')
})
module.exports = router;
