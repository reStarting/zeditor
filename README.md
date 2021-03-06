# zeditor

ProseMirro based rich text editor。

[Live Demo](https://lkiarest.github.io/zeditor/)

### Install

```shell
yarn add @qintx/zeditor # yarn
npm i @qintx/zeditor # npm
```

### Usage

```javascript
import Zeditor from '@qintx/zeditor'

// create editor
const editor = Zeditor.create(document.getElementById('#editor'), Options)

// destory editor instance
editor.destroy()
```

### Options

```javascript
{
  sourceView: false, // support source view mode
  plugins: [], // add custom plugins (Prosemirror-Plugins)
  menubar: [
    ['heading'],
    ['font_size', 'font_family', 'font_color', 'bg_color'],
    ['strong', 'em', 'underline', 'strikethrough', 'link'],
    ['bullet_list', 'ordered_list', 'blockquote', 'lift', 'join'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['table', 'image', 'image_upload'],
    ['undo', 'redo']
  ],
  // font/background colors
  colors: [
    '#000000', '#4d4d4d', '#999999', '#e6e6e6', '#ffffff',
    '#e64c4c', '#e6994c', '#e6e64c', '#e6e64c', '#4ce64c',
    '#4ce699', '#4ce6e6', '#4ce6e6', '#4c4ce6', '#994ce6'
  ],
  // font families
  fontFamilies: [
    { name: 'inherit', label: '默认' },
    { name: '宋体,SimSun,STSong', label: '宋体' },
    { name: '微软雅黑,Microsoft YaHei', label: '微软雅黑' },
    { name: '楷体,楷体_GB2312, SimKai, Kaiti, STKaiti', label: '楷体' },
    { name: '黑体, SimHei, STHeiti', label: '黑体' },
    { name: '隶书, SimLi, LiSu', label: '隶书' },
    { name: 'andale mono', label: 'andale mono' },
    { name: 'arial, helvetica,sans-serif', label: 'arial' },
    { name: 'arial black,avant garde', label: 'arial black' },
    { name: 'comic sans ms', label: 'comic sans ms' },
    { name: 'impact,chicago', label: 'impact' }
  ],
  // font sizes
  fontSizes: [
    { name: 'inherit', label: '默认' },
    { name: 'x-small', label: '最小' },
    { name: 'small', label: '小' },
    { name: 'normal', label: '正常' },
    { name: 'large', label: '大' },
    { name: 'x-large', label: '极大' },
    { name: 'xx-large', label: '最大' }
  ],
  /**
   * image upload function, need to return a url
   * @param {Array} files List of file objects
   */
  upload (files) {
    // do ajax upload, and return a Promise of uploaded image
    return Promise.resolve({ url: 'http://image/url' })
  },
  events: {
    // input change event
    change (content) {
      console.log('content change:', content)
    }
  }
}
```

### IE10

Need to add polyfill for IE10:

```
import '@qintx/zeditor/lib/polyfill'
```

### Repo

[Github](https://github.com/lkiarest/zeditor)
