import React from 'react'
import "./AddProduct.scss"
import { Button, Col, Form, Input, message, Row, Spin, Select, Checkbox } from "antd"; //Card
import { useAuthContext } from "../context/AuthContext";
import { API } from "../../constant";
import { useState, useEffect } from "react";
import { getToken, getDataUser } from "../../helpers";
import  '../../compnents/Card/Card.scss'
import useFetch from '../../hooks/useFetch';
import Card from '../../compnents/Card/Card'
import { Link } from "react-router-dom";
import axios from "axios"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import FormItem from 'antd/es/form/FormItem';



const AddProduct = () => {

  //carousel
  const responsive = {
    0: { items: 1 },
    //568: { items: 2 },
    568: { items: 3 },
  };

  //const [cat, setCat] = useState(null);
  //const [[...prods], setSelectedProds] = useState([]) //выбор продуктов 
  const [products] = useFetch(`products`);
  const [url, setUrl] = useState(`products`)
  const [categories] = useFetch(`categories`);
  const [subcategories] = useFetch(`sub-categories`);

  //for filter getting products
  const [[...selectedSubCats], setSelectedSubCats] = useState([])
  const [[...selectedCats], setSelectedCats] = useState([])
  const[a, setA] = useState(null);

  //for upload img
  const [selectedFile,  setSelectedFile] = useState( null);

  const state = {
    file:null,
  }

  const handleChangeCat = e => {

    e.persist();

    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(e.target.name.value, "vaaaasssssss")
    setA(value);

    console.log(a, " a what")
  //  useEffect( ()=>{
    
      setSelectedCats( 
        isChecked
          ?  (selectedCats=> [...selectedCats, value])//[...selectedCats,value]
          :[...selectedCats.filter((item) => item !== a)]
      );
   // }) 
    console.log(selectedCats);
    setUrl(url+`?categories_eq=${value}`)
    console.log(url);
  };

  const handleChangeSub = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(value, "aaaa")
    
  //   setSelectedSubCats( [...selectedSubCats, value]);
    if (isChecked) {

      setSelectedSubCats([...selectedSubCats, value]);
      console.log(selectedSubCats, "first check");
     //()=> handleChangeSub(e);
    } 
   else  setSelectedSubCats( [...selectedSubCats.filter((item) => item !== value)])

    setSelectedSubCats( 
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
    console.log(selectedSubCats);
  };


  //for uploading files. need tested
  //try to boofered images and use form data and multipe header in post
  const fileChangedHandler = async (event) => {
    setSelectedFile(event.target.files[0])
    console.log(event.target.files[0], "aaa")  
    
    const dataFile= new FormData()
    dataFile.append('files',  event.target.files[0])
    //--------------------------------------------------
      // axios
      // .post(`http://localhost:1337/upload`, dataFile, {
      //   headers: { 'Content-Type': 'multipart/form-data' },
      // })
      // .then(res => {
      //   console.log(res);
      // })
      // .catch(err => {
      //   console.log(err);
      // });
    //--------------------------------------------------

  }
  
  const uploadHandler = async (e) => {
    const dataFile= new FormData()
    dataFile.append('files', selectedFile)

    console.log(dataFile, "datafile")
    console.log(selectedFile, "file")

  }

  const postDataUpload = async (data) => {
    console.log(data, "data for post")
    const dataFile= new FormData();
    dataFile.append('files.img',  selectedFile);
    dataFile.append('data', JSON.stringify(data));

      axios
      .post(`http://localhost:1337/posts`, dataFile, {
        headers: { 'Content-Type': 'multipart/form-data' ,
        Authorization: `Bearer ${getToken()}`,
      
      },
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  
  };

    return (
        <div className="create-post">
          <div className="right">
            <Form        
              layout="vertical"
              initialValues={{
              user: getDataUser(),
              users_permissions_user: getDataUser(), 
              //products: prods,
              }}
              onFinish={postDataUpload}//
            >
              <Row gutter={[16, 16]}>
                <Col md={8} lg={8} sm={24} xs={24}>
                  <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                      {
                        required: true,
                        message: "Title is required!",
                        type: "title",
                      },
                    ]}
                  >
                    <Input placeholder="Title" />
                  </Form.Item>
                </Col>
                
                <Form.Item
                    label="User"
                    name="user"
                    hidden={true}
                   
                  >
                </Form.Item>

                <Form.Item
                    label="User"
                    name="users_permissions_user"
                    hidden={true}      
                  >
                </Form.Item>

                <Col md={8} lg={8} sm={24} xs={24}>
                  <Form.Item
                    label="Category"
                    name="category"
                    rules={[
                      {
                        required: true,
                        message: "Category is required!",
                        type: "categories",
                      },
                    ]}
                  >
                    <Select placeholder="Category" >  
                    {/* onChange={(value) => {handleSelectCatChange(value)}} */}
                      {categories?.map((item)=>
                      {
                      return ( 

                        <Select.Option key={item?.id} value={item?.id} > {item?.title}</Select.Option>
                          )
                      })}
                  </Select>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Description"
                    name="text"
                    rules={[
                      {
                        required: true,
                        type: "string",
                        max: 1000,
                      },
                    ]}
                  >
                    <Input.TextArea placeholder="Description" rows={6} />
                  </Form.Item>
                </Col>
                {/* <Col md={8} lg={8} sm={24} xs={24}>
                  <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                      {
                        type: "string",
                      },
                    ]}
                  >
                    <Input placeholder="Price" />
                  </Form.Item>
                </Col> */}
                <Col md={8} lg={8} sm={24} xs={24}>
                  <Form.Item
                    label="Image"
                    name="img"
                    hidden= {true}
                    rules={[
                      {
                        type: "string",
                      },
                    ]}
                  >
                  </Form.Item>
                  
                  <Form.Item  label= "Upload a photo">
                    <Input type="file" placeholder="img" onChange={fileChangedHandler} />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                    label="Select the products"
                    name="products"
                  >
                    <Checkbox.Group>

                    <AliceCarousel
                      mouseTracking
                      items={
                        products?.map((item)=>{
                        if (item?.id)
                        return <div className='card' key={item?.id}> 
                        <Card item={item} posting={true} key={item?.id} /> 
                        <h2> {item.title} <Checkbox value={item.id} /></h2>
                        </div>                 
                        })
                      }
                      responsive={responsive}
                      controlsStrategy="alternate"
                    //  styles={width=75%}
                   />
                    {/* <div >
                    { 
                      products?.map((item)=>{
                          if (item?.id)
                          return <div className='card' key={item?.id}> 
                          <Card item={item} posting={true} key={item?.id} /> 
                          <h2> {item.title} <Checkbox value={item.id} /></h2>
                          </div>                 
                          })
                    }
                </div> */}
          </Checkbox.Group>
         
            </Form.Item>
              <Button
                className="profile_save_btn"
                htmlType="submit"
                type="primary"
                size="large"
              >                      
                <Spin size="small" /> Public!                  
              </Button>
            </Form>
          </div>
        
       
                  <div className="left">
                  <div className="filterItem">
                      <h2>Product Categories</h2>
                      {categories?.map((item)=>
                      {
                       return ( <div cssName="inputItem" key={item?.id}>
                            <input type="checkbox" id={item?.id} value={item?.id} onChange={handleChangeCat}/>
                          <label htmlFor={item?.id}>{item?.title}</label>
                          </div>
                        )
                      })}
                    </div>
                    <div className="filterItem">
                      <h2>Product Sub-categories</h2>
                      {subcategories?.map((item)=>
                      {
                       return ( <div cssName="inputItem" key={item?.id}>
                            <input type="checkbox" id={item?.id} value={item?.id} onChange={ e => handleChangeSub(e)}/>
                          <label htmlFor={item?.id}>{item?.title}</label>
                          </div>
                        )
                      })}
                    </div>
                    
                  </div>
{/* 
                  <Input type="file" placeholder="img" onChange={fileChangedHandler} />
                  <Button onClick={uploadHandler}>Upload!</Button> */}
        </div>


        
      );

}

export default AddProduct
