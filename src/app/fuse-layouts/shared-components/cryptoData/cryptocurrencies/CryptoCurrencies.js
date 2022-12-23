import React, { useState, useEffect, Fragment } from "react";
// import { Input } from "@material-tailwind/react";
import { CoinList } from "../api";
import "react-loading-skeleton/dist/skeleton.css";
// import ALlCurrencies from "./AllCurrencies";
import { CircularProgress, Input, Table, TableBody } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import Coin from "./Coin";
import CoinsTableHead from "./CoinsTableHead";
import { Pagination } from "@mui/material";
import FuseScrollbars from "@fuse/core/FuseScrollbars";
import CryptoTableHead from "./CryptoTableHead";

const CryptoCurrencies = (props) => {
  const [constantData, setData] = useState([]);
  const [allCryptoCoin, setCryptoCoin] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPageNum] = useState(1);

  async function fetchingData() {
    setLoadingState(true);
    setError(null);
    try {
      let url = CoinList("usd");
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Some thing Went Wrong");
      }
      let data = await response.json();
      setCryptoCoin(data);
      setData(data);
    } catch (error) {
      setError(error.message);
    }
    setLoadingState(false);
  }

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    let id = setTimeout(() => {
      setCryptoCoin(
        constantData.filter((each) => {
          return (
            each.id.toLowerCase().includes(search) ||
            each.id.toUpperCase().includes(search)
          );
        })
      );
    }, 600);
    return () => {
      clearTimeout(id);
    };
  }, [search, constantData]);

  const onSearchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-8 max-w-[1300px] mx-auto">
      <Fragment>
        <div className="overflow-x-auto mb-8">
          <FuseScrollbars className="flex-grow overflow-x-auto">
            <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
              <CryptoTableHead />
              {!isLoading && (
                <TableBody>
                  {allCryptoCoin
                    .slice((page - 1) * 20, (page - 1) * 20 + 20)
                    .map((each, index) => {
                      return (
                        <Coin
                          themeStatus={props.theme}
                          key={each.id}
                          num={index + 1 + (page - 1) * 20}
                          eachData={each}
                        // onSetOpenModal={props.onCloseModalHandler}
                        />
                      );
                    })}
                </TableBody>
              )}

            </Table>
          </FuseScrollbars>


          {/* <table className="min-w-[700px] mx-auto mt-8">
            <CoinsTableHead />
            {!isLoading && (
              <tbody>
                {allCryptoCoin
                  .slice((page - 1) * 20, (page - 1) * 20 + 20)
                  .map((each, index) => {
                    return (
                      <Coin
                        themeStatus={props.theme}
                        key={each.id}
                        num={index + 1 + (page - 1) * 20}
                        eachData={each}
                      // onSetOpenModal={props.onCloseModalHandler}
                      />
                    );
                  })}
              </tbody>
            )}
          </table> */}


          {isLoading && (
            <div className="z-0">
              <CircularProgress
                style={{
                  marginTop: '5%',
                  marginLeft: '48%',
                  width: 48,
                  height: 48,
                  marginBottom: 80,
                }}
                color="secondary"
              />
              {/* <Skeleton className="h-12 my-2" count={20} /> */}
            </div>
          )}
          {!isLoading && error && (
            <div className="text-center font-medium">
              <p>{error}</p>
            </div>
          )}
        </div>
        <div className="flex z-0 justify-center">
          <Pagination
            className="w-fit"
            count={+(allCryptoCoin?.length / 20).toFixed(0)}
            variant="outlined"
            color="primary"
            size="small"
            onChange={(e, val) => {
              setPageNum(val);
            }}
          />
        </div>
      </Fragment>
    </div>
  );
};
export default CryptoCurrencies;
