import { connect } from 'react-redux';
import { Form, Button, Input, Row, Col, Card} from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'
import {createTask} from '../redux/actions/action'

function AddTodo(props){

    const [form] = Form.useForm();

    const handleSubmition = (payload) => {
        props.createTask(payload)
        form.resetFields();
    }

    return(
        <Card bodyStyle={{paddingTop: '40px'}}>
            <Form
            form={form}
            onFinish = {handleSubmition}
            initialValues={{task: ''}}
            layout='horizontal'
            className = "form"
            >
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={16} lg={18} xl={18}>
                        <Form.Item 
                        name='task'
                        rules={[{ required: true, message: 'This field is required' }]}
                        >
                            <Input placeholder='Create a task' allowClear/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                        <Button htmlType='submit' type='primary' icon={<PlusCircleFilled/>} block >Add Todo</Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

export default connect(null, {createTask})(AddTodo)

