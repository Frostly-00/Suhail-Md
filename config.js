const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="pelumifrost@gmail.com"
global.location="Lagos, Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Abuja";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/message/64KBVNWDMXWQJ1";
global.website=process.env.GURL || "https://wa.me/message/64KBVNWDMXWQJ1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078595608";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_30_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MixcbiAgICAgICAgMTEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNixcbiAgICAgICAgMTEzLFxuICAgICAgICA0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYxLFxuICAgICAgICA5MixcbiAgICAgICAgMCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDU5LFxuICAgICAgICA5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUzLFxuICAgICAgICA0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicjhYelM1QXRkRWdocVJDdFBjRVp5eUg0ZWxyeExEYjc4U3ZRY25YUGVBST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDc4NTk1NjA4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQ0Q1M0MwNzQxRjgzREIyQzRCNDhCNEMzQ0RCNThENVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5NDUwNTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTmlZZGp3ajRUaksyNWlaTENHeXhlZ1wiLFxuICBcInBob25lSWRcIjogXCI1MTZkOGIxMi05MTgyLTRlOTctYjBiMi00NzdiMjUxZmU2M2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg1LFxuICAgICAgODEsXG4gICAgICA5NSxcbiAgICAgIDE1NSxcbiAgICAgIDE2OCxcbiAgICAgIDk5LFxuICAgICAgOSxcbiAgICAgIDE2MixcbiAgICAgIDI0MyxcbiAgICAgIDExNCxcbiAgICAgIDYzLFxuICAgICAgNzUsXG4gICAgICA0MCxcbiAgICAgIDIwMSxcbiAgICAgIDkyLFxuICAgICAgMTA4LFxuICAgICAgMjQ1LFxuICAgICAgMTY4LFxuICAgICAgMTA2LFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMjE3LFxuICAgICAgMTEyLFxuICAgICAgMTg2LFxuICAgICAgMjI2LFxuICAgICAgMjQ4LFxuICAgICAgMTk4LFxuICAgICAgMTI2LFxuICAgICAgMjM5LFxuICAgICAgMjE1LFxuICAgICAgMTY4LFxuICAgICAgMTgsXG4gICAgICAzLFxuICAgICAgMTM2LFxuICAgICAgMTQ1LFxuICAgICAgMTA0LFxuICAgICAgNjcsXG4gICAgICAxMDAsXG4gICAgICAxMzIsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4ODRCMUhYRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA3ODU5NTYwODoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBlbHVtaSBGcm9zdFwiLFxuICAgIFwibGlkXCI6IFwiMjY4ODY1Mzg4OTc4MjkwOjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01ENStxd0dFTmVPa2JRR0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTDhWTWRHT2VMRkh0d3R5RWhiNE5YWHFMSWFueUZIRXFxejdqQ0J5K1NXbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1bjg1TmlpV0NpZlhIdjAvMVpYMmVacUsxemtTUHZraDhTOGtJNUlUT0JUL1FYRHpPMjU5aFRoSW0vWWJKRG5qMlpMTU1IalMrVnBrSHhiWlo5b1ZEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhMVhIRXV3eW80cHUwVENTSnhoNDNhaDNuRkU2ZXh3VDlhYWNQRHgrVjNscXJOVkdYUEg1T2xVWms4OGIwS0QxVFZ0L1BxMVV5QUhtOEpkYm9FcHNBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc4NTk1NjA4OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTQ1MDUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVFPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUU8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4QnJqWVZ5MnFYNytXUEpQMjB6ZUhmcDcxdzE2Y3BhejhZUEZ2dVEyT1dzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDQ5MDE4MjQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Frosby_Bot",
  ownername:process.env.OWNER_NAME|| "Frost",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "Untitled API Key (2024-07-03 07:53:02)",
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
