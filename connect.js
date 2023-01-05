const connectButton = document.getElementById("connect");
const disconnectButton = document.getElementById("disconnect");
const resetButton = document.getElementById("reset");

let device;
connectButton.onclick = async () => {
  device = await navigator.usb.requestDevice({
    filters: []
  });
  await device.open();
  console.log("open:", device);
  await device.selectConfiguration(1);
  console.log("select config 1:", device);
  await device.claimInterface(0);
  console.log("claim interface 0:", device);
  //connected.style.display = 'block';
  //connectButton.style.display = 'none';
  //disconnectButton.style.display = 'initial';
};

resetButton.onclick = async () => {
    console.log("Device before reset: ", device);
    await device.reset();
    console.log("Device after reset:", device);
}
