document.addEventListener('DOMContentLoaded', () => {
    const updateButton = document.getElementById('updateButton');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const results = document.getElementById('results');
    const flightsResult = document.getElementById('flightsResult');
    const vehiclesResult = document.getElementById('vehiclesResult');
    const detailsResult = document.getElementById('detailsResult');
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');

    updateButton.addEventListener('click', async () => {
        // Reset UI
        results.classList.add('hidden');
        errorMessage.classList.add('hidden');
        
        // Show loading indicator
        loadingIndicator.classList.remove('hidden');
        updateButton.disabled = true;
        
        try {
            // Call the API to update sheets
            const response = await fetch('/api/update-sheets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Unknown error occurred');
            }
            
            // Update the results display
            if (data.results) {
                const { flights, vehicles, vehicleDetails } = data.results;
                
                flightsResult.textContent = flights.added > 0 
                    ? `Added ${flights.added} new flights (out of ${flights.total} total flights)` 
                    : 'No new flights added';
                
                vehiclesResult.textContent = vehicles.added > 0 
                    ? `Added ${vehicles.added} new vehicles (out of ${vehicles.total} total vehicles)` 
                    : 'No new vehicles added';
                
                detailsResult.textContent = `Updated details for ${vehicleDetails.total} vehicles`;
            }
            
            // Show results
            results.classList.remove('hidden');
            
        } catch (error) {
            // Show error message
            errorText.textContent = error.message || 'Failed to update sheets';
            errorMessage.classList.remove('hidden');
            console.error('Error:', error);
        } finally {
            // Hide loading indicator
            loadingIndicator.classList.add('hidden');
            updateButton.disabled = false;
        }
    });
}); 