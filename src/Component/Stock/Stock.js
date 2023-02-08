import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FcMenu } from "react-icons/fc";
import { FaCoins } from "react-icons/fa";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

const Stock = ({data,id}) => {
  return (
    <>
      <Card key={id}>
        <Card.Body>
          <Row>
            <div className="main-wr">
              <div className="stock-share">
                <div>
                  <FcMenu />
                </div>
                <div className="itot">
                  <p>{data.type}</p>
                  <h6>
                    <span className="dolor">$</span>
                    {data.total_amount}
                  </h6>
                </div>
                <div className="ishare">
                  <p className="gr-text">iShares</p>
                  <strong style={{ color: "#202529" }}>{data.script}</strong>
                  <p>{data.stock_type}</p>
                </div>
              </div>
              <div className="stock-quantity">
                <Row>
                  <div className="stock-row">
                    <div className="left-div">
                      <FaCoins />
                      quantity
                    </div>
                    <div className="right-div">
                      <strong>{data.quantity}</strong>
                    </div>
                  </div>
                  <div className="stock-row">
                    <div className="left-div">
                      <FaCoins />
                      Avg.Cost
                    </div>
                    <div className="right-div">
                      <strong>{data.avg_cost}</strong>
                    </div>
                  </div>
                  <div className="stock-row">
                    <div className="left-div">
                      <FaCoins />
                      invested Amt
                    </div>
                    <div className="right-div">
                      <strong>{data.invasted_amt}</strong>
                    </div>
                  </div>
                </Row>
              </div>
              <div className="stock-market-value">
                <Row>
                  <div className="stock-row">
                    <div className="left-div">
                      <strong>Market Value</strong>
                    </div>
                    <div className="right-div">
                      <strong>$430</strong>
                    </div>
                  </div>
                  <div className="stock-row">
                    <div className="left-div">% of profit value</div>
                    <div className="right-div">
                      <strong>{data.portfoli_percent}</strong>
                    </div>
                  </div>
                  <div className="stock-row">
                    <ProgressBar now={data.portfoli_percent} />
                  </div>
                </Row>
              </div>
              <div className="stock-unrealized">
                <Row>
                  <div className="stock-row">
                    <div className="left-div">
                      <strong>Unrealized P/L</strong>
                    </div>
                    <div className="right-div">
                      <strong>{data.unrealizedPL}</strong>
                    </div>
                  </div>
                  <div className="stock-row">
                    <div className="left-div">% Return</div>
                    <div className="right-div">
                      <strong>
                        {data.return >= 0 ? (
                          <RiArrowUpSFill
                            style={{
                              color: "#00871f",
                              fontSize: "21px",
                            }}
                          />
                        ) : (
                          <RiArrowDownSFill
                            style={{
                              color: "#ff0012",
                              fontSize: "21px",
                            }}
                          />
                        )}
                        {data.return} %{" "}
                      </strong>
                    </div>
                  </div>
                  <div className="stock-row">
                    {data?.return < 0 ? (
                      <div className="graph">
                        <div className="ext neg">
                          <div
                            style={{
                              width: `${Math.abs(data?.return)}%`,
                              float: "right",
                            }}
                            className="bar"
                          ></div>
                        </div>
                      </div>
                    ) : (
                      <div className="graph">
                        <div className="ext pos">
                          <div
                            style={{ width: `${data?.return}%` }}
                            className="bar"
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </Row>
              </div>
              <div className="stock-button">
                <Row>
                  <Button variant="outline-danger">Buy</Button>
                </Row>
                <Row>
                  <Button variant="outline-danger">Sell</Button>
                </Row>
              </div>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Stock;
