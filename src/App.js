import { Input, Form } from "antd-mobile";
import { Table } from "antd"
import { React, Component, createRef } from "react";
import styles from './styles.less';
class App extends Component {
    state = {
        min: "",
        max: ""
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
                <Form.Item label={"请输入A点"} name={"min"}>
                    <Input placeholder={"请输入值"} inputMode={"decimal"} clearable={true} onlyShowClearWhenFocus={false} onChange={(min) => {
                        min = min.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g, '')
                        this.setState({ min: parseFloat(min) })
                        this.form.current.setFieldsValue({
                            min
                        })
                    }} />
                </Form.Item>
                <Form.Item label={"请输入B点"} name={"max"}>
                    <Input placeholder={"请输入值"} inputMode={"decimal"} clearable={true} onlyShowClearWhenFocus={false} onChange={(max) => {
                        max = max.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g, '')
                        this.setState({ max: parseFloat(max) })
                        this.form.current.setFieldsValue({
                            max
                        })
                    }} />
                </Form.Item>
            </Form>
            <Table pagination={false} columns={colunms} dataSource={[{ key: 1, SpcVal: 0.809, result: this.compute(0.809) }, { key: 2, SpcVal: 0.618, result: this.compute(0.618) }, { key: 3, SpcVal: 0.5, result: this.compute(0.5) }, { key: 4, SpcVal: 0.382, result: this.compute(0.382) }, { key: 5, SpcVal: 0.236, result: this.compute(0.236) }]} />
        </div>
    }

    compute = (num) => {
        let { max, min } = this.state
        if (max && min) return ""
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
