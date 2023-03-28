const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @desc    about/Landing page
// @route   GET /
router.get('/', (req, res) => {
  res.render('home');
});

// @desc    about/Landing page
// @route   GET /
router.get('/dashboard', ensureGuest, (req, res) => {
  res.render('dashboard');
});

// // @desc    Login page
// // @route   GET /
// router.get('/login', (req, res) => {
//   res.render('login', {
//     layout: 'simple',
//   });
// });

// // @desc    Signup page
// // @route   GET /
// router.get('/signup', ensureGuest, (req, res) => {
//   res.render('signup', {
//     layout: 'simple',
//   });
// });

// @desc    appointment page
// @route   GET /
router.get('/appointment', ensureGuest, (req, res) => {
  res.render('appointment', {
    layout: 'simple',
  });
});

// @desc    contact page
// @route   GET /
router.get('/contact', ensureGuest, (req, res) => {
  res.render('contact', {
    layout: 'simple',
  });
});

// @desc    doctors page
// @route   GET /
router.get('/doctors', ensureGuest, (req, res) => {
  res.render('doctors', {
    layout: 'simple',
  });
});

// @desc    faq page
// @route   GET /
router.get('/faq', ensureGuest, (req, res) => {
  res.render('faq');
});

// @desc    why page
// @route   GET /
router.get('/why', ensureGuest, (req, res) => {
  res.render('why');
});

module.exports = router;
