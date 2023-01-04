const connectButton = document.getElementById("connect");
const disconnectButton = document.getElementById("disconnect");

let device;
connectButton.onclick = async () => {
  device = await navigator.usb.requestDevice({
    filters: [{ vendorId: 0x1d50 }]
  });
  await device.open();
  connected.style.display = 'block';
  connectButton.style.display = 'none';
  disconnectButton.style.display = 'initial';
};

