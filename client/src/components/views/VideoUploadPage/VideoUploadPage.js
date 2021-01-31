import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Dropzone from 'react-dropzone';

const { Title } = Typography;

const PrivateOpt = [
    {value: 0, label: "Private"},
    {value: 1, label: "Public"}
]

const CategoryOpt = [
    {value: 0, label: "Film & Ani"},
    {value: 1, label: "Autos & Vehicles"},
    {value: 2, label: "Animals"},
    {value: 3, label: "Cartoons"},
]

function VideoUploadPage() {

    const [videoTitle, setvideoTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Private, setPrivate] = useState(0) // private 0
    const [Category, setCategory] = useState("Film & Ani")

    const onTitleChange = (e) =>{
        setvideoTitle(e.currentTarget.value)
    }
    const onDescriptionChange = (e) =>{
        setDescription(e.currentTarget.value)
    }
    const onPrivateChange = (e) =>{
        setPrivate(e.currentTarget.value)
    }
    const onCategoryChange = (e) =>{
        setCategory(e.currentTarget.value)
    }

    return (
        <div style = {{ maxWidth: '700px', margin: '2rem auto'}}>
            <div style = {{ textAlign:'center', marginBottom:'2rem'}}>
                <Title level={2}>Upload Video</Title>
            </div>

            <Form onSubmit>
                <div style={{ display:'flex', justifyContent:'space-between'}}>
                    {/* Drop zone */}
                    <Dropzone
                    onDrop
                    multiple
                    maxSize>
                    {({ getRootProps, getInputProps}) => (
                        <div style={{ width:'300px', height:'240px', border:'1px solid lightgray', alignItems:'center',justifyContent:'center'}} {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Icon type="plus" style={{ fontSize:'3rem'}} />
                        </div>
                    )}
                    </Dropzone>
                    {/* Thumbnail */}
                    <div>
                        <img src alt />
                    </div>
                </div>

                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    Value={videoTitle}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    Value={Description}
                />
                <br />
                <br />

                <select onChange={onPrivateChange}>
                    {PrivateOpt.map((item, index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>

                <br />
                <br />

                <select onChange={onCategoryChange}>
                    {CategoryOpt.map((item, index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>

                <br />
                <br />

                <Button type="primary" size="large" onClick>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default VideoUploadPage
