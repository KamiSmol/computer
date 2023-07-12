import { Input, Form } from "antd-mobile";
import { Table } from "antd"
import { React, Component, createRef } from "react";
import styles from './styles.less';
class App extends Component {
    state = {
        min: "",
        max: "",
        flag:1
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
            <DemoBlock title='请选择趋势'>
        <Radio.Group defaultValue={1}>
          <Space direction='vertical'>
            <Radio value={1}>上升</Radio>
            <Radio value={-1}>下降</Radio>
          </Space>
        </Radio.Group>
      </DemoBlock>
                </Form.Item>
            </Form>
            <Table pagination={false} columns={colunms} dataSource={[{ key: 1, SpcVal: 0.809, result: this.compute(0.809) }, { key: 2, SpcVal: 0.618, result: this.compute(0.618) }, { key: 3, SpcVal: 0.5, result: this.compute(0.5) }, { key: 4, SpcVal: 0.382, result: this.compute(0.382) }, { key: 5, SpcVal: 0.236, result: this.compute(0.236) }]} />
        </div>
    }

    compute = (num) => {
        let { max, min,flag } = this.state
        if (typeof min !== 'number') return "";
        let result = (1+flag*num) * min;
        return Math.round(result * 100) / 100;
    }

}

export default App;
