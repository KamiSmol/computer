import { Input, Form, Radio, Space } from "antd-mobile";
import { Table } from "antd"
import { React, Component, createRef } from "react";
import styles from './styles.less';

class App extends Component {
    state = {
        point: "",
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
        return <div className={styles.container}>
            <Form name="form" ref={this.form} layout={"horizontal"}>
                <Form.Header>黄金分割率</Form.Header>
                <Form.Item label={"请输入A点"} name={"point"}>
                    <Input placeholder={"请输入值"} inputMode={"decimal"} clearable={true} onlyShowClearWhenFocus={false} onChange={(point) => {
                        point = point.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g, '')
                        this.setState({ point: parseFloat(point) })
                        this.form.current.setFieldsValue({
                            point
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
            <Table pagination={false} columns={colunms} dataSource={this.state.flag === 1 ? [{ key: 1, SpcVal: 0.236, result: this.compute(0.236) }, { key: 2, SpcVal: 0.382, result: this.compute(0.382) }, { key: 3, SpcVal: 0.5, result: this.compute(0.5) }, { key: 4, SpcVal: 0.618, result: this.compute(0.382) }, { key: 5, SpcVal: 0.809, result: this.compute(0.236) }] : [{ key: 1, SpcVal: 0.809, result: this.compute(0.809) }, { key: 2, SpcVal: 0.618, result: this.compute(0.618) }, { key: 3, SpcVal: 0.5, result: this.compute(0.5) }, { key: 4, SpcVal: 0.382, result: this.compute(0.382) }, { key: 5, SpcVal: 0.236, result: this.compute(0.236) }]} />
        </div>
    }

    compute = (num) => {
        let { point, flag } = this.state
        if (typeof point !== 'number') return ""
        let result = (1 + flag * num) * point
        return Math.round(result * 100) / 100
    }

}

export default App;
