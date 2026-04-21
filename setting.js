const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With KIRA-MD Hear
SESSION_ID: process.env.SESSION_ID || "KIRA-MD~H4sIAAAAAAAAA72VWW+jSBDHv0u/Yo25aSxFWm4fgfi2yWofMDSHOd00YDLyd1/hJJPR7uxMVlotT00fVb9/dVX1V1CUSY0WqAeTr6DCSesRNAxJXyEwAWoThgiDEQg84oEJyLW66JJDiI+WLuT9OIblglTN8XwK2+WBtcs23GlPT+dTlj6A2whUzSlL/J8YpNuddJriZ5fRn3mKmQcZap0US37ocr1o0fuD0xYzujH2g8HBopfgpIiMKkY5wl62QP3SS/Dn8PlHo+0z2vBOZyRD76geuAuP+D39aIjrnPdV/yy9tIrM05/EX7jFTrp07byGalLGneuMe5fy7UCqi/TqZvtIMOa5aq5S/xW/TqICBbMAFSQh/afjjpSmq8Wzq6E11UXJLlMwWoe5Wcz7jUW3lG3DRx52JLTsz4GvQ3s8S68Sq222JvIL/ZkmsUY5dWdQK+i7xiqFsbWhrMT+HnyJ33Ml/Tdxp5zYD1cyj6lajpUlssaRlOdq15h2Y+6pU3yuM+EJi82u/GTaUNOkjgXxuNla4RQtsODgi6lzLy3FuYntnaRxJE2LqauuPvA90uCfUZ7zxUrd+s+rTVZXWY5agbKnhCosd69erH4sbyyFR4f4zAS1tZReIt49oXpzoNH2ekkp5rBU9XV0SLOse5H5ZHMSTDpWHu6KUtTPAjBhbiOAUZTUBHskKYthjuNGwAvaDfIxIvfoAmjDcWdeX9L+IFjTdrpc5kwmXDW43utu7S9Si8Pq9FIcVeUBjECFSx/VNQqmSU1K3Nuorr0I1WDy+/2iBs0Y5SVB8yQAEyDzkkizLE0L7G/1ly72SO1V1ZcCETACIS5zG4EJwQ0agft+RTAMXoQ6ZFSF0UxGYRSeM3hd1HhdNU1pEJi/+twmOaqJl1dgwkiSKIkcy7K30X+EIckcQ9OQhqIsGbwm0SonMgajSCKvitr/hmEYvCnSCqRFWjJFWtcZxtR1iaNpaJrGLzD4/wxDEFWN4WRBYg1RZXlFhQojQ1GiBVFi6V9gCLc/RqBAV/Ja0vdEZEYgTHBNdkVTZaUXvNf7+6Ln+2VTkE1f+NowQBhMuI9pREhSRPUgrCk87MdJi7RBB5iEXlajb7mPMAretbz1c60MhpLkj4rsbnUJDOyDob+GZsJIf49O4Q2bwcbz44TEYASy+zGeYSFkacjLEMpwODnM374BD/YDRLwkq8EEaPYTpCTbMOxeK3xoWcoqUrRIAR8C33vIa5GKzoIK/FJcn/b6kRXySjbKkL/qbQbtMcNdobvQ592xy0374QdGwAQ0SjEj3Ml6xnF3bWWnYs8qmy2QsQubA9pxEkSCmD/u+ypj6qNjP5rOjH3h5qtLrl4DcoyNtk/xdWuySmDKm4OOuq2yehi8BahNfPS9M3l+WfS8WKRc6xWupubTPLJEisWqr12mF6d4trU9UXPdZMoj3K2d0zaSPY6hDaw4e0HZJ+K6TO15YEEPHVRnFVNh3L12t3t3zd5eteSt8ST33zBB90fi7Y5+dZWv3EPC0bfRdybeXp1/6NwqOm/a4rh4Sg/MipGb50u4XkwpeyUJob6UAxhaWtT7JpzHW3AbMr/KPBKWOAcTUOcnD4wALpshfWdFWP7Ek6bMZkYUOYPqzKuJ8lESP6oyZgTyXqmqDfHIeyUBZfgeZztw+xMmdJt6fwkAAA==",
// KIRA MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// KIRA MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY KIRA-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KIRA-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "KIRA-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94760220052",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







