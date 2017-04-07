var React = require('react');
var ReactDOM = require('react-dom');
var Simditor = require('simditor');
var $ = require('jquery');
import SimditorStyle from '../../node_modules/simditor/styles/simditor.css';

var Editor = React.createClass({
    componentDidMount : function(){

        var textbox = ReactDOM.findDOMNode(this.refs.textarea);
        var editor = new Simditor({
              textarea: $(textbox),
              placeholder: '说点神马吧...',
              defaultImage: 'default: images/image.png',
              params: {
                type: 'hidden',
                name: 'editor',
                val: ' 这是测试数据'
              },
              upload: {
                url: '',
                params: null,
                fileKey: 'upload_file',
                connectionCount: 3,
                leaveConfirm: 'Uploading is in progress, are you sure to leave this page?',
              },
              tabIndent: true,
              toolbar: [
                'title',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'fontScale',
                'color',
                'ol',            
                'ul',             
                'blockquote',
                'code',          
                'table',
                'link',
                // 'image',
                'hr' ,            
                'indent',
                'outdent',
                'alignment'
              ],
              toolbarFloat: false,
              toolbarFloatOffset: 0,
              toolbarHidden: false,
              pasteImage: false,
              cleanPaste: false,
              imageButton: ['upload', 'external']
        });
    },
    render : function(){
        return (
            <div>
                <textarea ref='textarea' />
            </div>
        )
    }
})

export default Editor;