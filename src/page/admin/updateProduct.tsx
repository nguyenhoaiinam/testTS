import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form, Input, message } from 'antd';


type Props = {}

const updateProduct = (props: Props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const currentProduct = props.products.find((product) => product.id == id);
        setProduct(currentProduct);
        // console.log(currentProduct);

    }, [props])
    useEffect(() => {
        setFields()
    }, [product])

    const [form] = Form.useForm()

    const setFields = () => {
        form.setFieldsValue({
            id: product?.id,
            name: product?.name,
            price: product?.price,
        })
    }

    const onFinish = (values) => {
        props.onUpdate(values);
        navigate('/admin/products')
        message.success("Cập nhập sản phẩm thành công")
    }
    return (
        <div>
            <Form form={form}
                name="wrap"
                labelCol={{ flex: '110px' }}
                onFinish={onFinish}
                labelAlign="left"
                labelWrap
                wrapperCol={{ flex: 1 }}
                colon={false}
                style={{ maxWidth: 600 }}
            >
                <Form.Item label="" name="id" rules={[{ required: true}]} style={{display: 'none'}}>
                    <Input value={`${form.getFieldValue("id")}`}/>
                </Form.Item>
                <Form.Item label="Product Name" name="name" rules={[{ required: true }]}>
                    <Input value={`${form.getFieldValue("name")}`} />
                </Form.Item>

                <Form.Item label="Product Price" name="price" rules={[{ required: true }]}>
                    <Input value={`${form.getFieldValue("price")}`}/>
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

export default updateProduct