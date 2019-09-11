const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const apiKey = 'AIzaSyBHz8gbi56Xuvbd9GPaPC9OUDm9hnLNGeY';


// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

function init(googleObj: any, response:any) {
  authorize(googleObj, listEvents, response);
}

//KONOU ATTEMPT
function initPost(googleObjPost: any, response:any, eventObject: any) {
  authorize(googleObjPost, postEvents, response, eventObject);
}//END OF KONOU ATTEMPT

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials: any, callback: any, response: any, eventObject?: any) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);
      console.log('Authorized', credentials);

  fs.readFile(TOKEN_PATH, (err: any, token: any) => {
    if (err) {
      console.log(err);
      return getAccessToken(oAuth2Client, callback, response, eventObject)
    };

    oAuth2Client.setCredentials(JSON.parse(token));
    console.log(2);
    callback(oAuth2Client, response, eventObject);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client: any, callback: any, response: any, eventObject: any) {
  console.log('get access token')
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code: any) => {
    rl.close();
    oAuth2Client.getToken(code, (err: any, token: any) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err: any) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client, response, eventObject);
    });
  });
}

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listEvents(auth: any, response: any) {
  const calendar = google.calendar({version: 'v3', auth});

  calendar.events.list({
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 100,
    singleEvents: true,
    orderBy: 'startTime',
  }, (err: any, res: any) => {
    if (err) return console.log('The API returned an error: ' + err);

    const events = res.data.items;

    response.send(events);
  });

  // return calendar;
}




function postEvents(auth: any, response: any, eventObject: any) {
  const calendar = google.calendar({version: 'v3', auth});

  calendar.events.insert({
    auth: auth,
    calendarId: 'primary',
    resource: eventObject,
  }, function(err: any, event: any) {
    if (err) {
      console.log('There was an error contacting the Calendar service: ' + err);
      return;
    }
    response.send(event)
    console.log('Event created: %s', event.htmlLink);
  });
}
//END OF KONOU ATTEMPT

export {
  init,
  initPost
};