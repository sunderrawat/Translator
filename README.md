# Translator
NodeJs backend app for translate one language from another language. 
This app is auto detect the input text language and translate as of users choice language

# Run this project

Step 1: Clone the master branch

Step 2: run the mongodb server in local or on server then change the usl in src/db/mongoose.js

Step 3: google cloud translation api json file sended by email to download into local computer and run this file from command

 a) For linux or mac
 
 export GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH" 
 
  eg. export GOOGLE_APPLICATION_CREDENTIALS="/home/sunder/Downloads/translator-323309-80f39d54ec80.json"
  
  b) For windows users
  
  For powershell
  
  $env:GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
  
  For command prompt
  
  set GOOGLE_APPLICATION_CREDENTIALS=KEY_PATH
  
  eg. $env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"
  
  For more details  https://cloud.google.com/translate/docs/setup#linux-or-macos
  
 Step 4: npm install
 
 step 5: npm start
 
 Note:: Only run this commands(run application) in terminal where GOOGLE_APPLICATION_CREDENTIALS export command run because this is only valid for current session
 because this is for security reasons.
  
# POST request for translating text
API Endpoint for translation
# "/api/translate" POST method
body data : JSON format of two values of target and text :: {"target": "targetLanguage", "text": "user input text"}
eg. {"target": "hi", "text": "how are you"}

to see supported languages to translate text is # https://cloud.google.com/translate/docs/languages

eg: some popular target language code is 

Hindi: 'hi'

Kannada: 'kn'

Tamil: 'ta'

Telugu: 'te'


