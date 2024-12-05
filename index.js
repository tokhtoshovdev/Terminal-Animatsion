// const frames = ["|", "/", "-", "\\"];
// let i = 0;

// setInterval(() => {
//   process.stdout.write(`\r${frames[i++ % frames.length]} Loading...`);
// }, 100);

// ----------------------------------------------------------------

// const cliProgress = require("cli-progress");

// // Progress barni yaratish
// const progressBar = new cliProgress.SingleBar(
//     {},
//     cliProgress.Presets.shades_classic
// );
// progressBar.start(100, 0); // Maksimal qiymat 100, hozirgi qiymat 0

// let value = 0;

// // Progress barni yangilash
// const interval = setInterval(() => {
//     value += 1;
//     progressBar.update(value);

//     if (value >= 100) {
//         clearInterval(interval);
//         progressBar.stop();
//         console.log("Done!");
//     }
// }, 200);

// -----------------------------------------------------------------------

// const message = "Tokhtoshovdev eng zo'ri 😎 \n";
// let i = 0;

// const interval = setInterval(() => {
//   process.stdout.write(message[i]);
//   i++;
//   if (i === message.length) {
//     clearInterval(interval);
//   }
// }, 100);

// ---------------------------------------------------------------------

// let counter = 0;

// setInterval(() => {
//   process.stdout.write("\x1Bc"); // Terminalni tozalash
//   console.log(`Animatsiya davom etmoqda: ${counter++}`);
// }, 500);
