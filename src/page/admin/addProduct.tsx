import React from 'react'
import { Button, Form, Input, message } from 'antd';
import {useNavigate} from 'react-router-dom'

type Props = {}

const addProduct = (props: Props) => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        props.onAdd(values)
        navigate('/admin/products')
        message.success("Them san pham thanh cong")
    }
    return (
        <div>
            <Form
                name="wrap"
                labelCol={{ flex: '110px' }}
                onFinish={onFinish}
                labelAlign="left"
                labelWrap
                wrapperCol={{ flex: 1 }}
                colon={false}
                style={{ maxWidth: 600 }}
            >
                <Form.Item label="Product Name" name="name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Product Price" name="price" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default addProduct