import { Input, Form, Radio, Space } from "antd-mobile";
import { Table } from "antd"
import { React, Component, createRef } from "react";

class App extends Component {
    state = {
        min: "",
        max: "",
        flag: 1
    }

    form = createRef()

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

        return <div style={{ backgroundColor: "white" }}>
            <Form name="form" ref={this.form} layout={"horizontal"}>
                <Form.Header>黄金分割率</Form.Header>
                <Form.Item label={"最低点"} name={"min"}>
                    <Input placeholder={"请输入最低点"} inputMode={"decimal"} clearable={true} onlyShowClearWhenFocus={false} onChange={(min) => {
                        min = min.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g, '')
                        this.setState({ min: parseFloat(min) })
                        this.form.current.setFieldsValue({
                            min
                        })
                    }} />
                </Form.Item>
                <Form.Item label={"最高点"} name={"max"}>
                    <Input placeholder={"请输入最高点"} inputMode={"decimal"} clearable={true} onlyShowClearWhenFocus={false} onChange={(max) => {
                        max = max.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g, '')
                        this.setState({ max: parseFloat(max) })
                        this.form.current.setFieldsValue({
                            max
                        })
                    }} />
                </Form.Item>
                <Form.Item label={"请选择趋势"} name={"flag"}>
                    <Radio.Group defaultValue={1} onChange={(flag) => {
                        this.setState({ flag: flag })
                    }}>
                        <Space direction='horizontal'>
                            <Radio value={1}>上升</Radio>
                            <Radio value={-1}>下降</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
            </Form>
            <Table pagination={false} columns={colunms} dataSource={[{ key: 1, SpcVal: 0.236, result: this.compute(0.236) }, { key: 2, SpcVal: 0.382, result: this.compute(0.382) }, { key: 3, SpcVal: 0.5, result: this.compute(0.5) }, { key: 4, SpcVal: 0.618, result: this.compute(0.618) }, { key: 5, SpcVal: 0.809, result: this.compute(0.809) }]} />
        </div>
    }

    compute = (num) => {
        let { min, max, flag } = this.state
        if (typeof min !== 'number' || typeof max !== 'number') return ""
        let result = (flag === 1 ? min : max) + flag * num * (max - min)
        return Math.round(result * 100) / 100
    }

}

export default App;
