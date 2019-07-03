import React from 'react';
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Radio from "antd/lib/radio";
import Select from "antd/lib/select";
import {Pages} from "../App";
import "./index.css";
import dataLayer from '../dataLayer';

const { Option } = Select;
const { TextArea } = Input;

const categoriesArr = [
    <Option key="uncategorized">Uncategorized</Option>,
    <Option key="academy">Academy</Option>,
    <Option key="travel">Travel</Option>,
    <Option key="fitness">Fitness</Option>,
    <Option key="food">Food</Option>,
    <Option key="life">Life</Option>,
]

function handleChange(value) {
    console.log(`selected ${value}`);
}

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.form.validateFieldsAndScroll();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                dataLayer.createEvent(values).then(res => {
                   this.props.goto(Pages.CardList);
                });
                console.log('Received values of from: ', values);
            }
        });
    };

    handleChange = value => {
        console.log(`selected ${value}`);
    }
    backList = () => {
        this.props.goto(Pages.CardList);
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const titleError = isFieldTouched('title') && getFieldError('title');
        const contentError = isFieldTouched('content') && getFieldError('content');
        const formItemLayout = {
            style: {margin: '50px auto'},
            labelCol: { span: 5 },
            wrapperCol: { span: 15 },
        };

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <h1>New Post</h1>
                <Form.Item label="Title: " validateStatus={titleError ? 'error' : ''} help={titleError || ''}>
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please enter the title of new post!' }],
                    })(
                        <Input />,
                    )}
                </Form.Item>
                <Form.Item label="Categories ">
                    {getFieldDecorator('category', {
                        rules: [{ required: true, message: 'Please choose the categories' }],
                        initialValue: "uncategorized"
                    })(
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            onChange={handleChange}
                        >
                            {categoriesArr}
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item label="Share to ">
                    {getFieldDecorator('radio-group', {
                        rules: [{ required: true, message: 'Please select who can see your post' }],
                        initialValue: "public"
                    })(
                        <Radio.Group>
                            <Radio value="public">public</Radio>
                            <Radio value="private">private</Radio>
                        </Radio.Group>,
                    )}
                </Form.Item>
                <Form.Item  validateStatus={contentError ? 'error' : ''} help={contentError || ''}>
                    {getFieldDecorator('content', {
                        rules: [{ required: true, message: 'Please enter the content!' }],
                    })(
                        <TextArea
                            style = {{ marginLeft: '100px'}} 
                            placeholder="Share your story ... "
                            autosize={{ minRows: 6 }}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                <Button style = {{ marginLeft: '100px'}} className = "cancel" type="primary" htmlType="reset" onClick = {this.backList}>
                        Cancel 
                        </Button>
                    <Button style = {{ marginLeft: '100px'}} type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Post
                        </Button>
                </Form.Item>
            </Form>
        )
    }


}

const WrappedCreateEvent = Form.create({ name: 'create_event' })(CreateEvent);
export default WrappedCreateEvent;