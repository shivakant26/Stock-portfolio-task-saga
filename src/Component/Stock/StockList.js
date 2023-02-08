import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStock } from "../../Redux/Stocks/Stocks.action";
import "./Stock.scss";
import Chart from "react-apexcharts";
import Stock from "./Stock";

const StockList = () => {
  const [stockRecord, setStockRecord] = useState();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    series: [8, 2],
    options: {
      colors: ["#00dafc", "#a4b037"],
      chart: {
        type: "donut",
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        floating: false,
        fontSize: "14px",
        fontFamily: "Helvetica, Arial",
        fontWeight: 400,
        offsetX: 0,
        offsetY: 0,
        labels: {},
        markers: {
          width: 45,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#fff",
          offsetX: 0,
          offsetY: 0,
          radius: 0,
        },
        itemMargin: {
          horizontal: 5,
          vertical: 0,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
      labels: ["Mutual Fund", "ETF's"],
      dataLabels: {
        enabled: false,
      },
    },
  });
  const stockResponse = useSelector((state) => state?.stock?.stockData);
  useEffect(() => {
    dispatch(getStock());
  }, []);

  useEffect(() => {
    if (stockResponse?.status === 200) {
      setStockRecord(stockResponse?.data);
    }
  }, [stockResponse]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={9}>
            {stockRecord?.map((item, index) => {
              return (
                <Stock data={item} id={index} />
              );
            })}
          </Col>
          <Col sm={3}>
            <div className="chart-section">
              <Card className="chart-card">
                <h5>portfolio</h5>
                <div id="chart">
                  <Chart
                    options={state.options}
                    series={state.series}
                    type="donut"
                    width="300"
                  />
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StockList;
