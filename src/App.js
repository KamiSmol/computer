import { Input, Form, Grid } from "antd-mobile";
import { Table } from "antd"
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

      <Form name="form1" layout={"horizontal"}>
        <Form.Header>黄金分割率</Form.Header>
        <Form.Item label={"请输入A点"} name={"min"}>
          <Input placeholder={"请输入值"} inputmode={"decimal"} clearable onChange={(min) => this.setState({ min: parseFloat(min) })} />
        </Form.Item>
        <Form.Item label={"请输入B点"} name={"max"}>
          <Input placeholder={"请输入值"} inputmode={"numeric"} clearable onChange={(max) => this.setState({ max: parseFloat(max) })} />
        </Form.Item>
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
