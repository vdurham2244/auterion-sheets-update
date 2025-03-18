# Auterion Sheets Sync

A simple web application that syncs Auterion flight and vehicle data to Google Sheets.

## Features

- Syncs flight data from Auterion to Google Sheets
- Syncs vehicle data from Auterion to Google Sheets 
- Updates detailed vehicle information
- Shows summary of what was added during sync

## Prerequisites

- Node.js (v14 or higher)
- Google Service Account with Sheets API access
- Auterion API Token

## Setup

1. Clone this repository:
   ```
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your Auterion API token:
   ```
   AUTERION_API_TOKEN=your_api_token_here
   ```

4. Add your Google service account credentials:
   - Save your service account JSON file as `google-service-account.json` in the root directory

5. Update the Google Sheet ID:
   - Open `uploadToSheets.js` and update the `SHEET_ID` constant with your Google Sheet ID

## Running Locally

To run the application locally:

```
npm start
```

For development with auto-reload:

```
npm run dev
```

Then open your browser to `http://localhost:3000`

## Deployment to GitHub Pages

Since this application requires server-side code to interact with the Google Sheets API and Auterion API, you'll need to deploy both a backend and frontend:

### Option 1: Deploy to a Cloud Service (recommended)

1. Deploy to a service that supports Node.js applications, such as:
   - [Heroku](https://heroku.com)
   - [Vercel](https://vercel.com)
   - [Render](https://render.com)
   - [Railway](https://railway.app)

Follow their respective deployment guides for Node.js applications.

### Option 2: Serverless Deployment

1. Refactor the backend into serverless functions:
   - AWS Lambda + API Gateway
   - Vercel Serverless Functions
   - Netlify Functions

### GitHub Pages Configuration (for frontend only)

If you separate frontend and backend:

1. Build a static frontend version
2. Configure your backend URL in the frontend code
3. Deploy the frontend to GitHub Pages

## Security Considerations

- Never commit your .env file or service account JSON to version control
- Set up proper CORS restrictions on your backend
- Consider adding authentication to your app if deploying publicly

## License

[MIT](LICENSE) 