const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Here you would typically save to a database or send an email
    // For now, just responding with success
    
    return res.status(200).json({ success: true, message: 'Message received' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
