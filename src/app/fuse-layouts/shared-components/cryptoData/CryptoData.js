import React, { useState } from "react";
import CryptoCurrencies from "./cryptocurrencies/CryptoCurrencies";
import NavBar from "./navbar/NavBar";
import Trending from "./trending/Trending";
import Modal from "./ui/Modal";

function CryptoData() {
  const [modalStatus, setModalStatus] = useState(false);
  const [coinId, setCurrenCoinid] = useState("");
  const [themeLight, setTheme] = useState(true);

  const onsetThemeHandler = () => {
    setTheme((status) => !status);
  };

  const onCloseModalHandler = (id) => {
    setModalStatus((status) => !status);
    if (!id) {
      setCurrenCoinid("");
    } else {
      setCurrenCoinid(id);
    }
  };
  return (
    <div className={`${themeLight === true ? "" : "bg-[#0a1929] text-white"}`}>
      <CryptoCurrencies
        themeStatus={themeLight}
        onsetModal={onCloseModalHandler}
      />
    </div>
  );
}

export default CryptoData;
