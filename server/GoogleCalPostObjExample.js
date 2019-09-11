// These are all the objects needed to pass to POST in order to post on David's calendar
// nothing else besides what I commented on needs to be changed

{
  "summary": "firstName lastName",//Update to add user full name
  "location": "1301 Oak St, Kansas City, MO 64106",
  "description": "Phone Call or Office Consultation",//Switch between phone call or office consultation
  "start": {
    "dateTime": "2019-07-29T09:00:00-07:00",//update to reflect the start time
    "timeZone": "America/Chicago"
  },
  "end": {
    "dateTime": "2019-07-29T17:00:00-07:00",//update to reflect the start time
    "timeZone": "America/Chicago"
  },
  "recurrence": [
    "RRULE:FREQ=DAILY;COUNT=1"
  ],
  "attendees": [
    {"email": "dgsuited@gmail.com"}
  ],
  "reminders": {
    "useDefault": false,
    "overrides": [
      {"method": "email", "minutes": 1440},
      {"method": "popup", "minutes": 10}
    ]
  }
}