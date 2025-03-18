const express = require('express');
const path = require('path');
const { updateSheets, getUpdateResults } = require('./uploadToSheets');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// API endpoint to run the update script
app.post('/api/update-sheets', async (req, res) => {
  try {
    // Run the update process
    await updateSheets();
    
    // Get the results of what was added
    const results = getUpdateResults();
    
    res.json({ 
      success: true, 
      message: 'Sheets updated successfully!',
      results
    });
  } catch (error) {
    console.error('Error updating sheets:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error updating sheets',
      error: error.message
    });
  }
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 