const QrCode = () => {
  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center">
      <div>
        <img
          className="w-48"
          src="https://www.qrcode-monkey.com/img/default-preview-qr.svg"
          alt="QRcode"
        ></img>
        <button className="bg-gray-400 text-white mt-2 px-4 py-1 w-full hover:bg-gray-800">
          Dwonload
        </button>
      </div>
    </div>
  );
};

export default QrCode;
