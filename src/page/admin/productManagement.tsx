import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { Space, Table, Button, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';

type Props = {}

const productManagement = (props: Props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then((respone) => respone.json())
            .then(data => setProducts(data))
    },[])
    const RemoveProduct = (id) => {
        if(confirm('Ban co muon xoa')){
            props.onRemove(id)
            message.success("Xoa Than Cong")
        }
    }
    // interface DataType {
    //     key: string;
    //     name: string;
    //     age: number;
    //   }
      
      const columns: ColumnsType = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        //   render: (text) => <a>{text}</a>,
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Action',
          key: 'action',
          render: (record) => (
            <Space size="middle">
                <Button>
                <Link to={`/admin/products/${record.key}/update`}>Update</Link>
                </Button>
              <Button onClick={() => RemoveProduct(record.key)}>Delete</Button>
            </Space>
          ),
        },
      ];
      
      const data = products.map((item) => {
        return {
            key: item.id,
            name: item.name,
            price: item.price,
        }
      })
    return (
        <div>
            <h1>Products Management</h1>
            <Table columns={columns} dataSource={data}/>
        </div>
    )
}

export default productManagement