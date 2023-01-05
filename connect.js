const connectButton = document.getElementById("connect");
const disconnectButton = document.getElementById("disconnect");
const resetButton = document.getElementById("reset");

let device;
connectButton.onclick = async () => {
  device = await navigator.usb.requestDevice({
    filters: []
  });
  await device.open();
  console.log(device);
  //connected.style.display = 'block';
  //connectButton.style.display = 'none';
  //disconnectButton.style.display = 'initial';
};

resetButton.onclick = async () => {
    console.log("Device before reset: ", device);
    await device.reset();
    console.log("Device after reset:", device);
}
