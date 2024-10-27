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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_04_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDY4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTksXG4gICAgICAgIDYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NixcbiAgICAgICAgMTk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA0MixcbiAgICAgICAgOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgMTg5LFxuICAgICAgICA3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc4LFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI5LFxuICAgICAgICA3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic3V1YUk4YzNISDd4QURRRkRUaGlPRHBVNjNRR2pEZTZZMGUxNjFQR3JSdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVzJpUEZGeERRR3FDN1pCVm1hSkJ0Z1wiLFxuICBcInBob25lSWRcIjogXCI3Mzk2NTE0Yy1lZGRmLTQ1MDItOTNiMC1lYTQ0OGRkMjczYTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTQyLFxuICAgICAgMjU1LFxuICAgICAgNjcsXG4gICAgICA0MCxcbiAgICAgIDE5OCxcbiAgICAgIDI1MSxcbiAgICAgIDExNixcbiAgICAgIDEyMixcbiAgICAgIDcyLFxuICAgICAgMzIsXG4gICAgICAxMDYsXG4gICAgICAyMTIsXG4gICAgICA0MixcbiAgICAgIDExNixcbiAgICAgIDUsXG4gICAgICAxNDIsXG4gICAgICAyOCxcbiAgICAgIDQ5LFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MSxcbiAgICAgIDMwLFxuICAgICAgMTY4LFxuICAgICAgNDIsXG4gICAgICAxNDgsXG4gICAgICAyMTQsXG4gICAgICA2MSxcbiAgICAgIDEwOCxcbiAgICAgIDU2LFxuICAgICAgODksXG4gICAgICAxMDcsXG4gICAgICAxNTUsXG4gICAgICA3NixcbiAgICAgIDE3NCxcbiAgICAgIDg3LFxuICAgICAgOTUsXG4gICAgICA5LFxuICAgICAgMTE2LFxuICAgICAgMjMsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUQVJUSzFOTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2NDcxODExMzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNoaW5lXCIsXG4gICAgXCJsaWRcIjogXCIxOTE4MjIzODMwNTg5NDk6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTE9sMy9VR0VOYjArTGdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRN25zOHNqaGdHWk9hcmZZQ1Ztdk93dnZYQTdRR2swb09wV3psZEN4ZGpRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9FbzJzZ2Q0Q2c1VUh4ZXVwZnB3ZWlzVy82WlduYkZ6OG5CTmVMK0l5R2N2UVBxZkVTTlMyb2MxR2JrMFZqMGV6SkFScUptQ3BWY1MvQnl6Y3B5bUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJ1cEtwcjVxbVJuZFhZYVN3VFE4dWE1bFdPdW4zdnJ6b2tlQUFGMTloTmlEaXlHdWtUK3Y4WlZHbE94YzcvcGhsWnNxZksvUEppdHU5dWFFMnpsYWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjQ3MTgxMTM6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMDM0MjY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFgxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMWDEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJENWt3U0RIYU9tQVBPZUY0eHVac0xKdU8rZEhoUWtOakx4SzdsTWd5LzZZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NTc1NDA3ODYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
