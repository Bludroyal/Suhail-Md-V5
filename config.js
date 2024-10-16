const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "AFRICA/GHANA";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ☯︎ᴇᴍᴍ ʏʏ✌︎💨" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347053192517";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_22_09_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDksXG4gICAgICAgIDM4LFxuICAgICAgICA1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MCxcbiAgICAgICAgODksXG4gICAgICAgIDkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIwLFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDM4LFxuICAgICAgICA2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxLFxuICAgICAgICAxODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDUzLFxuICAgICAgICA0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDY5LFxuICAgICAgICA5NyxcbiAgICAgICAgMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid0loQzdNTkVrSWVxUCtqeEd4T2JUbEFrR045RFJXRXVFb2tnWE15amtnTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS3MtLXlGeDBTV08zcGJhdDA1dXdfZ1wiLFxuICBcInBob25lSWRcIjogXCJhMjg4NzA3OC00MWNmLTQ1MjUtYWExMy1kMTEzMWQxYmVhYzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxNCxcbiAgICAgIDIxNSxcbiAgICAgIDQ0LFxuICAgICAgMTYxLFxuICAgICAgMTA1LFxuICAgICAgMTUsXG4gICAgICAyMjMsXG4gICAgICAzLFxuICAgICAgMTM1LFxuICAgICAgNixcbiAgICAgIDM3LFxuICAgICAgMTcxLFxuICAgICAgMzcsXG4gICAgICAxODksXG4gICAgICAyMCxcbiAgICAgIDE2NSxcbiAgICAgIDIyNSxcbiAgICAgIDIwNCxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICA2OSxcbiAgICAgIDQzLFxuICAgICAgMjgsXG4gICAgICAxMzEsXG4gICAgICAxOTgsXG4gICAgICA2MyxcbiAgICAgIDEwMCxcbiAgICAgIDE3OCxcbiAgICAgIDYxLFxuICAgICAgMTM0LFxuICAgICAgMTMsXG4gICAgICAyMDksXG4gICAgICA3MyxcbiAgICAgIDkzLFxuICAgICAgODIsXG4gICAgICAxMTcsXG4gICAgICAxMDAsXG4gICAgICA2MSxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpEN0NHNUNBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDUzMTkyNTE3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNzcyOTU5MjIwNTM1NDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04yamdMOEJFSy9oNWJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSzE1NE54NVYyRk9zN0VESXRkNUFpMDFUa2dTMFRMb2l1U2V0bWpDMlZWTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSa2RhTnpFSUZtTjFJZDlReExoOXhwOFVtemxZZFlQVXV2TERYMTcxY0ZmZGlmU0x0aGYvdURJNk4zOTVybVBOV3VpOG5xU0NHcTF2MC9NQ3JtRzhEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIZE1LTnZQR1JqaHg2UGNMWm5Ec0krZlVkaDNwSEhUWktZSUpLeSsyZS9ZQWdyS3V1TEUyWkxMd21rNWNSaUpuWmlPeTZOeStnZXI5eWs3UmlUbVZqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDUzMTkyNTE3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc2MjMzNDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ☯︎ᴇᴍᴍ ʏʏ✌︎💨 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  ownername:process.env.OWNER_NAME|| "☯︎ᴇᴍᴍ ʏʏ✌︎💨",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
