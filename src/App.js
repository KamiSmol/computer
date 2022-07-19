import { Table, Input, Form, Row, Col } from "antd";
import { React, Component } from "react";
class App extends Component {

  state = {
    min: 0,
    max: 0
  }
  render() {
    const colunms = [{
      title: "比率",
      key: "SpcVal",
      dataIndex: "SpcVal"
    }, {
      title: "结果",
      key: "result",
      dataIndex: "result"
    }]
    return <>

      <Form name="form1">
        <Row>
          <Col span={9}>
            <Form.Item label={"请输入值的区间"} name={"min"}>
              <Input placeholder={"请输入值"} allowClear onChange={(e) => this.setState({ min: parseFloat(e.target.value) })} />
            </Form.Item>
          </Col>
          <Col span={3}></Col>
          <Col span={9}>
            <Form.Item name={"max"}>
              <Input placeholder={"请输入值"} allowClear onChange={(e) => this.setState({ max: parseFloat(e.target.value) })} />
            </Form.Item>
          </Col>
          <Col span={3}></Col>
        </Row>
      </Form>




      <Table pagination={false} columns={colunms} dataSource={[{ key: 1, SpcVal: 0.809, result: this.compute(0.809) }, { key: 2, SpcVal: 0.618, result: this.compute(0.618) }, { key: 3, SpcVal: 0.5, result: this.compute(0.5) }, { key: 4, SpcVal: 0.382, result: this.compute(0.382) }, { key: 5, SpcVal: 0.236, result: this.compute(0.236) }]} />
    </>
  }
  compute = (num) => {
    let { max, min } = this.state
    if (max < min) {
      let mid = max;
      max = min;
      min = mid
    }
    let result = num * (max - min) + min;
    return Math.round(result * 100) / 100;
  }
}

export default App;
