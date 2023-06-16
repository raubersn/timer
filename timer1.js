//Retrieving the parameters from the command line arguments
for (const arg of process.argv.slice(2)) {
  //If an input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
  //If an input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number
  if (!Number.isNaN(arg) && (arg >= 0)) {
    console.log(`Setting the alarm at ${arg} seconds.`);

    setTimeout(() => {
      console.log(`BEEP! ${arg} second(s) has(ve) passed.`);
      process.stdout.write('\x07');      
    }, arg * 1000);
  }
}