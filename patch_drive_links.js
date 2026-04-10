const fs = require('fs');
const path = require('path');

const manifest = {
  "ascasc.mp4": "1xcXZm5ViyOuT0yLc8l6hTEjIH5YBqYJD",
  "cat live-2.mp4": "1Vcnik-idLdByHgaDm6IUTfwsUOVrkwfz",
  "sasac.mp4": "1VDQ6pHFxb8UFqHbdwHSgO4_52b8CvoNY",
  "stt.mp4": "1hmCuC6gghbvKcXjaHq_-Oib-L4GP0xk5",
  "VID-20190812-WA0006.mp4": "19HA0UDf4_SR6jmkufVUmYPXSJ7pScMna",
  "VID20251214153719.mp4": "1S-dG6e_kdFT0M1sG5uclAfsfleg_5xvR",
  "VID20251214154030.mp4": "1ZCQmHWOHjz0MnJzk1cYJ_kEO8VLBHEG9",
  "VID20251214155837.mp4": "1rX1baI7LE-FBj1ioSMy1CdgGOspe4wZs",
  "WhatsApp Video 2026-03-20 at 5.38.40 PM.mp4": "1IfX_kG-SyMWlooreL168j-8y9AIsXoDo",
  "WhatsApp Video 2026-03-20 at 10.18.56 PM.mp4": "1AL7LLmk6L9xeuxa2-1h-_cjXk3wrzj_J",
  "WhatsApp Video 2026-03-27 at 8.50.17 PM.mp4": "1_ditOojxiATHmztEERZ-H5xXCF_jFca8",
  "WhatsApp Video 2026-03-27 at 9.17.45 PM.mp4": "180hlWMX3Ypo1zaGIoyjLwJxPr6MIFI5I",
  "WhatsApp Video 2026-03-27 at 9.18.03 PM.mp4": "18HwrMohWJ60XKIXgsRSkUD3desjyf1tJ",
  "WhatsApp Video 2026-03-27 at 9.18.31 PM.mp4": "1FfscSrd71hr0IvVHbK4DpD64y44lBe9l",
  "WhatsApp Video 2026-03-27 at 9.18.33 PM.mp4": "1nnQYvH6G8Df_L_LxZPOJIu4QblTpyGUK",
  "WhatsApp Video 2026-03-27 at 9.18.40 PM.mp4": "1-QXfZsW6vd7IOokMDhAM6747hGoxLs_G",
  "WhatsApp Video 2026-03-27 at 9.18.46 PM.mp4": "1zuz7q9YPXMcjZ4MQ_T4NX2E59aTitUq1",
  "WhatsApp Video 2026-03-27 at 9.18.53 PM.mp4": "1kMLFtRYaM5fUVRy5jxTnl8gWdT65FHdT",
  "WhatsApp Video 2026-03-27 at 9.20.59 PM.mp4": "1IppFyBGrQBEWB9DZF_PDRPKUu8K7TKbs",
  "WhatsApp Video 2026-03-27 at 9.22.46 PM.mp4": "1UF1SaeMkFJhlu7J5iNzW_njg5tQ7PUPT",
  "WhatsApp Video 2026-03-27 at 9.33.10 PM.mp4": "1Yzl8Ly1cSuNdDSsVZGp41fe-SlTHX38j",
  "WhatsApp Video 2026-03-27 at 9.35.05 PM.mp4": "11jDjc8wvOSIDo512-em06ApCxxe8phGN",
  "WhatsApp Video 2026-03-27 at 9.35.13 PM.mp4": "1qlYxW2owric0YihaelTV7311McBhJmjX",
  "WhatsApp Video 2026-03-27 at 9.41.08 PM.mp4": "11_LJWPGtTbkmDio77TWUGAcP3hqISghB",
  "WhatsApp Video 2026-03-27 at 9.41.16 PM.mp4": "1yQp7mdMx4GsrG2lN4uiLAazGaJLx8jUK",
  "WhatsApp Video 2026-03-27 at 9.43.21 PM.mp4": "1Miw3EhunzmVwIzWhnPC9LNRKcNFH7XdZ",
  "WhatsApp Video 2026-04-09 at 4.58.40 PM.mp4": "1VcT1PTctaLUKWx50HI9AUMf1MPMUsEOG",
  "WhatsApp Video 2026-04-09 at 4.59.30 PM.mp4": "1hOpyAG6P4PkFJTAP2lsQlyW_VJRxpnY0",
  "WhatsApp Video 2026-04-09 at 4.59.35 PM.mp4": "1bxQOZkchu3CWGTSAqXJrpDKeagC6upGI",
  "WhatsApp Video 2026-04-09 at 5.00.36 PM.mp4": "17h_ONTdoYeGpjL5xGT7yDfM1xRk-cpKi",
  "WhatsApp Video 2026-04-09 at 5.00.40 PM.mp4": "1QDPdyV1WwWyaCB8HJkpNop6jGK6Dr0zu",
  "WhatsApp Video 2026-04-09 at 5.00.42 PM.mp4": "1HggYtrzABUxBqcIycukxqv3pTlU_4raL",
  "WhatsApp Video 2026-04-09 at 5.00.44 PM.mp4": "1ehnfic5Mu36QVL7HUnkezrg9ex0fxJzj",
  "WhatsApp Video 2026-04-09 at 5.00.48 PM.mp4": "1Qstdh4SymzSCcZqzhcEkE2p9hQFM4sbC",
  "WhatsApp Video 2026-04-09 at 5.00.53 PM.mp4": "1NSzzOhbVH0-lCWtT-EKo5XEkJMta5wQp",
  "WhatsApp Video 2026-04-09 at 5.00.59 PM.mp4": "1s-kLi6IU8mE-PVoJPgiJ_1P6XU6pGSdc",
  "WhatsApp Video 2026-04-09 at 5.01.02 PM.mp4": "1I1lUDPXB6jt-JHchnMv1nkXN9U-nLWl4",
  "WhatsApp Video 2026-04-09 at 5.02.27 PM.mp4": "16vVSE631qEaBF9aOzRMjsB_GQAchmz2t",
  "WhatsApp Video 2026-04-09 at 11.43.10 PM.mp4": "1t8aNOlWueTXiEUiF6_YREhF6PjYEhaUS",
  "WhatsApp Video 2026-04-09 at 11.43.11 PM.mp4": "14Lkbvanpcl6RGt6pfiY_xwGqLCLd0zVA",
  "WhatsApp Video 2026-04-09 at 11.43.16 PM.mp4": "1yrLJ7_qtzF_8NXnu786LDqE_M093hr7q",
  "WhatsApp Video 2026-04-09 at 11.43.27 PM.mp4": "1eklvKnw1uSMSG6Jckttpa-OiJ2ogELp3",
  "WhatsApp Video 2026-04-10 at 8.31.30 AM.mp4": "1hJJTNvdxwJ6ua6KAGBylMhqjLTm-o0kd",
  "WhatsApp Video 2026-04-10 at 8.32.28 AM.mp4": "1zvphopBhE4Md_KZKvPTKzkRkvef_VCtY",
  "WhatsApp Video 2026-04-10 at 8.34.42 AM.mp4": "1yxfu0eDwek-MP6uXH23_leSXLa-MqK65",
  "WhatsApp Video 2026-04-10 at 8.35.35 AM.mp4": "1u4lApe8kK_3Ov_dTFP3loq4KenqgY3lj",
  "WhatsApp Video 2026-04-10 at 8.35.36 AM.mp4": "1doqgqRDMPWmi_715-ZDQ1RGugP6Uis0A",
  "WhatsApp Video 2026-04-10 at 8.35.43 AM.mp4": "1iPTWShwM_-G4MbUx-ohIFt8nw2cccwvI",
  "WhatsApp Video 2026-04-10 at 8.38.26 AM.mp4": "13u9TQa-f6S8B7O_mO-hMqBpXAM1Fa1gD",
  "WhatsApp Video 2026-04-10 at 8.40.56 AM.mp4": "1OV9qq_uf5jCc-KSUkovszj06fRXWJw0V",
  "WhatsApp Video 2026-04-10 at 8.41.54 AM.mp4": "1Ff6DnnkzY-9pR5U5PKJNbV6ig4xEXJRO",
  "WhatsApp Video 2026-04-10 at 8.41.55 AM.mp4": "1cM9FvgfKyg2goeY3cqg5ucvxGBtLEUdb",
  "WhatsApp Video 2026-04-10 at 8.41.56 AM.mp4": "1wxH0Nc3eJU_L4FjLRoeCH3u_W9q39tXd",
  "WhatsApp Video 2026-04-10 at 8.41.58 AM.mp4": "1qx7DmXBEA79l-OKhdFhsTlLCTXK8WJu_",
  "WhatsApp Video 2026-04-10 at 8.41.59 AM.mp4": "1-fBvFLAnLhXzq4PUgsQci9xVaJMWi2Vc",
  "WhatsApp Video 2026-04-10 at 8.43.44 AM.mp4": "1RmjW3DxD3hD_DQjzC5ApHwfQTfawRupt",
  "WhatsApp Video 2026-04-10 at 8.43.45 AM.mp4": "1nygCKrA-8pikx74-bWFz7GJW7BIbGs32",
  "WhatsApp Video 2026-04-10 at 8.43.46 AM.mp4": "1U6YIjO9CRzN1IBCfi4DjKAHF2CjatpNe",
  "WhatsApp Video 2026-04-10 at 12.11.22 AM.mp4": "1d8PKTjU_nuFglAf3J8LW1rdnxcc_6y_c",
  "WhatsApp Video 2026-04-10 at 12.15.57 AM.mp4": "1scD2JMlRauTaNxfDWu4yu_NEMwKAm_Y1",
  "WhatsApp Video 2026-04-10 at 12.15.58 AM.mp4": "1OdPXvQl4hw5Y1eQxl9crg5AwKEf48vj8"
};

const MAIN_JS_PATH = path.join(__dirname, 'main.js');

try {
    let mainJs = fs.readFileSync(MAIN_JS_PATH, 'utf8');
    let updatedCount = 0;

    for (const [name, id] of Object.entries(manifest)) {
        const driveUrl = `https://drive.google.com/file/d/${id}/view`;
        
        // Escape special chars for regex
        const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        // Match only strings that end in this filename and are within quotes
        const regex = new RegExp(`"[^"]*?${escapedName}"`, 'g');
        
        if (mainJs.match(regex)) {
            mainJs = mainJs.replace(regex, `"${driveUrl}"`);
            updatedCount++;
        }
    }

    fs.writeFileSync(MAIN_JS_PATH, mainJs);
    console.log(`Successfully updated ${updatedCount} video links with Google Drive URLs!`);

} catch (err) {
    console.error(`Error patching main.js: ${err.message}`);
}
