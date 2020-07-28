import { MenuItem } from 'prosemirror-menu'
import { openPrompt, UploadField, TextField } from '../prompt'
import { canInsert } from '../utils'
import opts from '../../options'
import icons from '../icons'
// import { markItem } from '../utils'

export default {
  type: 'image-upload',
  title: '图片上传',
  icon: icons.imageUpload,
  create (schema) {
    return new MenuItem({
      title: this.title,
      icon: this.icon,
      enable(state) { return canInsert(state, schema.nodes.image) },
      run(state, dispatch, view) {
        const upload = opts.get('upload')
        if (!upload || typeof upload !== 'function') {
          console.warn('[image-upload] need to config upload function')
          return
        }

        openPrompt({
          title: '创建超链接',
          fields: {
            files: new UploadField({
              label: '上传',
              required: true
            }),
            title: new TextField({ label: '标题' })
          },
          callback(attrs) {
            const { files } = attrs
            if (!files || files.length === 0) {
              return
            }

            upload(attrs.files).then(result => {
              view.dispatch(view.state.tr.replaceSelectionWith(schema.nodes.resizableImage.createAndFill({
                src: result.url
              })))
              view.focus()
            })
          }
        })
      }
    })
  }
}
